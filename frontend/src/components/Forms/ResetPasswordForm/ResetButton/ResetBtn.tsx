import s from "./ResetBtn.module.css";

type ResetBtnProps = {
  isSubmitting: boolean;
};

const ResetBtn = ({ isSubmitting }: ResetBtnProps) => {
  return (
    <button type="submit" className={s.button} disabled={isSubmitting}>
      {isSubmitting ? "Resetting..." : "Reset Password"}
    </button>
  );
};

export default ResetBtn;
