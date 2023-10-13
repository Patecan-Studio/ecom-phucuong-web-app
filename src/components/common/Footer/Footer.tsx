import React from "react";
import "./style.scss";
import { TabbarLogo } from "..";
import FacebookIcon from "../Icons/FacebookIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
const contact = (
  <div className="contact">
    <span>Hotline Cskh</span>
    <span>02973.81.81.81</span>
    <span>cs.noithatphucuong@gmail.com</span>
  </div>
);

const support = (
  <div className="support">
    <span>Chế độ bảo hành</span>
    <span>Câu hỏi thường gặp</span>
    <span>Hướng dẫn đặt hàng</span>
    <span>Chính sách đổi trả hàng</span>
    <span>Cách thức vận chuyển</span>
    <span>Dịch vụ tư vấn thiết kế</span>
  </div>
);

const about = (
  <div className="about">
    <span>Giới thiệu</span>
    <span>Hệ thống phân phối</span>
  </div>
);

const infoItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Phú Cường",
    children: about,
  },
  {
    key: "2",
    label: "Liên Hệ",
    children: contact,
  },
  {
    key: "3",
    label: "Hỗ Trợ Khách Hàng",
    children: support,
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__slider">
        <div className="slide-track">
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/image-1.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/hansgrohe-Euronics-Viet-Nam-2.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/caesar-logo-1.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/92941291_1122254314795138_1554983477768617984_n-removebg-preview-4.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/caesar-logo-1.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/hansgrohe-Euronics-Viet-Nam-2.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/image-1.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/hansgrohe-Euronics-Viet-Nam-2.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/caesar-logo-1.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/92941291_1122254314795138_1554983477768617984_n-removebg-preview-4.png" />
          </div>
          <div className="slide">
            <img src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png" />
          </div>
        </div>
      </div>
      <div className="footer__title">
        <h2 className="title">showroom nội thất phú cường</h2>
        <span>
          TM3, Đường 3/2, Khu đô thị Phú Cường, Phường An Hòa, TP. Rạch Giá,
          Kiên Giang
        </span>
      </div>
      <div className="footer__connection">
        <TabbarLogo />
        <div className="footer__connection__inputWrapper">
          <span>
            Đăng ký nhận các chương trình hấp dẫn của Showroom Nội thất PHÚ
            CƯỜNG
          </span>
          <div className="inputGroup">
            <input
              className="input"
              type="text"
              placeholder="Nhập địa chỉ email..."
            />
            <div className="inputButton">
              <span style={{ whiteSpace: "nowrap" }}>Đăng ký</span>
            </div>
          </div>
        </div>
        <div className="footer__connection__social">
          <span>Kết nối với chúng tôi </span>
          <div className="iconWrapper">
            <div className="icon">
              <FacebookIcon />
            </div>
            <div className="icon">
              <YoutubeIcon />
            </div>
            <div className="icon">
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <div className="about">
          <h3>PHU CUONG</h3>
          <span>Giới thiệu</span>
          <span>Hệ thống phân phối</span>
        </div>
        <div className="contact">
          <h3>Liên Hệ</h3>
          <span>Hotline Cskh</span>
          <span>02973.81.81.81</span>
          <span>cs.noithatphucuong@gmail.com</span>
        </div>
        <div className="support">
          <h3>Hỗ Trợ Khách Hàng</h3>
          <span>Chế độ bảo hành</span>
          <span>Câu hỏi thường gặp</span>
          <span>Hướng dẫn đặt hàng</span>
          <span>Chính sách đổi trả hàng</span>
          <span>Cách thức vận chuyển</span>
          <span>Dịch vụ tư vấn thiết kế</span>
        </div>
      </div>
      <div className="footer__info--mobile">
        <Collapse
          items={infoItems}
          ghost
          expandIconPosition={"end"}
          bordered={false}
          defaultActiveKey={["1"]}
        />
      </div>
    </div>
  );
};

export default Footer;
