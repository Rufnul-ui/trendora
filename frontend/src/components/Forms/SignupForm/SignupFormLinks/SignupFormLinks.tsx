import React from "react";
import s from "./SignupFormLinks.module.css";
import Link from "next/link";

const SignupFormLinks = () => {
  return (
    <div className={s.wrapper}>
      <Link href="/forgotPassword" className={s.link}>
        Forgot Password?
      </Link>

      <Link href="/login" className={s.link}>
        Login
      </Link>
    </div>
  );
};

export default SignupFormLinks;
