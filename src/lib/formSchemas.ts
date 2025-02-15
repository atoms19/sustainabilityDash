import { z } from 'zod';


export const userSchema = z.object({
    email: z.string().email(),
    passwordHash: z.string(),
    name: z.string(),
  });
  
  export const companySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    registrationNumber: z.string(),
    address: z.string(),
});


export const entrySchema = z.object({
    companyId: z.string().uuid(),
    year: z.number().int(),
    month: z.number().int(),
    emissionAmount: z.number().int(),
    waterUsage: z.number().int(),
    energyUsage: z.number().int(),
    wasteReduction: z.number().int(),
  });