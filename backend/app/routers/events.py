from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional

from app.database import get_db
from app.models.models import Event
from app.routers.deps import get_admin_user

router = APIRouter(prefix="/api/events", tags=["Events"])

class EventBase(BaseModel):
    title: str
    date: str
    time: Optional[str] = None
    location: str
    organizer: Optional[str] = None
    description: Optional[str] = None
    registrations: int = 0
    status: str = "Open"

class EventCreate(EventBase):
    pass

class EventResponse(EventBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

@router.get("", response_model=List[EventResponse])
def get_events(db: Session = Depends(get_db)):
    return db.query(Event).order_by(Event.id.desc()).all()

@router.get("/{event_id}", response_model=EventResponse)
def get_event(event_id: int, db: Session = Depends(get_db)):
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Event with ID {event_id} not found"
        )
    return event

@router.post("", response_model=EventResponse, status_code=status.HTTP_201_CREATED)
def create_event(
    event_data: EventCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_event = Event(**event_data.model_dump())
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event

@router.put("/{event_id}", response_model=EventResponse)
def update_event(
    event_id: int,
    event_data: EventCreate,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_event = db.query(Event).filter(Event.id == event_id).first()
    if not db_event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Event with ID {event_id} not found"
        )
        
    for key, val in event_data.model_dump().items():
        setattr(db_event, key, val)
        
    db.commit()
    db.refresh(db_event)
    return db_event

@router.post("/rsvp/{event_id}", response_model=EventResponse)
def rsvp_event(
    event_id: int,
    rsvp_data: dict,
    db: Session = Depends(get_db)
):
    db_event = db.query(Event).filter(Event.id == event_id).first()
    if not db_event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Event with ID {event_id} not found"
        )
    count = rsvp_data.get("count", 1)
    db_event.registrations += count
    db.commit()
    db.refresh(db_event)
    return db_event

@router.delete("/{event_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_event(
    event_id: int,
    admin_user=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    db_event = db.query(Event).filter(Event.id == event_id).first()
    if not db_event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Event with ID {event_id} not found"
        )
    db.delete(db_event)
    db.commit()
    return None
