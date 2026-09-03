import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    description: "Admin users — Zeus and AI agents with write access",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Agent", value: "agent" },
      ],
      defaultValue: "admin",
      admin: { position: "sidebar" },
    },
  ],
};
