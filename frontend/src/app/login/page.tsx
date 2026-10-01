import React from "react";
import s from "./page.module.css";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import Image from "next/image";

const Page = () => {
  return (
    <main className={s.wrapper}>
      <div className={s.container}>
        <div className={s.imageWrapper}>
          <Image
            src="/login/nonverbal.jpg"
            alt="non-verbal"
            fill
            priority
            className={s.loginImg}
          />
        </div>

        <LoginForm />
      </div>
    </main>
  );
};

export default Page;