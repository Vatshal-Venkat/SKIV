sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for idx in range(167230, 167245):
    if idx < len(lines):
        print(f"{idx+1}: {lines[idx]}", end="")
