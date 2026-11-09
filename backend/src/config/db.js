import mongoose from "mongoose";
import dns from "node:dns";

// Fix Windows Node.js DNS resolution for MongoDB Atlas SRV records
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {
  // Ignore if custom DNS is not supported in current environment
}

/**
 * Sanitizes MongoDB URI if password contains unencoded special characters like '@'
 */
function sanitizeMongoUri(rawUri) {
  if (!rawUri) return rawUri;

  // Check if URI matches mongodb+srv:// or mongodb:// with multiple '@'
  const match = rawUri.match(/^(mongodb(?:\+srv)?:\/\/)([^:]+):(.+)@([^@]+)$/);
  if (match) {
    const [, protocol, username, passwordWithPossibleAt, hostAndParams] = match;
    // If the password contains unencoded '@', encode it as %40
    const encodedPassword = encodeURIComponent(decodeURIComponent(passwordWithPossibleAt));
    return `${protocol}${username}:${encodedPassword}@${hostAndParams}`;
  }

  return rawUri;
}

export const connectDB = async () => {
  let uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/avodahloans";
  uri = sanitizeMongoUri(uri);

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`[MongoDB] Connection error: ${error.message}`);
    console.warn(`[MongoDB] Warning: Ensure your MongoDB Atlas cluster is active, IP access list allows your current IP (or 0.0.0.0/0 in Network Access), or update MONGODB_URI in backend/.env`);
    return null;
  }
};
