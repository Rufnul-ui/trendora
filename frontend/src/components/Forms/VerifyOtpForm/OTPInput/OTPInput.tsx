"use client";

import { useRef, useState } from "react";
import s from "./OTPInput.module.css";

type OTPInputProps = {
  setOtp: (otp: string) => void;
};

const OTPInput = ({ setOtp }: OTPInputProps) => {
  const [values, setValues] = useState<string[]>(["", "", "", "", "", ""]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;

    setValues(newValues);
    setOtp(newValues.join(""));

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={s.otpContainer}>
      {values.map((value, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          className={s.otpInput}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(event) => handleChange(event.target.value, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
