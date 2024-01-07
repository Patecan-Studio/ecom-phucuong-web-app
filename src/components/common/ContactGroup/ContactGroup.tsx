"use client";
import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { FloatButton, Tooltip } from "antd";
import React from "react";
import ChatBot from "../Facebook/Chatbox";
const ContactGroup = () => {
  return (
    <div>
      <Tooltip title="Chat Ngay" color={"blue"}>
        <ChatBot />
      </Tooltip>

      <a href="tel:02973818181">
        <Tooltip title="Gọi Ngay" color={"blue"}>
          <FloatButton
            icon={<PhoneOutlined />}
            type="primary"
            style={{ right: 24, bottom: 127, width: 44, height: 44 }}
          />
        </Tooltip>
      </a>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Coffee+Showroom+N%E1%BB%99i+Th%E1%BA%A5t+Ph%C3%BA+C%C6%B0%E1%BB%9Dng/@9.9685666,105.0983297,18z/data=!4m6!3m5!1s0x31a0b51ed7b625f7:0xd9277cb4e7e2f054!8m2!3d9.9677849!4d105.0982867!16s%2Fg%2F11v4p81tjh?hl=vi-VN&entry=ttu"
      >
        <Tooltip title="Google Map" color={"blue"}>
          <FloatButton
            icon={<HomeOutlined />}
            type="primary"
            style={{ right: 24, bottom: 182, width: 44, height: 44 }}
          />
        </Tooltip>
      </a>
    </div>
  );
};

export default ContactGroup;
