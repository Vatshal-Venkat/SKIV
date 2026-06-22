from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional

from app.database import get_db
from app.models.models import DirectoryMember
from app.routers.deps import get_admin_user

router = APIRouter(prefix="/api/directory", tags=["Directory"])

class DirectoryMemberBase(BaseModel):
    name: str
    gotram: Optional[str] = None
    profession: str
    location: str
    specialization: Optional[str] = None
    contact: Optional[str] = None
    phone: Optional[str] = None

class DirectoryMemberCreate(DirectoryMemberBase):
    pass

class DirectoryMemberResponse(DirectoryMemberBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

@router.get("", response_model=List[DirectoryMemberResponse])
def get_directory(db: Session = Depends(get_db)):
    return db.query(DirectoryMember).order_by(DirectoryMember.id.desc()).all()

@router.get("/{member_id}", response_model=DirectoryMemberResponse)
def get_member(member_id: int, db: Session = Depends(get_db)):
    member = db.query(DirectoryMember).filter(DirectoryMember.id == member_id).first()
    if not member:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Directory member with ID {member_id} not found"
        )
    return member

@router.post("", response_model=DirectoryMemberResponse, status_code=status.HTTP_201_CREATED)
def create_member(
    member_data: DirectoryMemberCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_member = DirectoryMember(**member_data.model_dump())
    db.add(db_member)
    db.commit()
    db.refresh(db_member)
    return db_member

@router.put("/{member_id}", response_model=DirectoryMemberResponse)
def update_member(
    member_id: int,
    member_data: DirectoryMemberCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_member = db.query(DirectoryMember).filter(DirectoryMember.id == member_id).first()
    if not db_member:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Directory member with ID {member_id} not found"
        )
        
    for key, val in member_data.model_dump().items():
        setattr(db_member, key, val)
        
    db.commit()
    db.refresh(db_member)
    return db_member

@router.delete("/{member_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_member(
    member_id: int,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_member = db.query(DirectoryMember).filter(DirectoryMember.id == member_id).first()
    if not db_member:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Directory member with ID {member_id} not found"
        )
    db.delete(db_member)
    db.commit()
    return None
