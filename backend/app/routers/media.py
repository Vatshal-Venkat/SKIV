import os
import uuid
import shutil
import cloudinary
import cloudinary.uploader
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from app.config import settings
from app.routers.deps import get_admin_user

router = APIRouter(prefix="/api/media", tags=["Media / Uploads"])

ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".pdf"}

@router.post("/upload")
def upload_file(
    file: UploadFile = File(...),
    admin_user=Depends(get_admin_user)
):
    # Get extension and check if allowed
    _, ext = os.path.splitext(file.filename.lower())
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid file extension. Allowed types: {', '.join(ALLOWED_EXTENSIONS)}"
        )

    # Check if Cloudinary is configured
    if settings.CLOUDINARY_CLOUD_NAME and settings.CLOUDINARY_API_KEY and settings.CLOUDINARY_API_SECRET:
        try:
            cloudinary.config(
                cloud_name=settings.CLOUDINARY_CLOUD_NAME,
                api_key=settings.CLOUDINARY_API_KEY,
                api_secret=settings.CLOUDINARY_API_SECRET,
                secure=True
            )
            # Upload directly to Cloudinary
            upload_result = cloudinary.uploader.upload(
                file.file,
                folder="skiv_uploads"
            )
            return {
                "success": True,
                "filename": file.filename,
                "url": upload_result.get("secure_url")
            }
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Cloudinary upload failed: {str(e)}"
            )
        
    # Check file size (Read some bytes first or read size directly)
    # We can check size by checking contents
    # Since FastAPI loads files in memory or tempfile, let's copy it
    filename = f"{uuid.uuid4().hex}{ext}"
    file_path = os.path.join(settings.UPLOAD_DIR, filename)
    
    try:
        # Save file to destination
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Check size of saved file
        file_size = os.path.getsize(file_path)
        if file_size > settings.MAX_UPLOAD_SIZE:
            # Delete file if too big
            os.remove(file_path)
            raise HTTPException(
                status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
                detail=f"File is too large. Max allowed size: {settings.MAX_UPLOAD_SIZE / (1024*1024)}MB"
            )
            
        # Return saved file URL path
        return {
            "success": True,
            "filename": filename,
            "url": f"/media/{filename}"
        }
        
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        # Cleanup file if something failed mid-way
        if os.path.exists(file_path):
            os.remove(file_path)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to upload file. Error: {str(e)}"
        )
