import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.config import settings
from app.database import Base, engine
from app.routers import auth, matrimony, news, media, events, jobs, directory, newsletters

# Create tables during startup if not already created
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SKIV Backend API",
    description="Modern FastAPI backend for Sistakaranam Ikyavedika (SKIV) portal",
    version="1.0.0"
)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount media directory for static file access (profile photos)
if not os.path.exists(settings.UPLOAD_DIR):
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    
app.mount("/media", StaticFiles(directory=settings.UPLOAD_DIR), name="media")

# Include Routers
app.include_router(auth.router)
app.include_router(matrimony.router)
app.include_router(news.router)
app.include_router(media.router)
app.include_router(events.router)
app.include_router(jobs.router)
app.include_router(directory.router)
app.include_router(newsletters.router)

@app.get("/api/health", tags=["Health"])
def health_check():
    return {
        "status": "healthy",
        "app": "SKIV Backend API",
        "version": "1.0.0"
    }
