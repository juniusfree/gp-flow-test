import db from "../db";

export async function getAllInvestments(): Promise<any> {
  try {
    const investments = await db.query.investment.findMany();
    return investments;
  } catch (error) {
    console.error("Error getting investments:", error);
    throw new Error("Failed to get investments");
  }
}
