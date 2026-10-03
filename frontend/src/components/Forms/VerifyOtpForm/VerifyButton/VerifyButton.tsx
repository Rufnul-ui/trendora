import s from "./VerifyButton.module.css";

type VerifyButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

const VerifyButton = ({ onClick, disabled }: VerifyButtonProps) => {
  return (
    <button
      type="button"
      className={s.verifyButton}
      onClick={onClick}
      disabled={disabled}
    >
      Verify OTP
    </button>
  );
};

export default VerifyButton;
