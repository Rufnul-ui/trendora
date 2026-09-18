import Link from "next/link";
import React from "react";
import s from "./CustomerServices.module.css";
import customerServices from "@/utils/constants/FooterConstants/customerServices";

type Props = {};

const CustomerServices = (props: Props) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.h1}>Quick Links</h1>
      <div className={s.main}>
        <p className={s.p}>
          {customerServices.map((i) => (
            <Link href={i.path} key={i.path} className={s.link}>
              {i.label}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CustomerServices;
