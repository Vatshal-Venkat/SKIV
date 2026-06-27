import os
import sys
import re

# Add parent directory to path so imports work
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import SessionLocal
from app.models.models import Profile, DirectoryMember

def migrate_directory_members():
    db = SessionLocal()
    try:
        # 1. Clean existing directory members
        print("Clearing existing directory members...")
        db.query(DirectoryMember).delete()
        db.commit()
        
        # 2. Query all profiles from the matrimony table (which contains the original 359 records)
        profiles = db.query(Profile).all()
        print(f"Found {len(profiles)} profiles in the database. Migrating to directory_members...")
        
        directory_entries = []
        for p in profiles:
            # Construct name
            full_name = f"{p.name} {p.surname}".strip()
            
            # Format phone and contact
            contact_str = p.contact or ""
            # Clean newlines
            contact_clean = contact_str.replace('\n', ' / ').strip()
            
            # Try to extract phone numbers (e.g. 10 digit numbers)
            phones = re.findall(r'\b\d{10,12}\b', contact_str)
            phone_val = phones[0] if phones else "Contact via email"
            
            # If no email is present, we set email contact fallback
            email_val = "admin@skiv.online"
            # Look for email in contact string
            emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', contact_str)
            if emails:
                email_val = emails[0]
            
            # Profession mapping fallbacks
            prof = p.occupation or "Professional"
            if p.organisation and p.organisation.strip():
                prof = f"{prof} at {p.organisation}"
                
            loc = p.workplace or p.presaddr or "India"
            
            # Create member
            member = DirectoryMember(
                name=full_name,
                gotram=p.gotram or "Unknown",
                profession=prof,
                location=loc,
                specialization=p.education or "General",
                contact=email_val,
                phone=contact_clean or phone_val
            )
            directory_entries.append(member)
            
        # 3. Add to database
        db.add_all(directory_entries)
        db.commit()
        print(f"Successfully migrated {len(directory_entries)} members to the Community Directory!")
        
    except Exception as e:
        print(f"Error during directory migration: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    migrate_directory_members()
