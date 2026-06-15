sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"
output_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\scratch\schemas.txt"

target_tables = [
    "v_user",
    "v_user_extended",
    "v_user_extended_struct",
    "v_news",
    "v_news_category",
    "v_page"
]

output = []

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    in_table = False
    current_table = ""
    table_lines = []
    
    for line in f:
        # Check if line starts with CREATE TABLE
        if line.strip().upper().startswith("CREATE TABLE"):
            # Extract table name
            parts = line.split("`")
            if len(parts) >= 2:
                table_name = parts[1]
                if table_name in target_tables:
                    in_table = True
                    current_table = table_name
                    table_lines = [line]
                    continue
        
        if in_table:
            table_lines.append(line)
            # Table definition ends with ); and optional engine definition
            if line.strip().endswith(";") or (");" in line and not line.strip().startswith("INSERT")):
                output.append(f"--- SCHEMA FOR {current_table} ---")
                output.append("".join(table_lines))
                output.append("\n")
                in_table = False
                current_table = ""
                table_lines = []

with open(output_file, "w", encoding="utf-8") as out_f:
    out_f.write("\n".join(output))

print("Schemas extracted successfully.")
