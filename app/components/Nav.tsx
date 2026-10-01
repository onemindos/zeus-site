import { getNavigation } from "@/lib/payload";
import NavClient from "./NavClient";

// Server component — fetches nav from Payload CMS, passes to client shell
export default async function Nav() {
  const nav = await getNavigation();
  return <NavClient items={nav.items} ctaLabel={nav.ctaLabel} ctaUrl={nav.ctaUrl} />;
}
