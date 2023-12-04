import React from "react";
import "./style.scss";
import { CustomImage, TabbarLogo } from "..";
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
    label: "Phú Cường Home",
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
const Footer = ({ data }: any) => {
  const styles = {
    "--title-background-image": data?.[0]?.image_url
      ? `url(${data?.[0]?.image_url})`
      : "none",
  } as React.CSSProperties;

  return (
    <div className="footer" style={styles}>
      <div className="footer__slider">
        <div className="slide-track">
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 1"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/image-1.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 2"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/hansgrohe-Euronics-Viet-Nam-2.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 3"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/caesar-logo-1.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 4"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 5"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/92941291_1122254314795138_1554983477768617984_n-removebg-preview-4.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 6"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 7"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/caesar-logo-1.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 8"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/hansgrohe-Euronics-Viet-Nam-2.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 9"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/image-1.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 10"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/hansgrohe-Euronics-Viet-Nam-2.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 11"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/caesar-logo-1.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 12"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 13"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/92941291_1122254314795138_1554983477768617984_n-removebg-preview-4.png"
            />
          </div>
          <div className="slide">
            <CustomImage
              width={0}
              height={0}
              sizes="100vw"
              alt="footer slide 14"
              src="https://demo4d.thuythu.com/vatlieuxaydung/wp-content/uploads/2022/05/AVALLON-LOGO2_TM_Gray-2.png"
            />
          </div>
        </div>
      </div>
      <div className="footer__title">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.[0]?.display_text || "",
          }}
        />
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
      <div className="footer__license">
        <a
          href="http://online.gov.vn/Home/WebDetails/87107?AspxAutoDetectCookieSupport=1"
          rel="noopener"
          target="_blank"
        >
          <CustomImage
            width={0}
            height={0}
            sizes="100vw"
            src="/images/license.png"
            alt="Bộ Công Thương"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
