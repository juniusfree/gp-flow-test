import { Router } from "express";
import { investments } from "../controllers/investmentController";

const investmentsRoutes = Router();

investmentsRoutes.get("/", investments);

export default investmentsRoutes;
