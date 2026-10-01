import React from "react";
import s from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Trendora",
};

const page = () => {
  return <div className={s.wrapper}>page</div>;
};

export default page;
