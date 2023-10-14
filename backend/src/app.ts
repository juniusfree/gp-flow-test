import express from "express";
import helmet from "helmet";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import investmentRoutes from "./routes/investmentRoutes";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => res.send("hello"));

// Routes
app.use("/user", userRoutes);
app.use("/investments", investmentRoutes);

// Error Handling
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res
      .status(500)
      .send(
        process.env.NODE_ENV === "production" ? "Something broke!" : err.stack
      );
  }
);

export default app;
