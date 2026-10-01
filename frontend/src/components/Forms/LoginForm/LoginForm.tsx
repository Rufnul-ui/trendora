"use client";

import { useEffect, useState } from "react";
import s from "./LoginForm.module.css";
import LoginButton from "./LoginButton/LoginButton";
import AuthLinks from "./AuthLinks/AuthLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "@/utils/validations/LoginSchema";

type FormValues = {
  email: string;
  password: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const [users, setUsers] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  useEffect(() => {
    // api call
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:3001/user");

        // if response fails
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
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (user) {
      console.log("Login successful:");
    } else {
      console.log("Invalid email or password");
    }
  });

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <h1 className={s.h1}>Login</h1>

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

      <LoginButton />

      <AuthLinks />
    </form>
  );
};

export default LoginForm;
