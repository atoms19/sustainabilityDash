


import { pgTable, text, integer, uuid, timestamp, boolean } from 'drizzle-orm/pg-core';



// Users Table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(), 
  email: text('email').unique().notNull(), // Unique email address
  passwordHash: text('password_hash').notNull(), // Hashed password for security
  name: text('name').notNull(), // Full name
  createdAt: timestamp('created_at').defaultNow().notNull(), // Auto-generated timestamp on creation
});


// Companies Table
export const companies = pgTable('companies', {
  id: uuid('id').primaryKey().defaultRandom(), // Unique identifier for the company
  name: text('name').notNull(), // Name of the company
  email: text('email').unique().notNull(), // Company email address (unique)
  registrationNumber: text('registration_number').unique().notNull(), // Unique company registration number
  address: text('address').notNull(), // Address field for company location
  createdAt: timestamp('created_at').defaultNow().notNull() // Timestamp for when the company record is created
});


export const entries=pgTable('entries',{
id:uuid('id').primaryKey().defaultRandom(),
companyId:uuid('company_id').notNull().references(()=>companies.id),
year:integer('year').notNull(),
month:integer('month').notNull(),
emissionAmount:integer('emission_amount').notNull(),
waterUsage:integer('water_usage').notNull(),
energyUsage:integer('energy_usage').notNull(),
wasteReduction:integer('waste_reduction').notNull(),
recordedAt:timestamp('recorded_at').defaultNow().notNull()
})



export type InsertUser =typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertEntry = typeof entries.$inferInsert;
export type SelectEntry = typeof entries.$inferSelect;

export type InsertCompany = typeof companies.$inferInsert;
export type SelectCompany = typeof companies.$inferSelect;
  