"use client";
import React, { useEffect, useState } from "react";
import "./UserFormEdit.scss";

type Props = {
  dataSource: any;
};

const UserFormEdit = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [Lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [oldPW, setOldPW] = useState<string>("");
  const [newPW, setNewPW] = useState<string>("");
  const [confirmNewPW, setConfirmNewPW] = useState<string>("");

  useEffect(() => {
    const fullName: string = props.dataSource?.session?.user?.user_metadata?.fullname
    const firstName: string = fullName?.split(' ').slice(-1).join(' ');
    const lastName: string = fullName?.split(' ').slice(0, -1).join(' ');
    setName(props.dataSource?.session?.user?.user_metadata?.fullname);
    setEmail(props.dataSource?.session?.user?.email);
    setFirstName(firstName);
    setLastName(lastName);
  }, [props.dataSource])

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
              <label className="first-name">
                Tên
                <input
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  type="text"
                  id="fname"
                  name="fname"
                />
              </label>
              <label>
                Họ
                <input
                  value={Lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  type="text"
                  id="fLastName"
                  name="fLastName"
                />
              </label>
            </div>
            <label>
              Họ và tên
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                id="fFullName"
                name="fFullName"
              />
            </label>
            <label>
              Địa chỉ email
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                id="fEmail"
                name="fEmail"
              />
            </label>
            <br />
            <div className="pw-info">{"Thay đổi mật khẩu"}</div>
            <label>
              Mật khẩu hiện tại (bỏ trống nếu không đổi)
              <br />
              <input
                value={oldPW}
                onChange={(e) => setOldPW(e.target.value)}
                type="password"
                id="fPassword"
                name="fPassword"
              />
            </label>
            <br />
            <label>
              Mật khẩu mới (bỏ trống nếu không đổi)
              <br />
              <input
                value={newPW}
                onChange={(e) => setNewPW(e.target.value)}
                type="password"
                id="fNewPassword"
                name="fNewPassword"
              />
            </label>
            <br />
            <label>
              Xác nhận mật khẩu mới
              <br />
              <input
                value={confirmNewPW}
                onChange={(e) => setConfirmNewPW(e.target.value)}
                type="password"
                id="fConfirmNewPassword"
                name="fConfirmNewPassword"
              />
            </label>
            <br />
            <input className="submit-btn" type="submit" value="Lưu" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFormEdit;
