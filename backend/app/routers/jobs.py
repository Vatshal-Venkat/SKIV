from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional

from app.database import get_db
from app.models.models import Job
from app.routers.deps import get_admin_user

router = APIRouter(prefix="/api/jobs", tags=["Jobs"])

class JobBase(BaseModel):
    title: str
    company: str
    category: str = "IT / Tech"
    location: str
    salary: Optional[str] = None
    posted: Optional[str] = None
    type: str = "Full-Time"
    experience: Optional[str] = None
    skills: Optional[str] = None
    description: Optional[str] = None

class JobCreate(JobBase):
    pass

class JobResponse(JobBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

@router.get("", response_model=List[JobResponse])
def get_jobs(db: Session = Depends(get_db)):
    return db.query(Job).order_by(Job.id.desc()).all()

@router.get("/{job_id}", response_model=JobResponse)
def get_job(job_id: int, db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Job posting with ID {job_id} not found"
        )
    return job

@router.post("", response_model=JobResponse, status_code=status.HTTP_201_CREATED)
def create_job(
    job_data: JobCreate,
    db: Session = Depends(get_db)
):
    db_job = Job(**job_data.model_dump())
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

@router.put("/{job_id}", response_model=JobResponse)
def update_job(
    job_id: int,
    job_data: JobCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_job = db.query(Job).filter(Job.id == job_id).first()
    if not db_job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Job posting with ID {job_id} not found"
        )
        
    for key, val in job_data.model_dump().items():
        setattr(db_job, key, val)
        
    db.commit()
    db.refresh(db_job)
    return db_job

@router.delete("/{job_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_job(
    job_id: int,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_job = db.query(Job).filter(Job.id == job_id).first()
    if not db_job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Job posting with ID {job_id} not found"
        )
    db.delete(db_job)
    db.commit()
    return None
