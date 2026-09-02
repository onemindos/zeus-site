import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Ghost webhook — fires on post.published, post.updated, post.deleted
// Configure in Ghost admin: Settings → Integrations → Add webhook
// URL: https://zeusdelacruz.com/api/revalidate?secret=YOUR_SECRET
// Event: Post published / Post updated

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidatePath("/blog", "page");
    revalidatePath("/blog/[slug]", "page");
    revalidatePath("/", "page");
    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
