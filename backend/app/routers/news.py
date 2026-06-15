from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional

from app.database import get_db
from app.models.models import News
from app.routers.deps import get_admin_user

router = APIRouter(prefix="/api/news", tags=["News / CMS"])

# Schema definitions
class NewsBase(BaseModel):
    title: str
    summary: Optional[str] = None
    body: str
    category: str = "General"
    thumbnail_url: Optional[str] = None

class NewsCreate(NewsBase):
    pass

class NewsResponse(NewsBase):
    id: int
    author_id: Optional[int]
    created_at: datetime
    
    class Config:
        from_attributes = True

@router.get("", response_model=List[NewsResponse])
def get_news(
    category: Optional[str] = None,
    limit: int = 50,
    offset: int = 0,
    db: Session = Depends(get_db)
):
    query = db.query(News)
    if category:
        query = query.filter(News.category.ilike(category))
    return query.order_by(News.created_at.desc()).offset(offset).limit(limit).all()

@router.get("/{news_id}", response_model=NewsResponse)
def get_news_article(news_id: int, db: Session = Depends(get_db)):
    article = db.query(News).filter(News.id == news_id).first()
    if not article:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"News article with ID {news_id} not found"
        )
    return article

@router.post("", response_model=NewsResponse, status_code=status.HTTP_201_CREATED)
def create_news_article(
    article_data: NewsCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_article = News(**article_data.model_dump(), author_id=admin_user.id)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

@router.put("/{news_id}", response_model=NewsResponse)
def update_news_article(
    news_id: int,
    article_data: NewsCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_article = db.query(News).filter(News.id == news_id).first()
    if not db_article:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"News article with ID {news_id} not found"
        )
        
    for key, val in article_data.model_dump().items():
        setattr(db_article, key, val)
        
    db.commit()
    db.refresh(db_article)
    return db_article

@router.delete("/{news_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_news_article(
    news_id: int,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_article = db.query(News).filter(News.id == news_id).first()
    if not db_article:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"News article with ID {news_id} not found"
        )
    db.delete(db_article)
    db.commit()
    return None
