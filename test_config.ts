import { postgresAdapter } from "@payloadcms/db-postgres";
const c = postgresAdapter({ pool: { connectionString: "postgresql://localhost:5432/test" } });
console.log("OK");
