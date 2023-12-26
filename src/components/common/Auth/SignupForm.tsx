"use client";
import React, { useState } from "react";
import { Alert, Button, Form, Input } from "antd";
import "./style.scss";
import { useRouter } from "next/navigation";
import { CustomImage } from "../CustomImage";
import { supabaseClient } from "@/share/supabaseUtil";
import Link from "next/link";

type FieldType = {
  email?: string;
  password?: string;
  fullname?: string;
  phone?: number;
  remember?: string;
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */

const SignupForm = () => {
  const [message, setMessage] = useState<any>({ msg: "", type: "warning" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignUp = async (
    email: string,
    password: string,
    fullname: string,
    phone: number
  ) => {
    setLoading(true);
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          fullname: fullname,
          phone: phone,
          role: "customer",
        },
      },
    });
    console.log(data);
    if (error) {
      setMessage({ msg: error.message, type: "warning" });
      setLoading(false);
    } else if (data.user?.identities?.length == 0) {
      setMessage({ msg: "Email này đã được đăng ký", type: "warning" });
      setLoading(false);
    } else {
      setMessage({
        msg: "Đăng ký thành công, kiểm ta email và xác nhận tài khoản",
        type: "success",
      });
      setLoading(false);
    }
    router.refresh();
  };

  const onFinish = async (values: any) => {
    handleSignUp(values.email, values.password, values.fullname, values.phone);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signUpForm">
      <div className="left">
        {message.msg && (
          <Alert
            style={{ maxWidth: 600, marginBottom: "10px" }}
            message={message.msg}
            type={message.type}
            description={
              message.msg === "Email này đã được đăng ký" && (
                <span>
                  <Link
                    style={{ textDecoration: "underline", color: "gray" }}
                    href="/signin"
                  >
                    Đăng nhập ngay
                  </Link>
                </span>
              )
            }
          />
        )}
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateMessages={validateMessages}
          layout="vertical"
          disabled={message.type === "success" ? true : false}
        >
          <Form.Item<FieldType>
            validateDebounce={1000}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Họ Và Tên"
            name="fullname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            validateDebounce={1200}
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                pattern: new RegExp(/^\d{10}$/),
                message: "Sai định dạng số điện thoại",
                min: 10,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            validateDebounce={1000}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                min: 6,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Đăng Ký Tài Khoản
            </Button>
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <span>Đã có tài khoản? </span>
            <Link
              style={{ textDecoration: "underline", color: "gray" }}
              href="/signin"
            >
              Đăng nhập ngay!
            </Link>
          </Form.Item>
        </Form>
      </div>
      <div className="right">
        <CustomImage
          src="https://t3.ftcdn.net/jpg/05/93/29/50/360_F_593295067_2SvEv1yO5R5JZPtnE4AHAun5js3MrTnp.jpg"
          alt="main-slide-1"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default SignupForm;
