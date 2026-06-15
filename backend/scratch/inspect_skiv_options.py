import re

sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_skiv.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

options_matches = re.findall(r"INSERT INTO `skiv_options`\s*\(.*?\)\s*VALUES\s*(.*?);", content, re.DOTALL | re.IGNORECASE)
if not options_matches:
    options_matches = re.findall(r"INSERT INTO `skiv_options`\s*VALUES\s*(.*?);", content, re.DOTALL | re.IGNORECASE)

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

options_data = []
for match in options_matches:
    options_data.extend(parse_values(match))

print(f"Parsed {len(options_data)} options from skiv_options table.")
for o in options_data:
    if len(o) >= 3:
        name = o[1].strip("'")
        val = o[2].strip("'")
        if name in ["siteurl", "home", "blogname", "blogdescription", "active_plugins"]:
            print(f"{name}: {val}")
