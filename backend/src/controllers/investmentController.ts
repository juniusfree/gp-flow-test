import { Request, Response } from "express";
import { getAllInvestments } from "../services/investmentService";

export async function investments(req: Request, res: Response): Promise<void> {
  console.log("get investments");
  try {
    const investments = await getAllInvestments();
    res.status(200).json(investments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
