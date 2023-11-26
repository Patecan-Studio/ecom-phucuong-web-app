"use client";
import PaymentAddress from "@/components/UserComponent/PaymentAddress/PaymentAddress";
import UserFormEdit from "@/components/UserComponent/UserFormEdit/UserFormEdit";
import UserSider from "@/components/UserComponent/UserSider/UserSider";
import React, { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import "./style.scss";

const Users = () => {
  const [intergrateScreen, setIntergrateScreen] = useState<string>("");
  const [dataSource, setDataSource] = useState<any>();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_PROJECT_URL!,
    process.env.NEXT_PUBLIC_ANON_API_KEY!
  );
  const handleIntegrateScreen = () => {
    if (intergrateScreen === "address") {
      return <PaymentAddress dataSource={dataSource} />;
    } else if (intergrateScreen === "account" || intergrateScreen === "") {
      return <UserFormEdit dataSource={dataSource} />;
    }
  };
  const getData = async () => {
    const { data, error } = await supabase.auth.getSession();
    setDataSource(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="user-edit">
      <div className="user-edit__sider">
        <UserSider setIntergrateScreen={setIntergrateScreen} />
      </div>
      <div className="user-edit__page">{handleIntegrateScreen()}</div>
    </div>
  );
};

export default Users;
