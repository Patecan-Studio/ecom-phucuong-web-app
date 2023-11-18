"use client";
import React, { useState, MouseEvent } from "react";
import { Alert, Button, Form, Input } from "antd";
import "./style.scss";
import { useRouter } from "next/navigation";
import { CustomImage } from "../CustomImage";
import Link from "next/link";
import { GoogleCircleFilled, GoogleOutlined } from "@ant-design/icons";
import { supabaseClient } from "@/share/supabaseUtil";
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
const loginAction = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  const header = {
    method: "POST",
    body: formData,
  };
  try {
    const response = await fetch("/auth/login", header);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const signInWithGoogle = async (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const callbackUrl = `${window.location.origin}/auth/callback`;
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: callbackUrl,
    },
  });
};
const SignInForm = () => {
  const [message, setMessage] = useState<any>({ msg: "", type: "warning" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    const res = await loginAction(email, password);
    if (res.message) {
      setMessage({ msg: "Đăng nhập thất bại", type: "warning" });
      setLoading(false);
    } else if (res.user && res.user.aud === "authenticated") {
      setLoading(false);
      console.log("xxx", res);
      router.push("/account");
    } else {
      setMessage({ msg: "Đăng nhập thất bại", type: "warning" });
    }
    router.refresh();
  };

  const onFinish = async (values: any) => {
    handleSignIn(values.email, values.password);
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
          action="/auth/login"
          method="post"
        >
          <Form.Item<FieldType>
            validateDebounce={1000}
            label="Email"
            name="email"
            htmlFor="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input name="email" />
          </Form.Item>

          <Form.Item<FieldType>
            htmlFor="password"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password name="password" />
          </Form.Item>

          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Đăng Nhập
            </Button>
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={signInWithGoogle}
              className=" hover:cursor-pointer px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-200 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-300 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span className="text-gray-800">Login with Google</span>
            </button>
          </Form.Item>

          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <span>Chưa có tài khoản? </span>
            <Link
              style={{ textDecoration: "underline", color: "gray" }}
              href="/signup"
            >
              Đăng ký ngay!
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

export default SignInForm;
