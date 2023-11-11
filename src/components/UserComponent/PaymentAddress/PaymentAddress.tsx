"use client";
import React, { useEffect, useState } from "react";
import "./PaymentAddress.scss";
import { fetchData } from "./Common/Utils";

const PaymentAddress = () => {
  const [data, setData] = useState<any>();
  const [selectedCities, setselectedCities] = useState<string>();
  const [selectedDistricts, setselectedDistricts] = useState<string>();
  const [selectedWard, setselectedWard] = useState<string>();
  const availableState = data?.find((c: any) => c.Name === selectedCities);
  const availableCities = availableState?.Districts?.find(
    (s: any) => s.Name === selectedDistricts
  );

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="payment-address">
      <div className="payment-address__wrapper">
        <div className="payment-address__wrapper__title">
          Địa chỉ thanh toán
        </div>
        <div className="payment-address__wrapper__form">
          <form
            onSubmit={() => {
              console.log("first");
            }}
          >
            <label>
              Họ và tên
              <input type="text" id="fname" name="fname" />
            </label>
            <label>
              Tên công ty (tuỳ chọn)
              <input type="text" id="fcompany" name="fcompany" />
            </label>
            <div className="continental">Quốc gia/Khu vực </div>
            <div className="country">Việt Nam</div>
            <div>
              <label>{"Tỉnh/Thành phố"}</label>
              <br />
              <select
                placeholder="Tỉnh/Thành phố"
                value={selectedCities}
                onChange={(e) => setselectedCities(e.target.value)}
              >
                <option>{"Tỉnh/Thành phố"}</option>
                {data?.map((value: any, key: number) => {
                  return (
                    <option value={value.Name} key={key}>
                      {value.Name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>{"Quận/Huyện"}</label>
              <br />
              <select
                placeholder="Quận/Huyện"
                value={selectedDistricts}
                onChange={(e) => setselectedDistricts(e.target.value)}
              >
                <option>{"Quận/Huyện"}</option>
                {availableState?.Districts.map((e: any, key: number) => {
                  return (
                    <option value={e.Name} key={key}>
                      {e.Name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>{"Xã/Phường (tuỳ chọn)"}</label>
              <br />
              <select
                placeholder="Xã/Phường"
                value={selectedWard}
                onChange={(e) => setselectedWard(e.target.value)}
              >
                <option>{"Xã/Phường (tuỳ chọn)"}</option>
                {availableCities?.Wards.map((e: any, key: number) => {
                  return (
                    <option value={e.Name} key={key}>
                      {e.Name}
                    </option>
                  );
                })}
              </select>
            </div>
            <label>
              Địa chỉ
              <input type="text" id="address" name="address" />
            </label>
            <label>
              Số điện thoại
              <input type="text" id="phoneNumber" name="phoneNumber" />
            </label>
            <label>
              Địa chỉ email
              <input type="text" id="email" name="email" />
            </label>
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentAddress;
