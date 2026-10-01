"use server";

import { createLead } from "@/lib/payload";

export async function submitContactForm(formData: FormData): Promise<{ ok: boolean }> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const type = (formData.get("type") as string) || "other";

  if (!name || !email || !message) return { ok: false };

  const ok = await createLead({ name, email, message, type });
  return { ok };
}
