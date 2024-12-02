declare module 'drizzle-kit' {
  export interface defineConfig {
    dialect: string;
    schema: string;
    dbCredentials: {
      connectionString: string;
    };
    out: string;
  }
}