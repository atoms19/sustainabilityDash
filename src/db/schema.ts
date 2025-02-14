


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


// Carbon Emissions Table with References
export const carbonEmissions = pgTable('carbon_emissions', {
  id: uuid('id').primaryKey().defaultRandom(), // Unique identifier
  companyId: uuid('company_id').notNull().references(() => companies.id), // Proper reference to companies
  year: integer('year').notNull(),
  month: integer('month').notNull(),
  emissionAmount: integer('emission_amount').notNull(),
  recordedAt: timestamp('recorded_at').defaultNow().notNull()
});


export const waterUsage = pgTable('water_usage', {
    id: uuid('id').primaryKey().defaultRandom(), // Unique identifier for the water usage record
    companyId: uuid('company_id').notNull().references(() => companies.id), // Reference to the companies table
    year: integer('year').notNull(), // Year of the record
    month: integer('month').notNull(), // Month of the record (1-12)
    usageAmount: integer('usage_amount').notNull(), // Water usage in liters or cubic meters
    source: text('source').notNull(), // Source of water (e.g., groundwater, municipal, etc.)
    recordedAt: timestamp('recorded_at').defaultNow().notNull() // Timestamp for when the usage was recorded
  });
  


  export const energyUsage = pgTable('energy_usage', {
    id: uuid('id').primaryKey().defaultRandom(), // Unique identifier for the energy usage record
    companyId: uuid('company_id').notNull().references(() => companies.id), // Reference to the companies table
    year: integer('year').notNull(), // Year of the energy usage record
    month: integer('month').notNull(), // Month of the record (1-12)
    usageAmount: integer('usage_amount').notNull(), // Energy usage in kilowatt-hours (kWh)
    source: text('source').notNull(), // Energy source (e.g., solar, wind, grid, etc.)
    recordedAt: timestamp('recorded_at').defaultNow().notNull() // Timestamp for when the usage was recorded
  });
  

  
  // Waste Reduction Table
export const wasteReduction = pgTable('waste_reduction', {
    id: uuid('id').primaryKey().defaultRandom(),
    companyId: uuid('company_id').notNull().references(() => companies.id),
    year: integer('year').notNull(),
    month: integer('month').notNull(),
    reductionAmount: integer('reduction_amount').notNull(), // Amount of waste reduced
    initiative: text('initiative').notNull(), // Description of the reduction initiative
    recordedAt: timestamp('recorded_at').defaultNow().notNull()
  });
  
  // Exporting the types
  export type InsertWasteReduction = typeof wasteReduction.$inferInsert;
  export type SelectWasteReduction = typeof wasteReduction.$inferSelect;
  




  export type InsertCompany = typeof companies.$inferInsert;
  export type SelectCompany = typeof companies.$inferSelect;
  
  export type InsertCarbonEmission = typeof carbonEmissions.$inferInsert;
  export type SelectCarbonEmission = typeof carbonEmissions.$inferSelect;
  
  export type InsertWaterUsage = typeof waterUsage.$inferInsert;
  export type SelectWaterUsage = typeof waterUsage.$inferSelect;
  
  export type InsertEnergyUsage = typeof energyUsage.$inferInsert;
  export type SelectEnergyUsage = typeof energyUsage.$inferSelect;