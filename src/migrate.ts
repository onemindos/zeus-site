/**
 * Run Payload schema sync before starting Next.js.
 * Called from Dockerfile CMD before `next start`.
 *
 * Uses dev-mode schema push (safe for empty DB, no-op if schema unchanged).
 */
import { getPayload } from "payload";
import config from "../payload.config";

async function migrate() {
  console.log("[migrate] Running schema sync...");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (process.env as any).NODE_ENV = "development";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (process.env as any).PAYLOAD_FORCE_DRIZZLE_PUSH = "true";

  try {
    const payload = await getPayload({ config });
    console.log("[migrate] Schema sync complete.");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (payload.db as any).destroy?.();
  } catch (err) {
    console.error("[migrate] Schema sync failed:", err);
    process.exit(1);
  }
}

migrate();
