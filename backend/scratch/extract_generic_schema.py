sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

def get_schema(table_name):
    schema = []
    with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
        in_table = False
        for line in f:
            if line.strip().upper().startswith(f"CREATE TABLE `{table_name}`"):
                in_table = True
                schema.append(line)
                continue
            if in_table:
                schema.append(line)
                if line.strip().endswith(";") or (");" in line and not line.strip().startswith("INSERT")):
                    break
    return "".join(schema)

print("--- SCHEMA FOR v_generic ---")
print(get_schema("v_generic"))
