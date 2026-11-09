import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev to avoid CORS blocking
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

// Health Check
app.get("/api/health", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.status(200).json({
    status: "ok",
    service: "AvodahLoans Contact Backend",
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/contact", contactRoutes);

// Welcome / Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "AvodahLoans Contact API is running",
    endpoints: {
      submitContact: "POST /api/contact",
      getContacts: "GET /api/contact",
      getContactById: "GET /api/contact/:id",
      healthCheck: "GET /api/health",
    },
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("[Server Error]:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[AvodahLoans Server] Running on http://localhost:${PORT}`);
  console.log(`[AvodahLoans Server] Contact endpoint ready at http://localhost:${PORT}/api/contact`);
});

export default app;

