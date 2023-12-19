"use client";
import { CustomerServiceOutlined, PhoneOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";
import "./style.scss";
import ChatBot from "../Facebook/Chatbox";
const ContactGroup = () => {
  return (
    <div>
      <ChatBot />
      <a href="tel:02973818181">
        <FloatButton
          icon={<PhoneOutlined />}
          type="primary"
          style={{ right: 24, bottom: 127, width: 44, height: 44 }}
        />
      </a>
    </div>
  );
};

export default ContactGroup;
