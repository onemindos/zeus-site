import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Posts } from "./collections/Posts";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Offers } from "./collections/Offers";
import { Directory } from "./collections/Directory";
import { Testimonials } from "./collections/Testimonials";
import { Leads } from "./collections/Leads";
import { Navigation } from "./globals/Navigation";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— Zeus DeLaCruz",
    },
  },
  collections: [Posts, Pages, Media, Users, Offers, Directory, Testimonials, Leads],
  globals: [Navigation],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "postgresql://zeus_site:zeus_site@zeus-site-postgres:5432/zeus_site",
    },
    push: process.env.PAYLOAD_PUSH_SCHEMA === "true",
  }),
  onInit: async (payload) => {
    // Push Drizzle schema on first boot (creates tables). No-op if tables exist.
    // Guarded by PAYLOAD_PUSH_SCHEMA=true so it never runs in local dev.
    if (process.env.PAYLOAD_PUSH_SCHEMA !== "true") return;
    try {
      // Check if users table already exists — if so, schema is already pushed
      await (payload.db as any).drizzle.execute(
        (await import("drizzle-orm")).sql`SELECT 1 FROM users LIMIT 1`
      );
      payload.logger.info("Schema already exists, skipping push.");
    } catch {
      // Table doesn't exist — push schema
      payload.logger.info("Fresh DB detected, pushing schema...");
      try {
        const { pushDevSchema } = await import("@payloadcms/drizzle");
        await pushDevSchema(payload.db as any);
        payload.logger.info("Schema push complete.");
      } catch (err) {
        payload.logger.error({ err }, "Schema push failed.");
      }
    }
  },
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  upload: {
    limits: {
      fileSize: 10_000_000,
    },
  },
});
