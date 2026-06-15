sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_skiv.sql"
output_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\scratch\skiv_schemas.txt"

output = []

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    in_table = False
    current_table = ""
    table_lines = []
    
    for line in f:
        if line.strip().upper().startswith("CREATE TABLE"):
            parts = line.split("`")
            if len(parts) >= 2:
                table_name = parts[1]
                in_table = True
                current_table = table_name
                table_lines = [line]
                continue
        
        if in_table:
            table_lines.append(line)
            if line.strip().endswith(";") or (");" in line and not line.strip().startswith("INSERT")):
                output.append(f"--- SCHEMA FOR {current_table} ---")
                output.append("".join(table_lines))
                output.append("\n")
                in_table = False
                current_table = ""
                table_lines = []

with open(output_file, "w", encoding="utf-8") as out_f:
    out_f.write("\n".join(output))

print("SKIV schemas extracted successfully.")
