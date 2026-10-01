import s from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <div className={s.wrapper}>
      <button type="submit" className={s.loginBtn}>
        Login
      </button>
    </div>
  );
};

export default LoginButton;
