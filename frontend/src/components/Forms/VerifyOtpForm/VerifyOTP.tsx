"use client";

import { useEffect, useState } from "react";
import OTPInput from "./OTPInput/OTPInput";
import VerifyButton from "./VerifyButton/VerifyButton";
import ResendOTP from "./ResendOTP/ResendOTP";
import s from "./VerifyOTP.module.css";
import { useRouter } from "next/navigation";

const VerifyOTP = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success",
  );
  const [otp, setOtp] = useState("");
  const router = useRouter();

  // Temporary OTP for testing
  const correctOTP = "123123";

  const handleVerify = () => {
    try {
      if (otp === correctOTP) {
        setMessageType("success");
        setMessage("OTP Verified");
        router.push("/resetPassword");
      } else {
        setMessageType("error");
        setMessage("Invalid OTP check again");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went Wrong");
    }
  };

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleResend = () => {
    console.log("Temporary OTP:", correctOTP);
  };

  return (
    <div className={s.container}>
      {message && (
        <div
          className={`${s.toast} ${messageType === "success" ? s.success : s.error}`}
        >
          {message}
        </div>
      )}

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
