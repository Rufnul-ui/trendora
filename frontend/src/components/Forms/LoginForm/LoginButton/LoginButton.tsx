import s from "./LoginButton.module.css";

type LoginButtonProps = {
  disabled?: boolean;
};

const LoginButton = ({ disabled = false }: LoginButtonProps) => {
  return (
    <div className={s.wrapper}>
      <button type="submit" className={s.loginBtn} disabled={disabled}>
        {disabled ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default LoginButton;
