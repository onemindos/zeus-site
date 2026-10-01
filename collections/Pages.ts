import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "layout", "status"],
    description: "Site pages — add any page here, it appears on the site automatically at /{slug}",
  },
  access: { read: () => true },
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
      index: true,
      admin: {
        position: "sidebar",
        description: "URL path — 'about' → /about, 'home' → /",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      defaultValue: "published",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "layout",
      type: "select",
      options: [
        { label: "Default (title + content)", value: "default" },
        { label: "Home", value: "home" },
        { label: "About", value: "about" },
        { label: "Courses", value: "courses" },
        { label: "Speaking", value: "speaking" },
        { label: "Contact", value: "contact" },
        { label: "OneMind", value: "onemind" },
      ],
      defaultValue: "default",
      required: true,
      admin: {
        position: "sidebar",
        description: "Which page template to use",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: { description: "Hero subtitle / short intro shown at top of page" },
    },
    {
      name: "heroTitle",
      type: "text",
      admin: {
        description: "Override the big hero headline (leave blank to use title)",
      },
    },
    {
      name: "content",
      type: "richText",
      admin: { description: "Main page body — fully editable rich text" },
    },
    {
      name: "embed",
      type: "textarea",
      admin: {
        description: "Paste any iframe embed code here (Zoho forms, Circle widgets, Calendly, etc.) — renders below content",
      },
    },
    {
      name: "seo",
      type: "group",
      admin: { position: "sidebar" },
      fields: [
        { name: "title", type: "text", admin: { description: "Override page <title>" } },
        { name: "description", type: "textarea", admin: { description: "Meta description" } },
      ],
    },
  ],
};
