import React from "react";
import s from "./SignupButton.module.css";

type SignupButtonProps = {
  disabled?: boolean;
};

const SignupButton = ({ disabled = false }: SignupButtonProps) => {
  return (
    <div className={s.wrapper}>
      <button type="submit" className={s.loginBtn} disabled={disabled}>
        {disabled ? "Signing up..." : "Signup"}
      </button>
    </div>
  );
};

export default SignupButton;
