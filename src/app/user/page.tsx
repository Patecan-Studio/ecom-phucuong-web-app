import PaymentAddress from '@/components/UserComponent/PaymentAddress/PaymentAddress'
import UserSider from '@/components/UserComponent/UserSider/UserSider'
import React from 'react'
import "./style.scss"

const User = () => {
  return (
    <div className='user-edit'>
      <UserSider />
      <PaymentAddress />
    </div>
  )
}

export default User