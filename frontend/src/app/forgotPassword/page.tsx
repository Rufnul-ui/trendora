import React from "react";
import s from "./page.module.css";
import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm/ForgotPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Trendora",
  description: "Reset your account password",
};

const page = () => {
  return (
    <div className={s.wrapper}>
      <ForgotPasswordForm />
    </div>
  );
};

export default page;
