import React from "react";
import s from "./OurBrands.module.css";

import { CgAdidas } from "react-icons/cg";
import {
  SiNike,
  SiPuma,
  SiReebok,
  SiUnderarmour,
  SiNewbalance,
  SiFila,
} from "react-icons/si";

import { Shirt, ShoppingBag } from "lucide-react";

const OurBrands = () => {
  return (
    <section className={s.main}>
      <h1 className={s.h1}>Our Brands</h1>

      <div className={s.iconImg}>
        <CgAdidas className={s.icon} />
        <SiNike className={s.icon} />
        <SiPuma className={s.icon} />
        <SiReebok className={s.icon} />
        <SiUnderarmour className={s.icon} />
        <SiNewbalance className={s.icon} />
        <SiFila className={s.icon} />
        <Shirt className={s.icon} />
      </div>
    </section>
  );
};

export default OurBrands;
