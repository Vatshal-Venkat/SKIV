import re

sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

# Let's search for "INSERT INTO `v_user`"
# And then print some rows to see if there is any custom data in user fields (like user_xup, user_prefs, etc.)
with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    in_insert = False
    count = 0
    for line in f:
        if "INSERT INTO `v_user`" in line:
            in_insert = True
            print(line.strip()[:300])
            continue
        if in_insert:
            # print the first 10 rows
            print(line.strip()[:400])
            count += 1
            if count > 20:
                break
