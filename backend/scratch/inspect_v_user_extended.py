sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    for idx, line in enumerate(f):
        if "v_user_extended" in line:
            print(f"Line {idx+1}: {line.strip()[:120]}")
