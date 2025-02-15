import { eq } from 'drizzle-orm';
import { db } from '.';
import { companies,users,entries,InsertCompany, InsertUser, SelectCompany, SelectUser, InsertEntry, SelectEntry } from './schema';

// Companies Queries
export async function insertCompany(data:InsertCompany): Promise<SelectCompany> {
  const result = await db.insert(companies).values(data).returning();
  return result[0];
}

export async function selectCompanies(): Promise<SelectCompany[]> {
  return await db.select().from(companies);
}


export async function insertUser(data:InsertUser): Promise<SelectUser> {
  const result = await db.insert(users).values(data).returning();
  return result[0];
}

export async function selectUser(userId: string): Promise<SelectUser| null> {
  const result = await db.select().from(users).where(eq(users.id, userId));
  return result.length > 0 ? result[0] : null;
}


export async function insertEntry(data: InsertEntry): Promise<SelectEntry> {
  const result = await db.insert(entries).values(data).returning();
  return result[0];
}

export async function selectEntry(entryId: string): Promise<SelectEntry | null> {
  const result = await db.select().from(entries).where(eq(entries.id, entryId));
  return result.length > 0 ? result[0] : null;
}

export async function selectEntriesByYear(year: number): Promise<SelectEntry[]> {
  const result = await db.select().from(entries).where(eq(entries.year, year));
  return result;
}