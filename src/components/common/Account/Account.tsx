"use client";
import { createBrowserClient } from "@supabase/ssr";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
const Account = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_PROJECT_URL!,
    process.env.NEXT_PUBLIC_ANON_API_KEY!
  );
  const getData = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log("client", data);
  };
  getData();

  const handleSignOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
    router.push("/signin");
    router.refresh();
  };

  return (
    <div>
      Account
      <Button loading={loading} onClick={handleSignOut}>
        logout
      </Button>
    </div>
  );
};

export default Account;
