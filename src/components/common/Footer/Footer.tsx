import React from "react";
import "./style.scss";
import { TabbarLogo } from "..";
import FacebookIcon from "../Icons/FacebookIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import InstagramIcon from "../Icons/InstagramIcon";
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
        {/* logo */}
        <TabbarLogo />
        {/* input */}
        <div className="footer__connection__inputWrapper">
          <span>Đăng ký nhận các chương trình hấp dẫn của Showroom Nội thất PHÚ CƯỜNG</span>
          <div className="inputGroup">
          <input
            className="input"
            type="text"
            placeholder="Nhập địa chỉ email..."
          />
          <div className="inputButton">
            <span>Đăng ký</span>
          </div>
        </div>
        </div>
        
        {/* social */}
        <div className="footer__connection__social">
          <span>Kết nối với chúng tôi qua mạng xã hội</span>
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
    </div>
  );
};

export default Footer;
