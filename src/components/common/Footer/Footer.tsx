import React from "react";
import "./style.scss";
import { CustomImage, TabbarLogo } from "..";
import FacebookIcon from "../Icons/FacebookIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import FooterSlider from "./FooterSlider";
import Image from "next/image";
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
  const styles = !data?.[0]?.image_url
    ? ({
        backgroundColor: "#000",
        height: "160px",
      } as React.CSSProperties)
    : {};

  return (
    <div className="footer">
      <FooterSlider />
      <div className="footer__title" style={styles}>
        <div
          className="footer__title__text"
          dangerouslySetInnerHTML={{
            __html: data?.[0]?.display_text || "",
          }}
        />
        <Image
          className="footer__title__background"
          src={data?.[0]?.image_url || ""}
          alt="footer title background"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
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
