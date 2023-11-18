"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import "./style.scss";

const AuthForm = () => {
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_PROJECT_URL,
    supabaseKey: process.env.NEXT_PUBLIC_ANON_API_KEY,
  });
  const callbackUrl = `${window.location.origin}/auth/callback`;

  return (
    <div className="auth">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "red",
                brandAccent: "darkred",
              },
            },
          },
        }}
        providers={["google"]}
        redirectTo={callbackUrl}
      />
    </div>
  );
};
export default AuthForm;
