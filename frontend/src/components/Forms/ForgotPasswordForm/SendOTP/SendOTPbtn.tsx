import s from "./SendOTPbtn.module.css";

type sendOtpProps = {
  disabled?: boolean;
};

const SendOTPbtn = ({ disabled = false }: sendOtpProps) => {
  return (
    <div className={s.wrapper}>
      <button type="submit" className={s.loginBtn} disabled={disabled}>
        {disabled ? "Sending OTP" : "Send OTP"}
      </button>
    </div>
  );
};

export default SendOTPbtn;
