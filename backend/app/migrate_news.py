import os
import sys
import html
from datetime import datetime

# Add current directory to path so imports work
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import SessionLocal, engine
from app.models.models import News, User

def parse_row_values(row_str):
    values = []
    n = len(row_str)
    i = 0
    while i < n:
        # Skip whitespace and commas
        while i < n and (row_str[i].isspace() or row_str[i] == ','):
            i += 1
        if i >= n:
            break
            
        if row_str[i] == "'":
            i += 1  # Skip opening quote
            str_chars = []
            while i < n:
                char = row_str[i]
                if char == '\\':
                    if i + 1 < n:
                        next_char = row_str[i+1]
                        if next_char == 'n':
                            str_chars.append('\n')
                        elif next_char == 'r':
                            str_chars.append('\r')
                        elif next_char == 't':
                            str_chars.append('\t')
                        else:
                            str_chars.append(next_char)
                        i += 2
                    else:
                        str_chars.append('\\')
                        i += 1
                elif char == "'":
                    # SQL escaping '' for single quote
                    if i + 1 < n and row_str[i+1] == "'":
                        str_chars.append("'")
                        i += 2
                    else:
                        i += 1  # Skip closing quote
                        break
                else:
                    str_chars.append(char)
                    i += 1
            values.append("".join(str_chars))
        else:
            # Parse unquoted (numbers or NULL)
            start = i
            while i < n and row_str[i] != ',':
                i += 1
            val_str = row_str[start:i].strip()
            if val_str.upper() == 'NULL':
                values.append(None)
            else:
                try:
                    values.append(int(val_str))
                except ValueError:
                    try:
                        values.append(float(val_str))
                    except ValueError:
                        values.append(val_str)
    return values

def clean_html(text):
    if not text:
        return ""
    # Strip e107's [html]...[/html] tags
    text = text.replace("[html]", "").replace("[/html]", "")
    # Unescape HTML character entities
    text = html.unescape(text)
    return text.strip()

def clean_thumbnail_url(raw_thumb):
    if not raw_thumb or raw_thumb.strip() == "":
        return None
    # Split by comma in case of multiple images, take first non-empty
    parts = [p.strip() for p in raw_thumb.split(',') if p.strip()]
    if not parts:
        return None
    first = parts[0]
    # Replace e107 media indicators
    first = first.replace('{e_MEDIA_IMAGE}', '/media/')
    first = first.replace('{e_THEME}', '/media/')
    return first

def map_category(cat_id):
    # Map E107 numeric category ID to standard category string
    # Category 8 is Community Update
    # Category 2 is Announcements
    # Category 3 is Events
    mapping = {
        8: "Community Update",
        2: "Announcements",
        3: "Events"
    }
    return mapping.get(cat_id, "General")

def run_migration():
    sql_file_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "omnibjwt_vedika.sql")
    if not os.path.exists(sql_file_path):
        print(f"Error: SQL dump file not found at: {sql_file_path}")
        sys.exit(1)
        
    db = SessionLocal()
    try:
        # Get admin user ID
        admin_user = db.query(User).filter(User.username == "admin").first()
        if not admin_user:
            print("Error: Default admin user must exist before running migration.")
            sys.exit(1)
        author_id = admin_user.id
        
        print("Starting news migration from omnibjwt_vedika.sql...")
        
        in_insert = False
        insert_content = []
        parsed_count = 0
        skipped_count = 0
        imported_count = 0
        
        # Open and scan file line-by-line (Memory-efficient)
        with open(sql_file_path, 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                if line.startswith('INSERT INTO `v_news` '):
                    in_insert = True
                    insert_content = [line]
                    continue
                    
                if in_insert:
                    insert_content.append(line)
                    if line.strip().endswith(';'):
                        in_insert = False
                        
                        # Process block
                        full_insert = "".join(insert_content)
                        values_idx = full_insert.find('VALUES')
                        if values_idx == -1:
                            continue
                            
                        rows_data = full_insert[values_idx + 6:].strip()
                        current_row = []
                        in_string = False
                        escape_next = False
                        paren_depth = 0
                        
                        i = 0
                        n = len(rows_data)
                        while i < n:
                            char = rows_data[i]
                            if escape_next:
                                current_row.append(char)
                                escape_next = False
                                i += 1
                            elif char == '\\':
                                current_row.append(char)
                                escape_next = True
                                i += 1
                            elif char == "'":
                                in_string = not in_string
                                current_row.append(char)
                                i += 1
                            elif not in_string and char == '(':
                                if paren_depth == 0:
                                    current_row = []
                                else:
                                    current_row.append(char)
                                paren_depth += 1
                                i += 1
                            elif not in_string and char == ')':
                                paren_depth -= 1
                                if paren_depth == 0:
                                    row_str = "".join(current_row)
                                    row_vals = parse_row_values(row_str)
                                    
                                    # Ensure valid row format
                                    if len(row_vals) >= 19:
                                        news_id = int(row_vals[0])
                                        title = row_vals[1]
                                        body_raw = row_vals[3]
                                        extended_raw = row_vals[4]
                                        datestamp = row_vals[8]
                                        category_id = row_vals[10]
                                        summary_raw = row_vals[17]
                                        thumbnail_raw = row_vals[18]
                                        
                                        # Merge body and extended
                                        full_body = body_raw
                                        if extended_raw and extended_raw.strip():
                                            full_body += "\n\n" + extended_raw
                                            
                                        title_cleaned = clean_html(title)
                                        summary_cleaned = clean_html(summary_raw)
                                        body_cleaned = clean_html(full_body)
                                        thumbnail_url = clean_thumbnail_url(thumbnail_raw)
                                        category = map_category(category_id)
                                        
                                        # Convert datestamp to datetime
                                        try:
                                            created_at = datetime.utcfromtimestamp(int(datestamp))
                                        except Exception:
                                            created_at = datetime.utcnow()
                                            
                                        # Check if article already exists
                                        existing_news = db.query(News).filter(News.id == news_id).first()
                                        if existing_news:
                                            skipped_count += 1
                                        else:
                                            # Create news entry
                                            news_item = News(
                                                id=news_id,
                                                title=title_cleaned,
                                                summary=summary_cleaned or None,
                                                body=body_cleaned,
                                                category=category,
                                                thumbnail_url=thumbnail_url,
                                                author_id=author_id,
                                                created_at=created_at
                                            )
                                            db.add(news_item)
                                            imported_count += 1
                                            
                                            # Commit periodically to keep transactions fast and limit memory
                                            if imported_count % 100 == 0:
                                                db.commit()
                                                print(f"Imported {imported_count} articles...")
                                        
                                        parsed_count += 1
                                    else:
                                        print(f"Warning: Skipped corrupted row parsing (fields count: {len(row_vals)})")
                                        
                                    i += 1
                                else:
                                    current_row.append(char)
                                    i += 1
                            else:
                                if paren_depth > 0:
                                    current_row.append(char)
                                i += 1
        
        db.commit()  # final commit
        print(f"\nMigration Completed!")
        print(f"  Total parsed: {parsed_count}")
        print(f"  Successfully imported: {imported_count}")
        print(f"  Skipped (already exist): {skipped_count}")
        
    except Exception as e:
        print(f"Error during migration: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    run_migration()
