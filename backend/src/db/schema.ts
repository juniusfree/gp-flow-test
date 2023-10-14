import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).unique().notNull(),
  password: varchar("password", { length: 256 }).notNull(),
});

export const investment = pgTable("investment", {
  id: serial("id").primaryKey(),
  name: text("name"),
  image: text("image"),
  investmentType: text("investment_type"), // This could be 'cash flow', 'appreciation', or 'balanced growth'
  experienceLevel: text("experience_level"), // This could be 'beginner', 'intermediate', or 'expert'
});

export const waitingList = pgTable("waiting_list", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  investmentId: text("investment_id").notNull(),
  incomeRange: text("income_range").notNull(),
});
