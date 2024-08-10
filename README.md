
RestroScan is an innovative web platform designed to provide a comprehensive and user-friendly interface for restaurant-related services. This application aims to streamline the user experience by integrating essential functionalities such as menu browsing, customer reviews, and detailed restaurant descriptions.

**Features**
Dynamic Home Page:
Interactive and visually appealing home page with a prominent header, logo, tagline, and contact information.

Navigation:
Intuitive hamburger menu for easy navigation to key sections such as menu, reservations, about us, contact us, reviews, and admin pages.

Menu Page:
Cart-style layout for showcasing various food and beverage offerings.

Contact Us Page:
Structured contact form alongside a descriptive section for efficient communication.

About Us Page:
Images and detailed descriptions to convey the restaurant's story and mission.

Reviews Page:
User-friendly interface for capturing and displaying customer reviews.

Admin Panel:
Efficient management of menu items, reservations, reviews, and other platform functionalities.

**Technologies Used:**
Frontend:- React.js, CSS
Backend:-Django
Django REST framework
Database
SQLite

Installation
Prerequisites
Node.js and npm
Python 3.x
Django
Steps
Clone the Repository

Clone the Repository
git clone https://github.com/your-username/restroscan.git
cd restroscan

Backend Setup
Create a virtual environment and activate it:
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate


Install backend dependencies:

Copy code
pip install -r requirements.txt
Run migrations:


Copy code
python manage.py migrate
Create a superuser:


Copy code
python manage.py createsuperuser
Start the backend server:


Copy code
python manage.py runserver
Frontend Setup
Navigate to the frontend directory:

Copy code
cd frontend
Install frontend dependencies:

Copy code
npm install
Start the frontend server:

Copy code
npm start
