import React from "react";
import s from "./page.module.css";
import ResetPassword from "@/components/Forms/ResetPasswordForm/ResetPassword";

const page = () => {
  return (
    <div className={s.wrapper}>
      <h1>Reset Password</h1>
      <ResetPassword />
    </div>
  );
};

export default page;
