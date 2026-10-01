"use client";

import SendOTPbtn from "./SendOTP/SendOTPbtn";
import s from "./ForgotPasswordForm.module.css";
import { forgotPasswordSchema } from "@/utils/validations/ForgotPasswordFormData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPwdFormLinks from "./ForgotPwdFormLinks/ForgotPwdFormLinks";
import { useEffect, useState } from "react";

type FormValues = {
  email: string;
};

type User = {
  id: string | number;
  name: string;
  email: string;
  password: string;
};

const ForgotPasswordForm = () => {
  const [users, setUsers] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:3001/user");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const user = users.find((user) => user.email === data.email);

    if (user) {
      console.log("Email found. Send OTP:", user.email);
    } else {
      console.log("Email not registered");
    }
  });

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <h1 className={s.h1}>Forgot Password</h1>

      <h4>Email Address</h4>
      <input
        {...register("email")}
        type="email"
        placeholder="you@example.com"
        className={s.inputBox}
      />

      {errors.email && (
        <p style={{ color: "red", margin: "4px 0" }}>{errors.email.message}</p>
      )}

      <SendOTPbtn />

      <ForgotPwdFormLinks />
    </form>
  );
};

export default ForgotPasswordForm;
