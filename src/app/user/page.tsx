import PaymentAddress from '@/components/UserComponent/PaymentAddress/PaymentAddress'
import UserSider from '@/components/UserComponent/UserSider/UserSider'
import React from 'react'
import "./style.scss"
import UserFormEdit from '@/components/UserComponent/UserFormEdit/UserFormEdit'

const User = () => {
  return (
    <div className='user-edit'>
      <UserSider />
      <UserFormEdit />
      {/* <PaymentAddress /> */}
    </div>
  )
}

export default User