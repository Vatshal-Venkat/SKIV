sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    for idx, line in enumerate(f):
        if line.strip().upper().startswith("INSERT INTO `v_user_extended`"):
            print(f"Line {idx+1}: {line.strip()[:300]}")
            # print the next 20 lines to see values
            for j in range(1, 25):
                print(f"  +{j}: {f.readline().strip()[:300]}")
            break
