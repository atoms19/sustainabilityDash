"use server"



import { entrySchema, userSchema } from './formSchemas';
import { insertUser, insertEntry } from '../db/queries';

export async function handleUserForm(data: FormData) {
  try {
    // Convert FormData to an object
    const formDataObject = Object.fromEntries(data.entries());

    // Parse and validate the data using Zod schema
    const parsedData = userSchema.parse(formDataObject);

    // Insert the user into the database
    const newUser = await insertUser(parsedData);

    return { success: true, user: newUser };
  } catch (error) {
    return { success: false, error: error.message };
  }
}



export async function handleEntryForm(data: FormData) {
    try {
      // Convert FormData to an object
      const formDataObject = Object.fromEntries(data.entries());
  
      // Parse and validate the data using Zod schema
      const parsedData = entrySchema.parse(formDataObject);
  
      // Insert the entry into the database
    
      const newEntry = await insertEntry(parsedData);
  
      return { success: true, entry: newEntry };
    } catch (error {
      return { success: false, error: error.message };
    }
  }

  