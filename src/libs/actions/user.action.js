"use server";
import User from "@/models/Schema";
import { connectToDb } from "../connectToDb";

export const createUser = async (user) => {
  try {
    await connectToDb();
    const newUser = await User.create(user);
    console.log("from user.action", newUser);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error in createUser:", error);
    throw new Error("Failed to create user");
  }
};
