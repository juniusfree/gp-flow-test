CREATE TABLE IF NOT EXISTS "investment" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"image" text,
	"investment_type" text,
	"experience_level" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256),
	"password" varchar(256),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "waiting_list" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"investment_id" text
);
