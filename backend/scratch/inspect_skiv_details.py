sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_skiv.sql"

def print_next_lines(table_name, num_lines=30):
    print(f"\n=== DATA FOR {table_name} ===")
    with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
        found = False
        lines_printed = 0
        for line in f:
            if f"INSERT INTO `{table_name}`" in line:
                print(line.strip())
                found = True
                continue
            if found:
                print(line.strip())
                lines_printed += 1
                if lines_printed >= num_lines:
                    break

print_next_lines("skiv_users", 15)
print_next_lines("skiv_usermeta", 25)
print_next_lines("skiv_posts", 15)
print_next_lines("skiv_postmeta", 25)
