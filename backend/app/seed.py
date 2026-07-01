import json
import os
import sys
from sqlalchemy.orm import Session
# Add current directory to path so imports work
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import Base, engine, SessionLocal
from app.models.models import Profile, User, News, Event, Job, DirectoryMember, Newsletter
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
            
        # 5. Seed Events
        event_count = db.query(Event).count()
        if event_count == 0:
            print("Seeding sample events...")
            sample_events = [
                Event(
                    title="Sistakaranam Annual General Gathering 2026",
                    date="July 12, 2026",
                    time="10:00 AM - 5:00 PM",
                    location="Sistakaranam Community Hall, Visakhapatnam, AP",
                    organizer="All India Sistakarana Association",
                    description="Our grand annual meet to discuss community development projects, student scholarships distribution, senior member felicitations, and cultural programs. A community feast (Mahaprasadam) will follow in the afternoon.",
                    registrations=342,
                    status="Open"
                ),
                Event(
                    title="Youth Career & Startup Mentorship Workshop",
                    date="August 2, 2026",
                    time="2:00 PM - 6:00 PM",
                    location="Vande Mataram Auditorium, Hyderabad, TS (and Zoom Hybrid)",
                    organizer="Sistakaranam Welfare Association, Hyderabad",
                    description="A specialized mentorship camp matching student aspirants and budding entrepreneurs with community business leaders, executives, and academics. Covers resume building, startup pitching, and IT job referrals.",
                    registrations=154,
                    status="Open"
                ),
                Event(
                    title="Shivaratri Cultural Celebrations & Cricket Cup",
                    date="March 8, 2026 (Passed)",
                    time="All Night Event",
                    location="Railway Grounds, Kharagpur, WB",
                    organizer="Sista Karana Association, Kharagpur",
                    description="Annual cultural night celebrating Shivaratri with local hymns, classical dance dramas, and our signature floodlight cricket tournament. Over 16 youth teams participated in this memorable night.",
                    registrations=450,
                    status="Closed"
                )
            ]
            db.add_all(sample_events)
            db.commit()
            print("Sample events seeded.")
        else:
            print(f"Events already seeded ({event_count} events in DB).")

        # 6. Seed Jobs
        job_count = db.query(Job).count()
        if job_count == 0:
            print("Seeding sample jobs...")
            sample_jobs = [
                Job(
                    title="Senior Full Stack Developer",
                    company="Dhwani Voice Tech",
                    category="IT / Tech",
                    location="Hyderabad, TS (Hybrid)",
                    salary="₹18,00,000 - ₹24,00,000 / year",
                    posted="2 days ago",
                    type="Full-Time",
                    experience="5+ Years",
                    skills="React, Python, FastAPI, MySQL",
                    description="Looking for an experienced engineer to lead development of our voice recognition and AI automation services. You will design scalable database models and coordinate integrations."
                ),
                Job(
                    title="Accountant & Tax Consultant",
                    company="COLAND & Co. Financials",
                    category="Accounts / Finance",
                    location="Visakhapatnam, AP (On-site)",
                    salary="₹4,50,000 - ₹6,00,000 / year",
                    posted="3 days ago",
                    type="Full-Time",
                    experience="2+ Years",
                    skills="GST Filing, Tally Prime, Income Tax, Excel",
                    description="Seeking a detail-oriented accountant to manage client files, audit tax declarations, and coordinate GST reconciliation schedules. Friendly office environment."
                ),
                Job(
                    title="Data Analyst Intern",
                    company="Chakra Analytics Services",
                    category="IT / Tech",
                    location="Remote (India)",
                    salary="₹25,000 - ₹35,000 / month",
                    posted="1 day ago",
                    type="Internship (6 Months)",
                    experience="Freshers Welcome",
                    skills="SQL, Excel, Tableau, PowerBI",
                    description="Perfect opportunity for final-year students or fresh graduates to get hands-on experience in business intelligence pipelines. Work with top data mentors."
                ),
                Job(
                    title="Project Coordinator",
                    company="Sistla Infrastructures",
                    category="Management",
                    location="Bangalore, KA (On-site)",
                    salary="₹8,00,000 - ₹11,00,000 / year",
                    posted="1 week ago",
                    type="Full-Time",
                    experience="3+ Years",
                    skills="Agile, MS Project, Communication, Scrum",
                    description="Coordinate cross-functional civil and telecom infrastructure projects. Oversee material schedules, contractor tasks, and weekly compliance reports."
                ),
                Job(
                    title="Administrative Assistant",
                    company="SKIV Welfare Foundation",
                    category="Office Admin",
                    location="Bhubaneswar, Odisha (On-site)",
                    salary="₹3,00,000 - ₹4,20,000 / year",
                    posted="5 days ago",
                    type="Part-Time",
                    experience="1+ Years",
                    skills="Office Docs, Coordination, Billing, Data Entry",
                    description="Manage day-to-day office coordination tasks, register new applicants, organize files, and dispatch certificates for our community programs."
                )
            ]
            db.add_all(sample_jobs)
            db.commit()
            print("Sample jobs seeded.")
        else:
            print(f"Jobs already seeded ({job_count} jobs in DB).")

        # 7. Seed Directory Members
        member_count = db.query(DirectoryMember).count()
        if member_count == 0:
            print("Seeding sample directory members...")
            sample_members = [
                DirectoryMember(
                    name="Dr. Ramesh Patnaik",
                    gotram="Gautama",
                    profession="Retired Professor & Historian",
                    location="Visakhapatnam, AP",
                    specialization="Educational Counselling & Cultural History",
                    contact="ramesh.patnaik@skiv.online",
                    phone="+91 94401 XXXXX"
                ),
                DirectoryMember(
                    name="Sri D.S. Bharat",
                    gotram="Bharadwaja",
                    profession="Senior IT Executive",
                    location="Noida, Delhi-NCR",
                    specialization="Software Architecture & Career Mentorship",
                    contact="ds.bharat@gmail.com",
                    phone="+91 98112 XXXXX"
                ),
                DirectoryMember(
                    name="Smt. G. Varalakshmi",
                    gotram="Srivatsa",
                    profession="Social Worker & Cultural Advisor",
                    location="Hyderabad, TS",
                    specialization="Women Welfare & Community Organizing",
                    contact="varalakshmi.g@skiv.online",
                    phone="+91 98490 XXXXX"
                ),
                DirectoryMember(
                    name="Sri Kuppili Bhimeshwara Rao",
                    gotram="Kasyapa",
                    profession="Business Owner & Industrialist",
                    location="Kharagpur, WB",
                    specialization="Small Scale Industries & Local Employment",
                    contact="kuppili.brao@outlook.com",
                    phone="+91 98322 XXXXX"
                ),
                DirectoryMember(
                    name="Sri Sekharamantri Prabhakara Rao",
                    gotram="Vasishta",
                    profession="Chartered Accountant",
                    location="Bhubaneswar, Odisha",
                    specialization="Tax Compliance, Audits & NGO Accounting",
                    contact="sp.rao.ca@gmail.com",
                    phone="+91 99370 XXXXX"
                ),
                DirectoryMember(
                    name="Neha Patnaik",
                    gotram="Gautama",
                    profession="Chartered Financial Analyst (CFA)",
                    location="Raipur, Chhattisgarh",
                    specialization="Investment Banking & Corporate Finance",
                    contact="neha.patnaik@skiv.online",
                    phone="+91 78822 XXXXX"
                )
            ]
            db.add_all(sample_members)
            db.commit()
            print("Sample directory members seeded.")
        else:
            print(f"Directory members already seeded ({member_count} members in DB).")
            
        # 8. Seed Newsletters
        db.query(Newsletter).delete()
        print("Seeding sample newsletters...")
        sample_newsletters = [
            Newsletter(
                title="Lekha February 2022 Edition",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2022",
                published_date="06 Feb 2022",
                size="5.03 MB",
                downloads=579,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
                main_stories="Matrimonial Hub Launch, Annual General Body resolutions, State caste welfare updates",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            ),
            Newsletter(
                title="లేఖ (ఫిబ్రవరి 2022)",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2022",
                published_date="06 Feb 2022",
                size="4.93 MB",
                downloads=547,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #064e3b 100%)",
                main_stories="కార్తీక వనభోజన మహోత్సవం, శేఖి యాన్యువల్ అవార్డ్స్ విజేతలు, సంక్షేమ సంఘాల కమిటీ నివేదిక",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            ),
            Newsletter(
                title="Lekha January 2022 Edition",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2022",
                published_date="02 Jan 2022",
                size="4.96 MB",
                downloads=628,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #311042 100%)",
                main_stories="Butterfly Trip Reports, Sankranti Cultural Calendar, Caste Certificate Application guide",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            ),
            Newsletter(
                title="లేఖ (జనవరి 2022)",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2022",
                published_date="02 Jan 2022",
                size="4.32 MB",
                downloads=532,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #581c87 100%)",
                main_stories="సీతాకోకచిలుక సమావేశ నివేదిక, సంక్రాంతి శుభాకాంక్షలు, జీవనోపాధి నైపుణ్యాల శిక్షణ",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            ),
            Newsletter(
                title="Lekha December 2021 Edition",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2021",
                published_date="04 Dec 2021",
                size="6.01 MB",
                downloads=531,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
                main_stories="Kalam Snehithulu Poetry Meet, Atreya Gotram Genealogies, Community Trust annual budget",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            ),
            Newsletter(
                title="లేఖ (డిసెంబర్ 2021)",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2021",
                published_date="04 Dec 2021",
                size="5.21 MB",
                downloads=572,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #3b82f6 100%)",
                main_stories="కళాకారుల సన్మానం, ఆత్రేయ గోత్ర వంశ వృక్షం, కార్తీక వనభోజనాల ఏర్పాట్లు",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            ),
            Newsletter(
                title="Lekha November 2021 Edition",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2021",
                published_date="06 Nov 2021",
                size="5.23 MB",
                downloads=586,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
                main_stories="Job Fair Placements, Bhubaneswar Directory Releases, Annual Scholarship distribution",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            ),
            Newsletter(
                title="లేఖ (నవంబర్ 2021)",
                type="Newsletter",
                author="Sri Dwarapu Srinivasa Rao",
                year="2021",
                published_date="06 Nov 2021",
                size="3.96 MB",
                downloads=504,
                cover_bg="linear-gradient(135deg, #0f172a 0%, #064e3b 100%)",
                main_stories="ఉద్యోగ నియామకాలు, భువనేశ్వర్ డైరెక్టరీ విడుదల, మెరిట్ విద్యార్థులకు పురస్కారాలు",
                file_url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            )
        ]
        db.add_all(sample_newsletters)
        db.commit()
        print("Sample newsletters seeded.")
            
        print("All seeds verified.")
            
    except Exception as e:
        print(f"Error during seeding: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
