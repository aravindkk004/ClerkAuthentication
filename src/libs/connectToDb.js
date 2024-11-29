// import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGO_URI;

// if (!MONGODB_URL) {
//   throw new Error("MONGO_URI is not defined in the environment variables.");
// }

// // Use a global variable to cache the connection in a serverless environment
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export const connectToDb = async () => {
//   if (cached.conn) {
//     // Return the cached connection if available
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     // Create a new connection promise if one doesn't exist
//     cached.promise = mongoose
//       .connect(MONGODB_URL, {
//         dbName: "clerk",
//         bufferCommands: false,
//         useNewUrlParser: true, // Ensures compatibility with connection strings
//         useUnifiedTopology: true, // Avoids deprecation warnings
//         connectTimeoutMS: 30000,
//       })
//       .then((mongooseInstance) => {
//         console.log("MongoDB connected successfully");
//         return mongooseInstance;
//       })
//       .catch((error) => {
//         console.error("MongoDB connection error:", error);
//         throw error;
//       });
//   }

//   // Wait for the promise to resolve
//   cached.conn = await cached.promise;
//   return cached.conn;
// };




import Mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await Mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb Connected");
  } catch (error) {
    console.log("Error connecting to mongodb", error);
  }
};