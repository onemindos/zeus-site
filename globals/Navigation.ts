import type { GlobalConfig } from "payload";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navigation",
  admin: {
    description:
      "Control the main nav links and order. Add children to create a dropdown. Changes go live immediately — no deploy needed.",
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
          admin: {
            description:
              "e.g. /about — leave empty if this item is a dropdown parent only",
          },
        },
        {
          name: "openInNewTab",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "children",
          type: "array",
          label: "Dropdown Items",
          admin: {
            description:
              "Add items here to make this a dropdown menu. Leave empty for a plain link.",
          },
          fields: [
            { name: "label", type: "text", required: true },
            { name: "url", type: "text", required: true },
            { name: "openInNewTab", type: "checkbox", defaultValue: false },
          ],
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
