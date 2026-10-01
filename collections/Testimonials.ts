import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  admin: {
    useAsTitle: "quote",
    defaultColumns: ["author", "context", "featured"],
    description:
      "Social proof — client wins, speaking feedback, community love. Featured ones render on home + offer pages.",
  },
  access: { read: () => true },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "authorRole",
      type: "text",
      admin: { description: 'Title/company — "CTO, Acme Corp"' },
    },
    {
      name: "context",
      type: "select",
      options: [
        { label: "Coaching", value: "coaching" },
        { label: "Consulting", value: "consulting" },
        { label: "Speaking", value: "speaking" },
        { label: "Community", value: "community" },
        { label: "Product", value: "product" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar", description: "Render on home page" },
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
  ],
};
