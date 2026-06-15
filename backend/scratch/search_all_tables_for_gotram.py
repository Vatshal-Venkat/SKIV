sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"
output_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\scratch\gotram_matches.txt"
matches = []

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    for idx, line in enumerate(f):
        if "gotram" in line.lower() or "gotra" in line.lower() or "gautama" in line.lower():
            matches.append(f"Line {idx+1}: {line.strip()[:200]}")

with open(output_file, "w", encoding="utf-8") as out_f:
    out_f.write("\n".join(matches))

print(f"Done. Found {len(matches)} matches.")
