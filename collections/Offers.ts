import type { CollectionConfig } from "payload";

export const Offers: CollectionConfig = {
  slug: "offers",
  labels: {
    singular: "Offer",
    plural: "Offers",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "price", "status"],
    description:
      "Coaching, consulting, and speaking offers — everything Zeus sells. Price, booking link, and checkout all live here.",
  },
  access: { read: () => true },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Coaching", value: "coaching" },
        { label: "Consulting", value: "consulting" },
        { label: "Speaking", value: "speaking" },
        { label: "Course", value: "course" },
        { label: "Community", value: "community" },
      ],
      admin: {
        position: "sidebar",
        description: "Which page this offer renders on (/coaching, /consulting, /speaking)",
      },
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
      name: "tagline",
      type: "text",
      admin: { description: "One-line hook shown on the offer card" },
    },
    {
      name: "description",
      type: "richText",
      admin: { description: "What it is, who it's for, what they get" },
    },
    {
      name: "price",
      type: "number",
      admin: {
        position: "sidebar",
        description: "Price in USD. Leave empty for custom/'book a call' offers.",
      },
    },
    {
      name: "priceLabel",
      type: "text",
      admin: {
        description: 'Display price text when not a flat number — "From $5k", "Custom"',
      },
    },
    {
      name: "duration",
      type: "text",
      admin: {
        description: 'Time commitment — "90 days", "1-day keynote", "weekly 1:1"',
      },
    },
    {
      name: "bookingUrl",
      type: "text",
      admin: {
        description: "Zoho Bookings / calendar link for call-based offers",
      },
    },
    {
      name: "checkoutUrl",
      type: "text",
      admin: {
        description: "Stripe / Zoho checkout link for buy-now offers",
      },
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        },
      ],
      admin: { description: "What's included — bullet list on the offer card" },
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Lower renders first on the page",
      },
    },
  ],
};
