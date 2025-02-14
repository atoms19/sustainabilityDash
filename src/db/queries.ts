import { eq } from 'drizzle-orm';
import { db } from '.';
import { companies, carbonEmissions, waterUsage, energyUsage, wasteReduction } from './schema';

// Companies Queries
export async function insertCompany(data: typeof companies.$inferInsert): Promise<typeof companies.$inferSelect> {
  const result = await db.insert(companies).values(data).returning();
  return result[0];
}

export async function selectCompanies(): Promise<typeof companies.$inferSelect[]> {
  return await db.select().from(companies);
}

// Carbon Emissions Queries
export async function insertCarbonEmission(data: typeof carbonEmissions.$inferInsert): Promise<typeof carbonEmissions.$inferSelect> {
  const result = await db.insert(carbonEmissions).values(data).returning();
  return result[0];
}

export async function selectCarbonEmissions(): Promise<typeof carbonEmissions.$inferSelect[]> {
  return await db.select().from(carbonEmissions);
}

// Water Usage Queries
export async function insertWaterUsage(data: typeof waterUsage.$inferInsert): Promise<typeof waterUsage.$inferSelect> {
  const result = await db.insert(waterUsage).values(data).returning();
  return result[0];
}

export async function selectWaterUsage(): Promise<typeof waterUsage.$inferSelect[]> {
  return await db.select().from(waterUsage);
}

// Energy Usage Queries
export async function insertEnergyUsage(data: typeof energyUsage.$inferInsert): Promise<typeof energyUsage.$inferSelect> {
  const result = await db.insert(energyUsage).values(data).returning();
  return result[0];
}

export async function selectEnergyUsage(): Promise<typeof energyUsage.$inferSelect[]> {
  return await db.select().from(energyUsage);
}
// Waste Reduction Queries
export async function insertWasteReduction(data: typeof wasteReduction.$inferInsert): Promise<typeof wasteReduction.$inferSelect> {
  const result = await db.insert(wasteReduction).values(data).returning();
  return result[0];
}

export async function selectWasteReduction(): Promise<typeof wasteReduction.$inferSelect[]> {
  return await db.select().from(wasteReduction);
}


//--------------------------------special queries --------------------------------


// Utility function to get the current month in "YYYY-MM-01" format
// function getCurrentMonthStart(): Date {
//     const now = new Date();
//     return new Date(now.getFullYear(), now.getMonth(), 1);
//   }
  
//   export async function getCurrentMonthEnvironmentalData(): Promise<{
//     waterData: typeof waterUsage.$inferSelect[];
//     energyData: typeof energyUsage.$inferSelect[];
//     carbonData: typeof carbonEmissions.$inferSelect[];
//     wasteReductionData: typeof wasteReduction.$inferSelect[];
//   }> {
//     const currentMonth = getCurrentMonthStart();
  
//     // Fetch all environmental data for the current month
//     const [waterData, energyData, carbonData, wasteReductionData] = await Promise.all([
//       db.select().from(waterUsage).where(eq(energyUsage.month,currentMonth)),
//       db.select().from(energyUsage).where(),
//       db.select().from(carbonEmissions).where(),
//       db.select().from(wasteReduction).where(),
//     ]);
  
//     return {
//       waterData,
//       energyData,
//       carbonData,
//       wasteReductionData,
//     };
//   }
  





  