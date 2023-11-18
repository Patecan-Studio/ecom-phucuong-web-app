"use client";
import { CookieOptions, createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_PROJECT_URL!,
    process.env.NEXT_PUBLIC_ANON_API_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is / redirect the user to /account
  if (user && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/account", request.url));
  }

  if (user && request.nextUrl.pathname === "/signup") {
    return NextResponse.redirect(new URL("/account", request.url));
  }

  if (user && request.nextUrl.pathname === "/signin") {
    return NextResponse.redirect(new URL("/account", request.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && request.nextUrl.pathname === "/account") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return response;
}

export const config = {
  matcher: ["/login", "/account", "/signup", "/signin"],
};
