import Shop from "@/components/Shop/Shop";
import { Metadata } from "next";
import React from "react";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Shop - Trendora",
};

const page = () => {
  return (
    <div className={s.main}>
      <Shop />
    </div>
  );
};

export default page;
