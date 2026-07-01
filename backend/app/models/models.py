from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    display_name = Column(String(100), nullable=True)
    is_admin = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class News(Base):
    __tablename__ = "news"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    summary = Column(Text, nullable=True)
    body = Column(Text, nullable=False)
    category = Column(String(100), nullable=False, default="General")
    thumbnail_url = Column(String(255), nullable=True)
    author_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Profile(Base):
    __tablename__ = "profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    serial_no = Column(String(50), nullable=True)
    name = Column(String(200), nullable=False)
    surname = Column(String(200), nullable=False)
    gotram = Column(String(100), nullable=True)
    gender = Column(String(50), nullable=False)
    father = Column(String(200), nullable=True)
    mother = Column(String(200), nullable=True)
    dob = Column(String(100), nullable=True)          # Date of Birth
    tob = Column(String(100), nullable=True)          # Time of Birth
    pob = Column(String(200), nullable=True)          # Place of Birth
    nakshatram = Column(String(100), nullable=True)
    padham = Column(String(50), nullable=True)
    raashi = Column(String(100), nullable=True)
    height = Column(String(50), nullable=True)
    complexion = Column(String(100), nullable=True)
    education = Column(String(200), nullable=True)
    occupation = Column(String(200), nullable=True)
    organisation = Column(String(200), nullable=True)
    workplace = Column(String(200), nullable=True)     # Location
    earnings = Column(String(100), nullable=True)
    msurname = Column(String(200), nullable=True)      # Mother's surname
    nativeplace = Column(String(200), nullable=True)
    presaddr = Column(Text, nullable=True)             # Present address
    permaddr = Column(Text, nullable=True)             # Permanent address
    mstatus = Column(String(100), nullable=True)       # Marital Status
    family = Column(Text, nullable=True)               # Family details
    preference = Column(Text, nullable=True)           # Partner preference
    remarks = Column(Text, nullable=True)
    contact = Column(Text, nullable=True)              # Phone number(s)
    owner = Column(String(100), nullable=True)         # Created by/referring person
    owner_name = Column(String(200), nullable=True)    # Owner's full name
    photo_url_1 = Column(String(255), nullable=True)     # Primary uploaded photo (Mandatory for new profiles)
    photo_url_2 = Column(String(255), nullable=True)     # Optional photo 2
    photo_url_3 = Column(String(255), nullable=True)     # Optional photo 3
    photo_url_4 = Column(String(255), nullable=True)     # Optional photo 4
    photo_url_5 = Column(String(255), nullable=True)     # Optional photo 5
    photo_url_6 = Column(String(255), nullable=True)     # Optional photo 6
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Event(Base):
    __tablename__ = "events"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    date = Column(String(100), nullable=False)
    time = Column(String(100), nullable=True)
    location = Column(String(255), nullable=False)
    organizer = Column(String(200), nullable=True)
    description = Column(Text, nullable=True)
    registrations = Column(Integer, default=0, nullable=False)
    status = Column(String(50), default="Open", nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Job(Base):
    __tablename__ = "jobs"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    company = Column(String(255), nullable=False)
    category = Column(String(100), nullable=False, default="IT / Tech")
    location = Column(String(255), nullable=False)
    salary = Column(String(100), nullable=True)
    posted = Column(String(100), nullable=True)
    type = Column(String(100), nullable=False, default="Full-Time")
    experience = Column(String(100), nullable=True)
    skills = Column(Text, nullable=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class DirectoryMember(Base):
    __tablename__ = "directory_members"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    gotram = Column(String(100), nullable=True)
    profession = Column(String(200), nullable=False)
    location = Column(String(200), nullable=False)
    specialization = Column(Text, nullable=True)
    contact = Column(String(100), nullable=True)
    phone = Column(String(100), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Newsletter(Base):
    __tablename__ = "newsletters"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    type = Column(String(100), default="Newsletter", nullable=False)
    year = Column(String(50), nullable=False)
    published_date = Column(String(100), nullable=False)
    size = Column(String(50), nullable=False)
    downloads = Column(Integer, default=0, nullable=False)
    cover_bg = Column(String(255), nullable=True)
    main_stories = Column(Text, nullable=True)  # Store key stories as a comma-separated string
    file_url = Column(String(255), nullable=False)  # Cloudinary file link
    created_at = Column(DateTime(timezone=True), server_default=func.now())


