from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional

from app.database import get_db
from app.models.models import Newsletter
from app.routers.deps import get_admin_user

router = APIRouter(prefix="/api/newsletters", tags=["Newsletters / Publications"])

# Schema definitions
class NewsletterBase(BaseModel):
    title: str
    type: str = "Newsletter"
    year: str
    published_date: str
    size: str
    cover_bg: Optional[str] = "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)"
    main_stories: Optional[str] = None
    file_url: str

class NewsletterCreate(NewsletterBase):
    pass

class NewsletterResponse(NewsletterBase):
    id: int
    downloads: int
    created_at: datetime
    
    class Config:
        from_attributes = True

@router.get("", response_model=List[NewsletterResponse])
def get_newsletters(db: Session = Depends(get_db)):
    return db.query(Newsletter).order_by(Newsletter.created_at.desc()).all()

@router.get("/{newsletter_id}", response_model=NewsletterResponse)
def get_newsletter(newsletter_id: int, db: Session = Depends(get_db)):
    newsletter = db.query(Newsletter).filter(Newsletter.id == newsletter_id).first()
    if not newsletter:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Newsletter with ID {newsletter_id} not found"
        )
    return newsletter

@router.post("", response_model=NewsletterResponse, status_code=status.HTTP_201_CREATED)
def create_newsletter(
    newsletter_data: NewsletterCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_newsletter = Newsletter(**newsletter_data.model_dump())
    db.add(db_newsletter)
    db.commit()
    db.refresh(db_newsletter)
    return db_newsletter

@router.delete("/{newsletter_id}", status_code=status.HTTP_200_OK)
def delete_newsletter(
    newsletter_id: int,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    newsletter = db.query(Newsletter).filter(Newsletter.id == newsletter_id).first()
    if not newsletter:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Newsletter with ID {newsletter_id} not found"
        )
    db.delete(newsletter)
    db.commit()
    return {"detail": "Newsletter deleted successfully"}

@router.post("/download/{newsletter_id}", response_model=NewsletterResponse)
def track_download(newsletter_id: int, db: Session = Depends(get_db)):
    newsletter = db.query(Newsletter).filter(Newsletter.id == newsletter_id).first()
    if not newsletter:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Newsletter with ID {newsletter_id} not found"
        )
    newsletter.downloads += 1
    db.commit()
    db.refresh(newsletter)
    return newsletter
