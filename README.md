# AI & Robotics Summer Workshop Landing Page

## Project Overview

This project is a responsive Workshop Landing Page developed using React.js, Tailwind CSS, and Express.js. The page promotes the **AI & Robotics Summer Workshop** for children aged 8–14 years. It provides workshop details, learning outcomes, FAQs, and a registration form connected to a backend API.

---

## Workshop Details

* **Workshop Name:** AI & Robotics Summer Workshop
* **Age Group:** 8–14 Years
* **Duration:** 4 Weeks
* **Mode:** Online
* **Fee:** ₹2,999
* **Start Date:** 15 July 2026

---

## Features

### Frontend

* Responsive Design
* Modern Navigation Bar
* Hero Section
* Workshop Details Section
* Learning Outcomes Section
* FAQ Accordion
* Registration Form
* Success Notification
* Loading State

### Backend

* Express.js Server
* POST `/api/enquiry` API
* Form Data Validation
* Success Response Handling

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* CORS

---

## Project Structure

```text
project/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── WorkshopDetails.jsx
│   │   │   ├── LearningOutcomes.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── routes/
│   │   └── enquiry.js
│   └── server.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
node server.js
```

---

## API Endpoint

### POST /api/enquiry

Accepts registration form data.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Registration submitted successfully"
}
```

---

## Validation

* Name is required
* Valid email is required
* Phone number must contain 10 digits

---

## Future Improvements

* MongoDB Integration
* Email Notifications
* User Authentication
* Admin Dashboard
* Workshop Registration Database

---

## Author

Unnati Wankar

