# AvodahLoans Backend (Node.js + Mongoose)

Dedicated backend service built with **Node.js**, **Express**, and **Mongoose (MongoDB)** to store and manage contact inquiries submitted through the AvodahLoans website.

---

## 📁 Folder Structure

```
backend/
├── .env                  # Environment configuration
├── .env.example          # Environment template
├── package.json          # Node.js dependencies & scripts
├── README.md             # Documentation
└── src/
    ├── config/
    │   └── db.js         # MongoDB connection with Mongoose
    ├── models/
    │   └── Contact.js    # Contact Mongoose Schema
    ├── controllers/
    │   └── contactController.js # Contact submission & retrieval logic
    ├── routes/
    │   └── contactRoutes.js     # API Route definitions
    └── server.js         # Express server entry point
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment (`.env`)

A default `.env` file is pre-configured:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/avodahloans
CLIENT_URL=http://localhost:5173
```

> **Note:** Ensure your local MongoDB daemon is running, or provide your remote MongoDB Atlas connection URI in `MONGODB_URI`.

### 3. Start the Server

```bash
# Production mode
npm start

# Development mode (auto-restart on changes)
npm run dev
```

The server will listen at: **`http://localhost:5000`**

---

## 📡 API Endpoints

### 1. Submit Contact Message
- **Endpoint:** `POST /api/contact`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "Rahul Kumar",
    "email": "rahul@example.com",
    "phone": "+91 98765 43210",
    "subject": "Home Loan Inquiry",
    "message": "I would like to know the best interest rates for a 50L home loan."
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "success": true,
    "message": "Thank you for contacting us! Our team will get in touch with you shortly.",
    "data": {
      "_id": "672d00000000000000000001",
      "name": "Rahul Kumar",
      "email": "rahul@example.com",
      "phone": "+91 98765 43210",
      "subject": "Home Loan Inquiry",
      "message": "I would like to know the best interest rates for a 50L home loan.",
      "status": "new",
      "createdAt": "2026-11-07T08:35:00.000Z",
      "updatedAt": "2026-11-07T08:35:00.000Z"
    }
  }
  ```

### 2. Get All Contact Inquiries
- **Endpoint:** `GET /api/contact`
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "count": 1,
    "data": [...]
  }
  ```

### 3. Get Contact by ID
- **Endpoint:** `GET /api/contact/:id`

### 4. Health Check
- **Endpoint:** `GET /api/health`
- **Response (200 OK):**
  ```json
  {
    "status": "ok",
    "service": "AvodahLoans Contact Backend",
    "database": "connected",
    "timestamp": "2026-11-07T08:35:00.000Z"
  }
  ```

