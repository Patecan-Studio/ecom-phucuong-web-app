"use client";
import PaymentAddress from '@/components/UserComponent/PaymentAddress/PaymentAddress'
import UserSider from '@/components/UserComponent/UserSider/UserSider'
import React, { useState } from 'react'
import "./style.scss"
import UserFormEdit from '@/components/UserComponent/UserFormEdit/UserFormEdit'
import { createBrowserClient } from '@supabase/ssr';
const User = () => {
  const [intergrateScreen, setIntergrateScreen] = useState<string>('');
  const [dataSource, setDataSource] = useState<any>();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_PROJECT_URL!,
    process.env.NEXT_PUBLIC_ANON_API_KEY!
  );
  const handleIntegrateScreen = () => {
    if (intergrateScreen === 'address') {
      return <PaymentAddress dataSource={dataSource} />;
    } else if (intergrateScreen === 'account' || intergrateScreen === '') {
      return <UserFormEdit />;
    }
  }
  const getData = async () => {
    const { data, error } = await supabase.auth.getSession();
    setDataSource(data);
    console.log("user", data);
  };
  getData();
  return (
    <div className='user-edit'>
      <div className="user-edit__sider">
        <UserSider setIntergrateScreen={setIntergrateScreen} />
      </div>
      <div className="user-edit__page">
        {handleIntegrateScreen()}
      </div>
      
    </div>
  )
}

export default User