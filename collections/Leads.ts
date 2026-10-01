import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",
  labels: {
    singular: "Lead",
    plural: "Leads",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "interest", "email", "createdAt"],
    description:
      "Inbound leads — every form submission from the site (contact, coaching, consulting, speaking). The Zoho CRM pipeline mirrors this.",
  },
  access: {
    // Leads are private — never expose publicly
    read: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "interest",
      type: "select",
      options: [
        { label: "Coaching", value: "coaching" },
        { label: "Consulting", value: "consulting" },
        { label: "Speaking", value: "speaking" },
        { label: "Community", value: "community" },
        { label: "Product", value: "product" },
        { label: "General", value: "general" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "budget",
      type: "select",
      options: [
        { label: "Under $5k", value: "under5" },
        { label: "$5k – $15k", value: "5to15" },
        { label: "$15k – $50k", value: "15to50" },
        { label: "$50k+", value: "50plus" },
        { label: "Not sure yet", value: "unsure" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "source",
      type: "select",
      options: [
        { label: "Contact form", value: "contact" },
        { label: "Offer page", value: "offer" },
        { label: "Speaking page", value: "speaking" },
        { label: "Referral", value: "referral" },
        { label: "Other", value: "other" },
      ],
      defaultValue: "contact",
      admin: { position: "sidebar" },
    },
    {
      name: "handled",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Checked once the lead is in the Zoho CRM pipeline",
      },
    },
  ],
  timestamps: true,
};
