import 'dotenv/config';
import { Config } from 'drizzle-kit'; // Wasnt able to import the Config interface from drizzle-kit, so with CoPilot I had to add drizzle-kit.d.ts file at src folder


export default {
  driver: "pg", // pg = Postgres, because of the full text search capabilities
  schema: "./src/db/schema.ts", // The schema where the tables are located
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // The connection string to the database, that we set this variable into the .env file

  }, 
  out: "./drizzle", // The output directory where the generated files will be placed
} satisfies Config;