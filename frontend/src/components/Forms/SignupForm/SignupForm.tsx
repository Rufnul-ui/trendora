"use client";

import { useEffect, useState } from "react";
import s from "./SignupForm.module.css";
import SignupButton from "./SignupButton/SignupButton";
import SignupFormLinks from "./SignupFormLinks/SignupFormLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignupSchema from "@/utils/validations/SignupSchema";
import { getUsers, signupUser } from "@/api/auth/signup";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const SignupForm = () => {
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
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      setMessage("");

      const users = await getUsers();

      const userExists = users.some((user) => user.email === data.email);

      if (userExists) {
        setMessageType("error");
        setMessage("Email already registered");
        return;
      }

      await signupUser(data);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setMessageType("success");
      setMessage("Account created successfully!");
    } catch (error) {
      console.error(error);

      setMessageType("error");
      setMessage("Failed to create account");
    } finally {
      setLoading(false);
    }
  });

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

      <form className={s.form} onSubmit={onSubmit}>
        <h1 className={s.h1}>Create Account</h1>

        <p className={s.p}>
          Join Trendora and get access to exclusive deals and latest trends
        </p>

        <h4>Full Name</h4>
        <input
          {...register("name")}
          type="text"
          placeholder="Bill"
          className={s.inputBox}
        />

        {errors.name && (
          <p style={{ color: "red", margin: "4px 0" }}>{errors.name.message}</p>
        )}

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

        <SignupButton disabled={loading} />

        <SignupFormLinks />
      </form>
    </div>
  );
};

export default SignupForm;
