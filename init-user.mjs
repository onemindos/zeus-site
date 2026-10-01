import { getPayload } from "payload";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const collections = [
  { slug: "posts", fields: [{ name: "title", type: "text" }] },
  { slug: "pages", fields: [{ name: "title", type: "text" }] },
  { slug: "media", upload: true, fields: [{ name: "alt", type: "text" }] },
];

const config = buildConfig({
  admin: { user: "users" },
  collections: [
    ...collections,
    { slug: "users", auth: true, fields: [{ name: "email", type: "email" }, { name: "name", type: "text" }, { name: "role", type: "select", options: ["admin", "agent"] }] },
  ],
  editor: lexicalEditor(),
  db: sqliteAdapter({ client: { url: "file:databases/zeus.sqlite" } }),
  secret: process.env.PAYLOAD_SECRET || "temp-secret",
});

const payload = await getPayload({ config });
try {
  const existing = await payload.find({ collection: "users", limit: 1 });
  if (existing.totalDocs > 0) { console.log("exists:", existing.docs.map(u=>u.email)); process.exit(0); }
  const user = await payload.create({ collection: "users", data: { email: "zeus@onemindos.com", password: "onemind123", role: "admin" } });
  console.log("Created:", user.email);
} catch(e) { console.error(e.message); }
