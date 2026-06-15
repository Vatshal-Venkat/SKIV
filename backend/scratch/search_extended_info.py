sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_vedika.sql"

# Let's search for keywords like Gotram, Height, Education, Occupation, etc. case-insensitively
keywords = ["gotram", "height", "education", "occupation", "company", "location", "matrimony", "vedika"]

with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    for idx, line in enumerate(f):
        # check if line contains any of the keywords
        for kw in keywords:
            if kw in line.lower():
                # print the line number, keyword, and line snippet
                print(f"Line {idx+1} ({kw}): {line.strip()[:150]}")
                break
