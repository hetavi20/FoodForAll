# FoodForAll

FoodForAll is a web application designed to reduce food waste by connecting individuals with excess food to those in need. Users can post available food items, browse listings, and contact donors to arrange pickups.

## Features

- User authentication (login, registration, and profile management)
- Food item listing and browsing
- User-friendly interface

## Technologies Used

- **Backend:** Django, Python
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite (default), can be changed to PostgreSQL or MySQL
- **Deployment:** Docker (optional)

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/hetavi20/FoodForAll.git
cd FoodForAll
```

### 2. Create and Activate a Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Apply Database Migrations
```bash
python manage.py migrate
```

### 5. Create a Superuser Account
```bash
python manage.py createsuperuser
```
Follow the prompts to set up an admin account.

### 6. Start the Development Server
```bash
python manage.py runserver
```
The application will be available at `http://127.0.0.1:8000/`.



---
**Happy coding!** 🚀
