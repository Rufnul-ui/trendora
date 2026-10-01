import React from "react";
import s from "./page.module.css";
import SignupForm from "@/components/Forms/SignupForm/SignupForm";
import Image from "next/image";

const page = () => {
  return (
    <main className={s.wrapper}>
      <div className={s.container}>
        <div className={s.imageWrapper}>
          <Image
            src="/login/society.jpg"
            alt="society"
            fill
            priority
            className={s.loginImg}
          />
        </div>

        <SignupForm />
      </div>
    </main>
  );
};

export default page;
