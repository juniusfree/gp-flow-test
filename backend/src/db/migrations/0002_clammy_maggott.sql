ALTER TABLE "waiting_list" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "waiting_list" ALTER COLUMN "investment_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "waiting_list" ADD CONSTRAINT "waiting_list_user_id_unique" UNIQUE("user_id");