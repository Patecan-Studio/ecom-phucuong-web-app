"use client";
import React from 'react'
import './UserFormEdit.scss'

const UserFormEdit = () => {
  return (
    <div className="user-form-edit">
      <div className="user-form-edit__wrapper">
        <div className="user-form-edit__wrapper__title">
          Thông tin tài khoản 
        </div>
        <div className="user-form-edit__wrapper__form">
          <form
            onSubmit={() => {
              console.log("first");
            }}
          >
            <div className="full-name">
              <label className='first-name'>
                Tên
                <input required type="text" id="fname" name="fname" />
              </label>
              <label>
                Họ
                <input required type="text" id="fLastName" name="fLastName" />
              </label>
            </div>
            <label>
              Họ và tên
              <input required type="text" id="fFullName" name="fFullName" />
            </label>
            <label>
              Địa chỉ email<br/>
              <input required type="email" id="fEmail" name="fEmail" />
            </label><br/>
            <div className="pw-info">{'Thay đổi mật khẩu'}</div>
            <label>
              Mật khẩu hiện tại (bỏ trống nếu không đổi)<br/>
              <input type="password" id="fPassword" name="fPassword" />
            </label><br/>
            <label>
              Mật khẩu mới (bỏ trống nếu không đổi)<br/>
              <input type="password" id="fNewPassword" name="fNewPassword" />
            </label><br/>
            <label>
              Xác nhận mật khẩu mới<br/>
              <input type="password" id="fConfirmNewPassword" name="fConfirmNewPassword" />
            </label><br/>
            <input className="submit-btn" type="submit" value="Lưu" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserFormEdit