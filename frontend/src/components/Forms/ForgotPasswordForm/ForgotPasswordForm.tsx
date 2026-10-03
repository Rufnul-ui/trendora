"use client";

import SendOTPbtn from "./SendOTP/SendOTPbtn";
import s from "./ForgotPasswordForm.module.css";
import { forgotPasswordSchema } from "@/utils/validations/ForgotPasswordFormData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPwdFormLinks from "./ForgotPwdFormLinks/ForgotPwdFormLinks";
import { useEffect, useState } from "react";
import { ForgotPwd } from "@/api/auth/forgotPassword";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success",
  );
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      setMessage("");

      const user = await ForgotPwd(data);

      if (user) {
        sessionStorage.setItem("resetEmail", data.email);

        console.log("Saved reset email:", sessionStorage.getItem("resetEmail"));

        setMessageType("success");
        setMessage("OTP sent to your Email");
      } else {
        setMessageType("error");
        setMessage("Invalid Email address");
      }
    } catch (error) {
      console.error(error);
      setMessageType("error");
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!message || messageType !== "success") return;

    const timer = setTimeout(() => {
      setMessage("");
      router.push("/verify-otp");
    }, 2000);

    return () => clearTimeout(timer);
  }, [message, messageType, router]);

  return (
    <div>
      {message && (
        <div
          className={`${s.toast} ${
            messageType === "success" ? s.success : s.error
          }`}
        >
          {message}
        </div>
      )}

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={s.h1}>Forgot Password</h1>

        <h4>Email Address</h4>

        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className={s.inputBox}
        />

        {errors.email && (
          <p style={{ color: "red", margin: "4px 0" }}>
            {errors.email.message}
          </p>
        )}

        <SendOTPbtn disabled={loading} />

        <ForgotPwdFormLinks />
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
