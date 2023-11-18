import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const supabaseClient = createClientComponentClient({
  supabaseUrl: process.env.NEXT_PUBLIC_PROJECT_URL,
  supabaseKey: process.env.NEXT_PUBLIC_ANON_API_KEY,
});
