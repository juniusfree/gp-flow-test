import { Request, Response } from "express";
import { hashPassword, createUser } from "../services/userService";
import { addToWaitingList } from "../services/waitingListService";

export async function registerUser(req: Request, res: Response): Promise<void> {
  console.log("register user");
  console.log("req.body ", req.body);
  const { email, password = "", investmentId, incomeRange } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await createUser(email, hashedPassword);
    await addToWaitingList(newUser.id, investmentId, incomeRange);
    res.status(201).json({ user: { id: newUser.id, email: newUser.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
