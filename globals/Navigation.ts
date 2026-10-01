import type { GlobalConfig } from "payload";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navigation",
  admin: {
    description: "Control the main nav links and order. Changes go live immediately — no deploy needed.",
  },
  access: { read: () => true },
  fields: [
    {
      name: "items",
      type: "array",
      label: "Nav Items",
      minRows: 1,
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
          admin: { description: "e.g. /about or https://community.onemindos.com" },
        },
        {
          name: "openInNewTab",
          type: "checkbox",
          defaultValue: false,
          admin: { description: "Open in new tab (for external links)" },
        },
        {
          name: "cta",
          type: "checkbox",
          defaultValue: false,
          admin: { description: "Show as primary CTA button instead of text link" },
        },
      ],
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "Work With Me",
      admin: {
        description: "Label for the top-right CTA button in the nav",
        position: "sidebar",
      },
    },
    {
      name: "ctaUrl",
      type: "text",
      defaultValue: "/contact",
      admin: {
        description: "URL for the top-right CTA button",
        position: "sidebar",
      },
    },
  ],
};
