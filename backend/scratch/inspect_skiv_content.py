import re

sql_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\omnibjwt_skiv.sql"

# Read the entire file
with open(sql_file, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Find all insert statements to see what data they hold
# We want to extract post types, user meta keys, and post meta keys

# Let's search for unique meta keys in skiv_usermeta
usermeta_keys = set()
usermeta_matches = re.findall(r"INSERT INTO `skiv_usermeta` VALUES\s*(.*?);", content, re.DOTALL)
for match in usermeta_matches:
    # Find all tuples
    for item in re.findall(r"\((.*?)\)", match):
        parts = item.split(",")
        if len(parts) >= 3:
            key = parts[2].strip().strip("'")
            usermeta_keys.add(key)

print("--- DISTINCT USERMETA KEYS ---")
for k in sorted(usermeta_keys):
    print(f"- {k}")
print("\n")

# Let's search for unique meta keys in skiv_postmeta
postmeta_keys = set()
postmeta_matches = re.findall(r"INSERT INTO `skiv_postmeta` VALUES\s*(.*?);", content, re.DOTALL)
for match in postmeta_matches:
    for item in re.findall(r"\((.*?)\)", match):
        parts = item.split(",")
        if len(parts) >= 3:
            key = parts[2].strip().strip("'")
            postmeta_keys.add(key)

print("--- DISTINCT POSTMETA KEYS ---")
for k in sorted(postmeta_keys):
    print(f"- {k}")
print("\n")

# Let's search for unique post types in skiv_posts
post_types = set()
posts_matches = re.findall(r"INSERT INTO `skiv_posts` VALUES\s*(.*?);", content, re.DOTALL)
for match in posts_matches:
    for item in re.findall(r"\((.*?)\)", match):
        parts = item.split(",")
        # post_type is the 21st column in skiv_posts
        # Let's try to parse it by splitting on commas, but since content has commas, it might be tricky.
        # Let's do a simple regex search for post types in the text, or split carefully.
        # Alternatively, let's search for the pattern: , '...' at the end of the tuple or just search for keywords
        pass

# Let's do a simple substring search for keywords in skiv_posts content
keywords = ["gotram", "height", "education", "occupation", "company", "location", "gender", "avatar"]
found_keywords = {}
for kw in keywords:
    matches = [m.start() for m in re.finditer(kw, content, re.IGNORECASE)]
    found_keywords[kw] = len(matches)

print("--- KEYWORD MATCH COUNTS ---")
for kw, count in found_keywords.items():
    print(f"- '{kw}': {count} occurrences")
