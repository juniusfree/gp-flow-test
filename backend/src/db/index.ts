import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing connectionString");
}

const client = postgres(connectionString);
const db = drizzle(client, { schema });

export default db;
