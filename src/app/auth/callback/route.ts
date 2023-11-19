import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const headersList = headers();
  const code = searchParams.get("code");
  // const next = searchParams.get("next") ?? `${headersList.get("host")}/account`;
  const url = request.nextUrl.clone();

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_PROJECT_URL!,
      process.env.NEXT_PUBLIC_ANON_API_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options });
          },
        },
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      url.pathname = "/account";
      return NextResponse.redirect(url);
    }
  }
  // return the user to an error page with instructions
  url.pathname = "/auth/auth-code-error";
  return NextResponse.redirect("/auth/auth-code-error");
}
