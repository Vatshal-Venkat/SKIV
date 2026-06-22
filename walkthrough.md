# SKIV Backend & CMS Migration Walkthrough

We have successfully migrated the legacy file-based database schema of the **SKIV (Sistakaranam Ikyavedika)** portal to a modern relational **FastAPI + SQLite** backend, and fully integrated the frontend pages with active API connections.

---

## 🛠️ Systems & Implementations Built

### 1. FastAPI Backend Core
*   [main.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/main.py): Sets up the FastAPI server, handles CORS, and mounts the `/media` static files directory for profile uploads.
*   [config.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/config.py): Configures environmental settings (ports, upload directories, JWT secrets).
*   [database.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/database.py): Configures SQLite connection engine and sessions (`sqlite:///./skiv_local.db`).

### 2. Relational Database Schema & Models
Defined in [models.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/models/models.py):
*   `User`: Admin user model for authentication.
*   `News`: Community news articles for the CMS stream.
*   `Profile`: Comprehensive matrimony profile model supporting 34 fields and profile photos.
*   `Event`: Tracks community events, locations, schedules, and RSVP registration counts.
*   `Job`: Job postings, required experience, skills, and categories.
*   `DirectoryMember`: Profile information for professional directory lookups.

### 3. API Routers
*   [auth.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/routers/auth.py): JWT-based admin login, logout, and self check.
*   [matrimony.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/routers/matrimony.py): Multi-filter search (Gotram, location, gender) and profile CRUD.
*   [news.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/routers/news.py): CMS news stream CRUD.
*   [media.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/routers/media.py): Profile photo upload handler.
*   [events.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/routers/events.py): Event listing and registration CRUD.
*   [jobs.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/routers/jobs.py): Public job posts submission and administrative listing updates.
*   [directory.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/routers/directory.py): Directory searching, filtering, and admin CRUD operations.

### 4. Database Seeding
*   [seed.py](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/backend/app/seed.py): Automates database table generation, registers a default admin (`admin`/`admin123`), and imports all **359 legacy matrimony profiles** from `objects3.json` alongside default event, job, and directory samples.

### 5. Frontend Pages & Accessible Admin UI
*   [api.js](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/frontend/src/services/api.js): Connects the REST client to all backend database paths.
*   **Events, Jobs, and Directory Pages**: Connected to live endpoint calls to fetch data, register RSVPs, and post job applications.
*   [AdminPage.jsx](file:///c:/Users/Venkat_Vatshal/OneDrive/Desktop/SKIV/frontend/src/pages/AdminPage.jsx): Built tabs for **Matrimony**, **News**, **Events**, **Jobs**, and **Directory** with highly accessible interfaces designed for elderly admins (single-column formats, large fonts, and bright green/blue/red color-coded submit/delete operations).

---

## 🧪 Verification & Seeding Output

Seeding script run confirmation:
```
Creating database tables...
Creating default admin user...
Admin user created (username: admin, password: admin123).
Seeding sample news articles...
Sample news seeded.
Reading profiles from objects3.json...
Found 359 profiles to import.
Writing profiles to database...
Successfully seeded 359 matrimony profiles.
Seeding sample events...
Sample events seeded.
Seeding sample jobs...
Sample jobs seeded.
Seeding sample directory members...
Directory members seeded.
```

Programmatic CRUD script run confirmation:
```
--- 1. Authenticating as Admin ---
Logged in successfully. Token acquired.

--- 2. Testing Events CRUD ---
Created event with ID: 4, Title: Test Community Event
Event found in GET list: True
RSVP successful. Registrations count: 5
Updated event title: Updated Test Community Event
Deleted event with ID: 4

--- 3. Testing Jobs CRUD ---
Created job (publicly) with ID: 6, Title: Software Engineer Intern
Job found in GET list: True
Updated job title: Senior Software Engineer Intern
Deleted job with ID: 6

--- 4. Testing Directory CRUD ---
Created directory member with ID: 7, Name: Test Member Name
Member found in GET list: True
Updated member name: Updated Test Member Name
Deleted directory member with ID: 7

ALL BACKEND ROUTER CRUD TESTS COMPLETED SUCCESSFULLY!
```

---

## 🏃 Run Instructions

1.  **Start the Backend**:
    ```bash
    cd backend
    .\venv\Scripts\python.exe -m uvicorn app.main:app --port 8000 --reload
    ```
2.  **Start the Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```
3.  **Default Admin Login**:
    *   **Username**: `admin`
    *   **Password**: `admin123`
