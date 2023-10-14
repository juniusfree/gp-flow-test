import "dotenv/config";
import type { Config } from "drizzle-kit";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing connectionString");
}

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    connectionString,
  },
} satisfies Config;
