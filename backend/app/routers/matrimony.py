from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_, and_
from pydantic import BaseModel, EmailStr, field_validator
from typing import List, Optional

from app.database import get_db
from app.models.models import Profile
from app.routers.deps import get_admin_user

router = APIRouter(prefix="/api/matrimony", tags=["Matrimony"])

# Schema definitions
class ProfileBase(BaseModel):
    serial_no: Optional[str] = None
    name: str
    surname: str
    gotram: Optional[str] = None
    gender: str
    father: Optional[str] = None
    mother: Optional[str] = None
    dob: Optional[str] = None
    tob: Optional[str] = None
    pob: Optional[str] = None
    nakshatram: Optional[str] = None
    padham: Optional[str] = None
    raashi: Optional[str] = None
    height: Optional[str] = None
    complexion: Optional[str] = None
    education: Optional[str] = None
    occupation: Optional[str] = None
    organisation: Optional[str] = None
    workplace: Optional[str] = None
    earnings: Optional[str] = None
    msurname: Optional[str] = None
    nativeplace: Optional[str] = None
    presaddr: Optional[str] = None
    permaddr: Optional[str] = None
    mstatus: Optional[str] = None
    family: Optional[str] = None
    preference: Optional[str] = None
    remarks: Optional[str] = None
    contact: Optional[str] = None
    owner: Optional[str] = None
    owner_name: Optional[str] = None
    photo_url_1: Optional[str] = None
    photo_url_2: Optional[str] = None
    photo_url_3: Optional[str] = None
    photo_url_4: Optional[str] = None
    photo_url_5: Optional[str] = None
    photo_url_6: Optional[str] = None

class ProfileCreate(ProfileBase):
    photo_url_1: str  # Primary photo is mandatory for new profiles
    
    @field_validator("photo_url_1")
    @classmethod
    def validate_primary_photo(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Primary profile photo (photo_url_1) is mandatory for new profiles.")
        return v

class ProfileResponse(ProfileBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class ContactRequest(BaseModel):
    email: EmailStr

@router.get("/profiles", response_model=List[ProfileResponse])
def get_profiles(
    gender: Optional[str] = None,
    gotram: Optional[str] = None,
    location: Optional[str] = None,
    search: Optional[str] = None,
    limit: int = 100,
    offset: int = 0,
    db: Session = Depends(get_db)
):
    query = db.query(Profile)
    
    # Filter by gender
    if gender:
        query = query.filter(Profile.gender.ilike(gender))
        
    # Filter by gotram
    if gotram:
        query = query.filter(Profile.gotram.ilike(f"%{gotram}%"))
        
    # Filter by workplace/location
    if location:
        query = query.filter(
            or_(
                Profile.workplace.ilike(f"%{location}%"),
                Profile.presaddr.ilike(f"%{location}%"),
                Profile.permaddr.ilike(f"%{location}%")
            )
        )
        
    # General search query (names, occupations, gotram, workplace)
    if search:
        search_filter = or_(
            Profile.name.ilike(f"%{search}%"),
            Profile.surname.ilike(f"%{search}%"),
            Profile.gotram.ilike(f"%{search}%"),
            Profile.occupation.ilike(f"%{search}%"),
            Profile.education.ilike(f"%{search}%"),
            Profile.workplace.ilike(f"%{search}%")
        )
        query = query.filter(search_filter)
        
    return query.order_by(Profile.id.desc()).offset(offset).limit(limit).all()

@router.get("/profiles/{profile_id}", response_model=ProfileResponse)
def get_profile(profile_id: int, db: Session = Depends(get_db)):
    profile = db.query(Profile).filter(Profile.id == profile_id).first()
    if not profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Profile with ID {profile_id} not found"
        )
    return profile

@router.post("/profiles", response_model=ProfileResponse, status_code=status.HTTP_201_CREATED)
def create_profile(profile_data: ProfileCreate, admin_user=Depends(get_admin_user), db: Session = Depends(get_db)):
    db_profile = Profile(**profile_data.model_dump())
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

@router.put("/profiles/{profile_id}", response_model=ProfileResponse)
def update_profile(
    profile_id: int,
    profile_data: ProfileCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_profile = db.query(Profile).filter(Profile.id == profile_id).first()
    if not db_profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Profile with ID {profile_id} not found"
        )
        
    for key, val in profile_data.model_dump().items():
        setattr(db_profile, key, val)
        
    db.commit()
    db.refresh(db_profile)
    return db_profile

@router.delete("/profiles/{profile_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_profile(profile_id: int, admin_user=Depends(get_admin_user), db: Session = Depends(get_db)):
    db_profile = db.query(Profile).filter(Profile.id == profile_id).first()
    if not db_profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Profile with ID {profile_id} not found"
        )
    db.delete(db_profile)
    db.commit()
    return None

@router.post("/request/{profile_id}")
def request_contact(profile_id: int, request: ContactRequest, db: Session = Depends(get_db)):
    profile = db.query(Profile).filter(Profile.id == profile_id).first()
    if not profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found"
        )
    
    # In a real app, this would send an email notification to the administrator
    # detailing who is interested in contacting this profile.
    # For now, we simulate a successful request.
    return {
        "success": True,
        "message": f"Interest request for {profile.name} has been sent successfully. The administrator will contact you at {request.email} shortly."
    }
