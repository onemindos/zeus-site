import type { CollectionConfig } from "payload";

export const Directory: CollectionConfig = {
  slug: "directory",
  labels: {
    singular: "Directory Entry",
    plural: "Product Directory",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "status"],
    description:
      "The OneMind fabric product directory — every agent, plugin, robot, and infrastructure component. Migrated from onemind-site's 39 routes. Rendered under /onemind/*.",
  },
  access: { read: () => true },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
        description: "Route under /onemind/ — 'agents' → /onemind/agents",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Agents", value: "agents" },
        { label: "Plugins", value: "plugins" },
        { label: "Robotics", value: "robotics" },
        { label: "Infrastructure", value: "infrastructure" },
        { label: "Platform", value: "platform" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
        { label: "Archived", value: "archived" },
      ],
      defaultValue: "published",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "tagline",
      type: "text",
      admin: { description: "One-liner for the card grid" },
    },
    {
      name: "description",
      type: "richText",
      admin: { description: "Full detail — what it is, what it does, how it connects" },
    },
    {
      name: "repoUrl",
      type: "text",
      admin: { description: "GitHub repo URL" },
    },
    {
      name: "docsUrl",
      type: "text",
      admin: { description: "Docs / live URL" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Show on the /onemind landing grid",
      },
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar", description: "Lower renders first" },
    },
  ],
};
