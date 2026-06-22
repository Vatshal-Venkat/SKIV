import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Settings:
    # Server settings
    PORT: int = int(os.getenv("PORT", "8000"))
    HOST: str = os.getenv("HOST", "0.0.0.0")
    
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./skiv_local.db")
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    
    # JWT Settings
    JWT_SECRET: str = os.getenv("JWT_SECRET", "88f9a2e61df550d53c7c2b64d5c3ba8123da6c88ee94812b18c0e2a893cb9d67")
    JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "1440"))
    
    # Media Uploads
    UPLOAD_DIR: str = os.getenv("UPLOAD_DIR", "./media")
    MAX_UPLOAD_SIZE: int = int(os.getenv("MAX_UPLOAD_SIZE", "5242880")) # 5MB

settings = Settings()

# Ensure upload directory exists with fallback on permission error
try:
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
except PermissionError as e:
    print(f"WARNING: Permission denied when creating UPLOAD_DIR '{settings.UPLOAD_DIR}'. Falling back to './media'. Error: {e}")
    settings.UPLOAD_DIR = "./media"
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

# Validate DATABASE_URL directory write access for SQLite
if settings.DATABASE_URL.startswith("sqlite:///"):
    db_file_path = settings.DATABASE_URL.replace("sqlite:///", "")
    db_dir = os.path.dirname(db_file_path)
    if db_dir and db_dir not in (".", "./", ""):
        if not os.path.exists(db_dir):
            try:
                os.makedirs(db_dir, exist_ok=True)
            except PermissionError as e:
                print(f"WARNING: Permission denied when creating database directory '{db_dir}'. Falling back to local database. Error: {e}")
                settings.DATABASE_URL = "sqlite:///./skiv_local.db"
        elif not os.access(db_dir, os.W_OK):
            print(f"WARNING: Database directory '{db_dir}' is not writable. Falling back to local database.")
            settings.DATABASE_URL = "sqlite:///./skiv_local.db"
