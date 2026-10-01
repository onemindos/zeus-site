import { sqliteAdapter } from "@payloadcms/db-sqlite";
const c = sqliteAdapter({ client: { url: "file:databases/zeus.sqlite" } });
console.log("OK");
