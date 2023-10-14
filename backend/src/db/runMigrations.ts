import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing connectionString");
}

const migrationsClient = postgres(connectionString, {
  max: 1,
});
const db = drizzle(migrationsClient);

const runMigration = async () =>
  await migrate(db, { migrationsFolder: "./src/db/migrations" });

runMigration()
  .then(() => {
    console.log("Migration to supabase done");
  })
  .catch((e) => console.error("Error migration to supabase: ", e));
