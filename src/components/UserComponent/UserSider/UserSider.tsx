import React from 'react'
import "./UserSider.scss"

type Props = {
  setIntergrateScreen: any;
}

const UserSider = (props: Props) => {
  return (
    <div className='user-sider'>
      <div className="user-sider__wrapper">
        <ul className='user-sider__wrapper__ul'>
          <div onClick={() => props.setIntergrateScreen('main')}>Trang tài khoản</div>
          <div onClick={() => props.setIntergrateScreen('order')}>Đơn hàng</div>
          <div onClick={() => props.setIntergrateScreen('address')}>Địa chỉ</div>
          <div onClick={() => props.setIntergrateScreen('account')}>Tài khoản</div>
          <div>Thoát</div>
        </ul>
      </div>
    </div>
  )
}

export default UserSider