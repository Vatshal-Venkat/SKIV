sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_skiv.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    for idx, line in enumerate(f):
        if "height" in line.lower() or "avatar" in line.lower() or "company" in line.lower():
            print(f"Line {idx+1}: {line.strip()[:180]}")
