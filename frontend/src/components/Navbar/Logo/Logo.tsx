import React from "react";
import s from "./Logo.module.css";
import Link from "next/link";
import { PiCoatHangerFill } from "react-icons/pi";

const Logo = () => {
  return (
    <div className={s.wrapper}>
      <Link href="/" className={s.link}>
        <PiCoatHangerFill className={s.icon} />

        <h1 className={s.h1}>
          TREND<span className={s.span}>ORA</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
