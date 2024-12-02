import dotenv from "dotenv";
import { Config } from 'drizzle-kit'; // Wasnt able to import the Config interface from drizzle-kit, so with CoPilot I had to add drizzle-kit.d.ts file at src folder


dotenv.config();

const config: Config = {
  schema: "./src/db/schema.ts",
  dialect: 'postgresql',
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL // Verwendet die URL aus der .env-Datei
  }
};

export default config;