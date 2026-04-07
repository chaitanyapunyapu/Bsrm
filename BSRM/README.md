# BSRM - Premium Motorcycle Rental & Sales

BSRM is a full-stack web application designed for motorcycle enthusiasts to explore, compare, and book their favorite rides. Built with a modern **Django REST Framework** backend and a high-performance **Angular** frontend.

## 🚀 Features

- **Auth System**: Secure JWT-based authentication (Login/Register).
- **Premium UI**: Deep Dark & Vibrant design system using Angular Material.
- **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Content**: Explore bikes from top manufacturers like Honda, Bajaj, KTM, Yamaha, Suzuki, and Hero.
- **Booking Flow**: Streamlined process from model selection to booking.
- **Secure API**: Environment-based configuration and protected routes.

## 🛠️ Tech Stack

### Backend
- **Framework**: Django 4.x & Django REST Framework (DRF).
- **Auth**: Simple JWT.
- **Environment**: python-dotenv for secret management.
- **CORS**: django-cors-headers.

### Frontend
- **Framework**: Angular 16+.
- **UI Library**: Angular Material, Bootstrap 5.
- **State Management**: Reactive services with RxJS.
- **Styling**: Vanilla CSS with modern variables and glassmorphism.

## 📦 Setup Instructions

### Backend Setup
1. Navigate to the `ApiProject` directory.
2. Create a `.env` file from the provided template:
   ```env
   SECRET_KEY=your_secret_key_here
   DEBUG=True
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the `bsrm` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Access the app at `http://localhost:4200`.

## 🎨 Design Philosophy

The application utilizes a **Deep Dark & Vibrant Green** theme:
- **Primary Color**: Spring Green (`#00ff7f`) for calls to action.
- **Background**: Deep Onyx (`#0a0e12`) for better readability and eye comfort.
- **Typography**: "Outfit" font family for a modern, sleek feel.
- **Visuals**: Glassmorphism effects and subtle micro-animations.

## 🤝 Contributing

This project is part of a modernized full-stack portfolio. Feel free to fork and enhance!

---
Developed by **Antigravity AI**
