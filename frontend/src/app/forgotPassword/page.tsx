import React from "react";
import s from "./page.module.css";
import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm/ForgotPasswordForm";

const page = () => {
  return (
    <div className={s.wrapper}>
      <ForgotPasswordForm />
    </div>
  );
};

export default page;
