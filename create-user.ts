import { getPayload } from "payload";
import config from "./payload.config";

async function main() {
  const payload = await getPayload({ config });
  const user = await payload.create({
    collection: "users",
    data: {
      email: "zeus@onemindos.com",
      password: "onemind123",
      role: "admin",
    },
  });
  console.log("Created:", user.email, user.id);
}
main();
