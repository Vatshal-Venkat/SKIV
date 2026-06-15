import re

sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

insert_tables = set()
with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        if line.strip().upper().startswith("INSERT INTO"):
            parts = line.split("`")
            if len(parts) >= 2:
                insert_tables.add(parts[1])

print("Tables with INSERT statements:")
for t in sorted(insert_tables):
    print(f"- {t}")
