# BSRM Backend API - Motorcycle Rental & Sales

This is the robust backend infrastructure for the BSRM application, built using **Django 4.x** and **Django REST Framework (DRF)**. It provides a secure and scalable API for user authentication and data management.

## 🚀 Features

- **JWT Authentication**: Secure stateless authentication using `djangorestframework-simplejwt`.
- **User Management**: endpoints for Registration, Login, and Profile management.
- **Security**: Environment-based configuration using `python-dotenv`.
- **CORS Support**: Configured to safely communicate with the Angular frontend.
- **RESTful Architecture**: Clean and predictable API structure.

## 🛠️ Tech Stack

- **Framework**: Django 4.x
- **API Toolkit**: Django REST Framework (DRF)
- **Authentication**: Simple JWT
- **Database**: SQLite (Development) / PostgreSQL (Production ready)
- **Middleware**: django-cors-headers

## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/register/` | Create a new user account |
| `POST` | `/api/login/` | Authenticate and Receive JWT tokens |
| `GET` | `/api/user/` | Retrieve current authenticated user details |
| `POST` | `/api/logout/` | Invalidate tokens and logout |

## 📦 Local Setup

1. **Environment Setup**:
   Ensure you have Python 3.9+ installed.
   ```bash
   # Create a virtual environment
   python -m venv venv
   source venv/Scripts/activate  # Windows
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Database Migrations**:
   ```bash
   python manage.py migrate
   ```

4. **Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   SECRET_KEY=your_django_secret_key
   DEBUG=True
   ```

5. **Run Server**:
   ```bash
   python manage.py runserver
   ```
   The API will be available at `http://127.0.0.1:8000/`.

---
Developed by **Chaitanya Punyapu**
