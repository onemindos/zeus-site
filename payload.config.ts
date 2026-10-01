import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Posts } from "./collections/Posts";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Offers } from "./collections/Offers";
import { Directory } from "./collections/Directory";
import { Testimonials } from "./collections/Testimonials";
import { Leads } from "./collections/Leads";
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
  editor: lexicalEditor(),
  db: sqliteAdapter({
    client: {
      url: "file:databases/zeus.sqlite",
    },
  }),
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
