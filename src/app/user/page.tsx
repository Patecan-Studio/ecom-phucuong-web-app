"use client";
import PaymentAddress from '@/components/UserComponent/PaymentAddress/PaymentAddress'
import UserSider from '@/components/UserComponent/UserSider/UserSider'
import React, { useState } from 'react'
import "./style.scss"
import UserFormEdit from '@/components/UserComponent/UserFormEdit/UserFormEdit'

const User = () => {
  const [intergrateScreen, setIntergrateScreen] = useState<string>('');
  const handleIntegrateScreen = () => {
    if (intergrateScreen === 'address') {
      return <PaymentAddress />;
    } else if (intergrateScreen === 'account' || intergrateScreen === '') {
      return <UserFormEdit />;
    }
  }
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