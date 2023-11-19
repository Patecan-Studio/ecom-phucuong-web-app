"use client";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Input, Typography } from "antd";
import { CustomImage } from "../CustomImage";
import { supabaseClient } from "@/share/supabaseUtil";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ResetPasswordForm = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState<any>({ msg: "", type: "warning" });
  const [seconds, setSeconds] = useState(5);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    const { data, error } = await supabaseClient.auth.updateUser({
      password: values.password,
    });
    if (!error) {
      setMessage({ msg: "Đổi mật khẩu thành công!", type: "success" });
    } else {
      setMessage({ msg: "Link đổi mật khẩu hết hạn!", type: "warning" });
    }
    setLoading(false);
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (message.type === "success") {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(interval);
          router.push("/");
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [message, seconds, router]);
  return (
    <div className="signUpForm">
      <div className="left">
        {message.msg && (
          <Alert
            style={{ maxWidth: 600, marginBottom: "10px" }}
            message={message.msg}
            type={message.type}
            description={
              message.msg === "Đổi mật khẩu thành công!" && (
                <span>
                  <Link
                    style={{ textDecoration: "underline", color: "gray" }}
                    href="/"
                  >
                    {`Quay lại trang chủ sau ${seconds} giây`}
                  </Link>
                </span>
              )
            }
          />
        )}
        <Form
          form={form}
          name="dependencies"
          autoComplete="off"
          style={{ maxWidth: 600 }}
          layout="vertical"
          onFinish={onFinish}
          disabled={message.type === "success" ? true : false}
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, min: 6 }]}
          >
            <Input.Password />
          </Form.Item>

          {/* Field */}
          <Form.Item
            label="Confirm Password"
            name="password2"
            dependencies={["password"]}
            validateDebounce={1200}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Vui lòng nhập mật khẩu trùng khớp")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button htmlType="submit" type="primary" loading={loading}>
              Lấy lại mật khẩu.
            </Button>
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
export default ResetPasswordForm;
