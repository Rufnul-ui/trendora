import s from "./ResendOTP.module.css";

type ResendOTPProps = {
  onResend: () => void;
};

const ResendOTP = ({ onResend }: ResendOTPProps) => {
  return (
    <div className={s.resend}>
      <span>Did not receive the OTP?</span>{" "}
      <button type="button" onClick={onResend}>
        Resend OTP
      </button>
    </div>
  );
};

export default ResendOTP;
