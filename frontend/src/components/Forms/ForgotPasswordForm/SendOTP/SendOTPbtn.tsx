import React from "react";
import s from "./SendOTPbtn.module.css";

const SendOTPbtn = () => {
  return (
    <div className={s.wrapper}>
      <button type="submit" className={s.loginBtn}>
        Send OTP
      </button>
    </div>
  );
};

export default SendOTPbtn;
