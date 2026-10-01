import React from "react";
import s from "./LoginImage.module.css";
import Image from "next/image";

const LoginImage = () => {
  return (
    <div>
      <Image
        src={"/login/nonverbal.jpg"}
        alt="non-verbal agreement"
        width={250}
        height={550}
        className={s.loginImg}
      />
    </div>
  );
};

export default LoginImage;
