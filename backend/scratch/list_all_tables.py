import re

sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"
tables = []

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        if "CREATE TABLE" in line.upper():
            parts = line.split("`")
            if len(parts) >= 2:
                tables.append(parts[1])

print(f"Total tables found: {len(tables)}")
for t in sorted(tables):
    print(f"- {t}")
