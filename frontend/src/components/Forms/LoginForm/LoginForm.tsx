"use client";

import { useEffect, useState } from "react";
import s from "./LoginForm.module.css";
import LoginButton from "./LoginButton/LoginButton";
import AuthLinks from "./AuthLinks/AuthLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "@/utils/validations/LoginSchema";
import { loginUser } from "@/api/auth/login";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success",
  );
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      setMessage("");

      const user = await loginUser(data);
      if (user) {
        setMessageType("success");
        setMessage("LoginSuccessful");
      } else {
        setMessageType("error");
        setMessage("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

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
        <h1 className={s.h1}>Login</h1>

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

        <h4>Password</h4>
        <input
          {...register("password")}
          type="password"
          placeholder="at least 8 characters"
          className={s.inputBox}
        />
        {errors.password && (
          <p style={{ color: "red", margin: "4px 0" }}>
            {errors.password.message}
          </p>
        )}

        <LoginButton disabled={loading} />

        <AuthLinks />
      </form>
    </div>
  );
};

export default LoginForm;
