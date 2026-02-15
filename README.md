## The Profile Project

High-Fidelity Full-Stack Profile Page Replica

## Live Demo

Frontend (Vercel): https://the-profile-project-xi.vercel.app/

Backend (Render): https://the-profile-project.onrender.com/

## GitHub Repository

https://github.com/Dheeraj-cre/The-Profile-Project

## Project Overview

The Profile Project is a full-stack web application that replicates a modern SaaS-style profile page inspired by Gidy.ai.

The goal of this project was to demonstrate end-to-end development capability — from database schema design to frontend UI polish — while maintaining clean architecture and production-ready structure.

This project includes:

A responsive, high-fidelity profile UI

RESTful backend API

MongoDB database integration

Editable profile functionality

Modular and scalable frontend architecture

## Tech Stack
Frontend

React (Vite)

Plain CSS (Modular Component-Based Styling)

Axios (API communication)

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

Deployment

Frontend hosted on Vercel

Backend hosted on Render

Database hosted on MongoDB Atlas

## Folder Structure
frontend/
  ├── pages/
  │    ├── Profile.jsx
  │    └── Profile.css
  ├── components/
  │    ├── ProfileHeader.jsx
  │    ├── ProfileHeader.css
  │    ├── SkillsSection.jsx
  │    ├── SkillsSection.css
  │    ├── TimelineSection.jsx
  │    ├── TimelineSection.css
  │    ├── EditForm.jsx
  │    └── EditForm.css
  ├── services/
  │    └── api.js

backend/
  ├── models/
  │    └── Profile.js
  ├── routes/
  │    └── profileRoutes.js
  ├── config/
  │    └── db.js
  └── server.js


The frontend is fully modularized with separate CSS per component for maintainability and scalability.

## Setup Instructions (Run Locally)
1️- Clone Repository
git clone https://github.com/Dheeraj-cre/The-Profile-Project.git
cd The-Profile-Project

2️- Backend Setup
cd backend
npm install


Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start backend:

npm run dev


Backend runs on:

http://localhost:5000

3️- Frontend Setup
cd frontend
npm install


Create a .env file inside frontend:

VITE_API_URL=http://localhost:5000/api


Start frontend:

npm run dev


Frontend runs on:

http://localhost:5173

## Core Functionality

✔ Fetch profile data from backend
✔ Display profile (Name, Bio, Skills, Work Experience)
✔ Edit Mode toggle
✔ Update profile and save to database
✔ Re-fetch updated data
✔ Fully responsive layout
✔ Clean SaaS-style UI
