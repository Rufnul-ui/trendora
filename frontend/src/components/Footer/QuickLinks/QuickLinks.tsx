import React from "react";
import s from "./QuickLinks.module.css";
import quickItems from "@/utils/constants/FooterConstants/quickLinks";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.h1}>Quick Links</h1>
      <div className={s.main}>
        <p className={s.p}>
          {quickItems.map((i) => (
            <Link href={i.path} key={i.path} className={s.link}>
              {i.label}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default QuickLinks;
