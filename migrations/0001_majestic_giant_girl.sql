CREATE TABLE "entries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_id" uuid NOT NULL,
	"year" integer NOT NULL,
	"month" integer NOT NULL,
	"emission_amount" integer NOT NULL,
	"water_usage" integer NOT NULL,
	"energy_usage" integer NOT NULL,
	"waste_reduction" integer NOT NULL,
	"recorded_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "carbon_emissions" CASCADE;--> statement-breakpoint
DROP TABLE "energy_usage" CASCADE;--> statement-breakpoint
DROP TABLE "water_usage" CASCADE;--> statement-breakpoint
ALTER TABLE "entries" ADD CONSTRAINT "entries_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE no action ON UPDATE no action;