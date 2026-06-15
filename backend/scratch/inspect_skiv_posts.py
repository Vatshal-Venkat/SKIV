import re

sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_skiv.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Let's search for INSERT INTO `skiv_posts` case-insensitively
# It matches INSERT INTO `skiv_posts` (columns) VALUES (data);
posts_matches = re.findall(r"INSERT INTO `skiv_posts`\s*\(.*?\)\s*VALUES\s*(.*?);", content, re.DOTALL | re.IGNORECASE)
if not posts_matches:
    # Try matching without columns just in case
    posts_matches = re.findall(r"INSERT INTO `skiv_posts`\s*VALUES\s*(.*?);", content, re.DOTALL | re.IGNORECASE)

print(f"Found {len(posts_matches)} insert statements for skiv_posts.")

def parse_values(values_str):
    tuples = []
    current_tuple = []
    current_val = []
    in_string = False
    in_tuple = False
    escape = False
    
    for char in values_str:
        if escape:
            current_val.append(char)
            escape = False
            continue
        if char == '\\':
            current_val.append(char)
            escape = True
            continue
        if char == "'":
            in_string = not in_string
            current_val.append(char)
            continue
        if in_string:
            current_val.append(char)
            continue
        if char == '(':
            in_tuple = True
            current_val = []
            continue
        if char == ')':
            in_tuple = False
            current_tuple.append("".join(current_val).strip())
            tuples.append(current_tuple)
            current_tuple = []
            continue
        if char == ',':
            if in_tuple:
                current_tuple.append("".join(current_val).strip())
                current_val = []
            continue
        if in_tuple:
            current_val.append(char)
            
    return tuples

posts_data = []
for match in posts_matches:
    posts_data.extend(parse_values(match))

print(f"Parsed {len(posts_data)} posts successfully.")
ptypes = {}
for post in posts_data:
    if len(post) >= 21:
        ptype = post[20].strip("'")
        ptypes[ptype] = ptypes.get(ptype, 0) + 1
    else:
        print(f"Post tuple length too short: {len(post)}")

for p, count in ptypes.items():
    print(f"- Post Type '{p}': {count} posts")
