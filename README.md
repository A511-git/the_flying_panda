# Visa Slot Alerts – The Flying Panda

A mini internal tool to track visa slot alerts for different countries and cities.

---

## Frontend URL
(Add deployed frontend URL here)
---
## Scenario

Build a simple internal system to:
- Create visa slot alerts
- Track their status
- Update or delete alerts
- Filter and paginate data

---

## Data Model (Alert)

Each alert contains:
- id
- country
- city
- visaType (Tourist / Business / Student)
- status (Active / Booked / Expired)
- createdAt

---

## Backend (Node.js + Express)

### Tech Stack
- Node.js
- Express
- MongoDB
- Mongoose
- Zod

### API Base
/api/v1/alerts

### Routes
- GET /alerts
- POST /alerts
- PUT /alerts/:id
- DELETE /alerts/:id

### Features Implemented
- Custom logger middleware (file-based)
- Query filters (visaType, status)
- Server-side pagination
- Proper HTTP status codes
- Centralized error handling
- Input validation
- Environment variables

---

## Frontend (React)

### Tech Stack
- React
- PrimeReact
- PrimeFlex
- Axios

### Features
- Form to create alerts
- Table to list alerts
- Row editing for updates
- Delete alert button
- Server-side pagination
- Filters
- Uses own backend API

---

## Bonus Features
- Pagination
- Input validation
- Environment variables
- Deployment-ready setup

---

## Setup Steps

### Backend
1. npm install
2. Create .env file:
   PORT=8000  
   DB_URI=your_mongodb_url  
   FRONTEND_URL=your_frontend_url
3. npm run dev

### Frontend
1. npm install
2. Create .env file:
   VITE_API_URL=backend_url
3. npm run dev

---

## Design Decisions

- MongoDB for flexibility
- Server-side pagination for scalability
- Explicit update actions
- Layered backend architecture
- Simple and clear UI

Architecture & flow:
https://whimsical.com/architecture-overview-and-specification-VqabDux9BSabmsDbuEs2xC

---

## Backend Toolkit

Used a custom backend toolkit for:
- Repository layer
- Service layer
- Validation
- Error handling
- Standard API responses

---

## What I’d Improve for Production

- Authentication & roles
- Soft deletes
- Audit logs
- Caching
- Rate limiting
- Monitoring

---

## Where AI Helped vs My Own Work

AI helped with:
- PrimeReact component mapping
- UI structure ideas

I handled:
- Backend architecture
- API design
- Validation logic
- Pagination logic
- Debugging
- Frontend–backend integration

---
