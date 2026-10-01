import React from "react";
import s from "./AuthLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  return (
    <div className={s.wrapper}>
      <Link href="/forgotPassword" className={s.link}>
        Forgot Password?
      </Link>

      <Link href="/signup" className={s.link}>
        Signup
      </Link>
    </div>
  );
};

export default AuthLinks;
