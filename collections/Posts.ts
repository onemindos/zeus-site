import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "tags", "publishedAt"],
    description: "Blog posts — write here, appear at zeusdelacruz.com/blog",
  },
  access: { read: () => true },
  hooks: {
    afterChange: [
      async () => {
        // On-demand ISR revalidation handled by Next.js fetch cache
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { position: "sidebar" },
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      defaultValue: "draft",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayAndTime" },
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: { description: "Short summary shown on blog index and home page" },
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }],
      admin: { position: "sidebar" },
    },
    {
      name: "featureImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "readingTime",
      type: "number",
      admin: { position: "sidebar", description: "Minutes to read" },
    },
  ],
};
