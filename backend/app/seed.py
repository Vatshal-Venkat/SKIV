import json
import os
import sys
from sqlalchemy.orm import Session
# Add current directory to path so imports work
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import Base, engine, SessionLocal
from app.models.models import Profile, User, News
from app.services.auth import AuthService

def seed_database():
    # 1. Create tables
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    
    db: Session = SessionLocal()
    
    try:
        # 2. Create default Admin User
        admin_user = db.query(User).filter(User.username == "admin").first()
        if not admin_user:
            print("Creating default admin user...")
            admin_user = User(
                username="admin",
                email="admin@skiv.online",
                hashed_password=AuthService.hash_password("admin123"),
                display_name="SKIV Administrator",
                is_admin=True
            )
            db.add(admin_user)
            db.commit()
            db.refresh(admin_user)
            print("Admin user created (username: admin, password: admin123).")
        else:
            print("Admin user already exists.")
            
        # 3. Create default News articles (from mock data or sample)
        news_count = db.query(News).count()
        if news_count == 0:
            print("Seeding sample news articles...")
            sample_news = [
                News(
                    title="A Cricket Tournament to Remember",
                    summary="The vibrant celebration of Shivaratri overnight recreation was successfully organised by Sistakaranam Ikyavedika. The highlight of the night was the Cricket Tournament.",
                    body="The vibrant celebration of Shivaratri overnight recreation was successfully organised by Sistakaranam Ikyavedika. The highlight of the night was the Cricket Tournament, which drew a massive crowd from all parts of the state. Over 16 teams participated in the knockout stages, exhibiting sportsmanship and community bonding.\n\nSponsors and community elders presented trophies to the winning and runner-up teams, appreciating the hard work of the youth organizers who worked tirelessly to coordinate the matches, refreshments, and logistics. The event concluded with traditional prayers and a community feast (Mahaprasadam) in the morning.",
                    category="Community Update",
                    thumbnail_url="",
                    author_id=admin_user.id
                ),
                News(
                    title="Delhi Sistakaranam Families Picnic",
                    summary="Delhi Picnic of our Sistakaranam families was organised by Sri D.S.Bharat, in what turned out to be a notable team effort.",
                    body="The annual picnic for Sistakaranam families residing in Delhi-NCR was organized at the beautiful Lodhi Gardens. More than 120 family members attended the gathering, creating a warm, festive, and engaging atmosphere.\n\nThe event featured multiple interactive games for children and elders, traditional food potluck, and a discussion session regarding youth welfare and student mentorship. Organizer Sri D.S.Bharat thanked all attendees and contributors for making this annual picnic a resounding success, fostering a strong network of families in the national capital region.",
                    category="Events",
                    thumbnail_url="",
                    author_id=admin_user.id
                )
            ]
            db.add_all(sample_news)
            db.commit()
            print("Sample news seeded.")
            
        # 4. Seed Matrimony Profiles from objects3.json
        profile_count = db.query(Profile).count()
        if profile_count == 0:
            json_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "objects3.json")
            if os.path.exists(json_path):
                print(f"Reading profiles from {json_path}...")
                with open(json_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    
                profiles_list = data.get("data", [])
                print(f"Found {len(profiles_list)} profiles to import.")
                
                db_profiles = []
                for p in profiles_list:
                    # Convert to model structure
                    db_profile = Profile(
                        serial_no=str(p.get("S", {}).get(" No", p.get("Id", ""))),
                        name=p.get("Name", "").strip(),
                        surname=p.get("Surname", "").strip(),
                        gotram=p.get("Gotram", "").strip(),
                        gender=p.get("Gender", "").strip(),
                        father=p.get("Father", "").strip(),
                        mother=p.get("Mother", "").strip(),
                        dob=p.get("DOB", "").strip(),
                        tob=p.get("TOB", "").strip(),
                        pob=p.get("POB", "").strip(),
                        nakshatram=p.get("Nakshatram", "").strip(),
                        padham=p.get("Padham", "").strip(),
                        raashi=p.get("Raashi", "").strip(),
                        height=p.get("Height", "").strip(),
                        complexion=p.get("Complexion", "").strip(),
                        education=p.get("Education", "").strip(),
                        occupation=p.get("Occupation", "").strip(),
                        organisation=p.get("Organisation", "").strip(),
                        workplace=p.get("Workplace", "").strip(),
                        earnings=p.get("Earnings", "").strip(),
                        msurname=p.get("Msurname", "").strip(),
                        nativeplace=p.get("Nativeplace", "").strip(),
                        presaddr=p.get("Presaddr", "").strip(),
                        permaddr=p.get("Permaddr", "").strip(),
                        mstatus=p.get("Mstatus", "").strip(),
                        family=p.get("Family", "").strip(),
                        preference=p.get("Preference", "").strip(),
                        remarks=p.get("Remarks", "").strip(),
                        contact=p.get("Contact", "").strip(),
                        owner=p.get("Owner", "").strip(),
                        owner_name=p.get("OwnerName", "").strip(),
                        photo_url_1=None,  # Existing profiles start with no photo
                        photo_url_2=None,
                        photo_url_3=None,
                        photo_url_4=None,
                        photo_url_5=None,
                        photo_url_6=None
                    )
                    db_profiles.append(db_profile)
                
                print("Writing profiles to database...")
                db.bulk_save_objects(db_profiles)
                db.commit()
                print(f"Successfully seeded {len(db_profiles)} matrimony profiles.")
            else:
                print(f"objects3.json not found at {json_path}!")
        else:
            print(f"Matrimony profiles already seeded ({profile_count} profiles in DB).")
            
    except Exception as e:
        print(f"Error during seeding: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
