import db from "../db";
import { waitingList } from "../db/schema";

export async function addToWaitingList(
  userId: string,
  investmentId: string,
  incomeRange: string
): Promise<void> {
  try {
    await db.insert(waitingList).values({ userId, investmentId, incomeRange });
  } catch (error) {
    console.error("Error adding user to waiting list:", error);
    throw new Error("Failed to add user to waiting list");
  }
}
