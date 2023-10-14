import * as bcrypt from "bcrypt";
import db from "../db";
import { user } from "../db/schema";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function createUser(
  email: string,
  hashedPassword: string
): Promise<any> {
  try {
    const newUser = await db
      .insert(user)
      .values({
        email,
        password: hashedPassword,
      })
      .returning();
    return newUser[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}
