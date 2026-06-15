import re

sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

match = re.search(r"INSERT INTO `v_user_extended_struct` VALUES\s*(.*?);", content, re.DOTALL)
if match:
    values = match.group(1)
    print("Found user extended structure fields:")
    # Find all tuples in the values list
    # e.g., (1, 'user_extended_struct_name', ...)
    for item in re.findall(r"\((.*?)\)", values):
        print(item)
else:
    print("No INSERT INTO `v_user_extended_struct` found")
