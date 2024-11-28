import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGO_URI;

if (!MONGODB_URL) {
  throw new Error("MONGO_URI is not defined in environment variables.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDb = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: "clerk",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};