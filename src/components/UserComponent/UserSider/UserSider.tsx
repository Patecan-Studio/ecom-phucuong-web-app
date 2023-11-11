import React from 'react'
import "./UserSider.scss"

const UserSider = () => {
  return (
    <div className='user-sider'>
      <div className="user-sider__wrapper">
        <ul className='user-sider__wrapper__ul'>
          <div>Trang tài khoản</div>
          <div>Đơn hàng</div>
          <div>Địa chỉ</div>
          <div>Tài khoản</div>
          <div>Thoát</div>
        </ul>
      </div>
    </div>
  )
}

export default UserSider