import { createDirectus, staticToken, rest } from "@directus/sdk";

const DirectusConnection = createDirectus(
  process.env.NEXT_PUBLIC_API_DIRECTUS as string
).with(staticToken(process.env.NEXT_ADMIN_DIRECTUS_TOKEN as string))
.with(rest());

export default DirectusConnection;
