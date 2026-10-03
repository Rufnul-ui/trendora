"use client";

import { useState } from "react";
import OTPInput from "./OTPInput/OTPInput";
import VerifyButton from "./VerifyButton/VerifyButton";
import ResendOTP from "./ResendOTP/ResendOTP";
import s from "./VerifyOTP.module.css";
import { useRouter } from "next/navigation";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  // Temporary OTP for testing
  const correctOTP = "123123";

  const handleVerify = () => {
    if (otp === correctOTP) {
      router.push("/resetPassword");
      console.log("OTP Verified Successfully");
    } else {
      console.log("Invalid OTP");
    }
  };

  const handleResend = () => {
    console.log("Temporary OTP:", correctOTP);
  };

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1>Verify OTP</h1>

        <p className={s.description}>
          Enter the 6-digit OTP sent to your email address.
        </p>

        <OTPInput setOtp={setOtp} />

        <VerifyButton onClick={handleVerify} disabled={otp.length !== 6} />

        <ResendOTP onResend={handleResend} />
      </div>
    </div>
  );
};

export default VerifyOTP;
