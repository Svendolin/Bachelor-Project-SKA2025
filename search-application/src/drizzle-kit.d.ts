declare module 'drizzle-kit' {
  export interface Config {
    driver: string;
    schema: string;
    dbCredentials: {
      connectionString: string;
    };
    out: string;
  }
}