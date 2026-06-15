sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "CREATE TABLE `v_generic`" in line:
        print(f"Found on line {idx + 1}:")
        for j in range(max(0, idx - 2), min(len(lines), idx + 35)):
            print(f"{j+1}: {lines[j]}", end="")
        break
