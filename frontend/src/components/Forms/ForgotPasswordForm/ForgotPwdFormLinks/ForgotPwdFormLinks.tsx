import Link from "next/link";
import React from "react";
import s from "./ForgotPwdFormLinks.module.css";

const ForgotPwdFormLinks = () => {
  return (
    <div className={s.wrapper}>
      <Link href="/signup" className={s.link}>
        Signup
      </Link>

      <Link href="/login" className={s.link}>
        Login
      </Link>
    </div>
  );
};

export default ForgotPwdFormLinks;
