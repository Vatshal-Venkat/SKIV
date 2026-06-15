import json

json_file = r"C:\Users\Venkat_Vatshal\OneDrive\Desktop\SKIV\backend\objects3.json"

try:
    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    profiles = data.get("data", [])
    print(f"Total profiles: {len(profiles)}")
    
    genders = {}
    gotrams = {}
    locations = {}
    
    for p in profiles:
        g = p.get("Gender", "Unknown")
        genders[g] = genders.get(g, 0) + 1
        
        got = p.get("Gotram", "Unknown")
        gotrams[got] = gotrams.get(got, 0) + 1
        
        loc = p.get("Workplace", "Unknown")
        locations[loc] = locations.get(loc, 0) + 1
        
    print("\nGenders:")
    for g, count in genders.items():
        print(f"- {g}: {count}")
        
    print(f"\nUnique Gotrams count: {len(gotrams)}")
    # Print top 5 gotrams
    sorted_gotrams = sorted(gotrams.items(), key=lambda x: x[1], reverse=True)
    print("Top 5 Gotrams:")
    for got, count in sorted_gotrams[:5]:
        print(f"- {got}: {count}")
        
    print(f"\nUnique Workplaces count: {len(locations)}")
    # Print top 5 workplaces
    sorted_locs = sorted(locations.items(), key=lambda x: x[1], reverse=True)
    print("Top 5 Workplaces:")
    for loc, count in sorted_locs[:5]:
        print(f"- {loc}: {count}")
        
except Exception as e:
    print(f"Error parsing objects3.json: {e}")
