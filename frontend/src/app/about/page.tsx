import About from "@/components/About/About";
import { Metadata } from "next";
import React from "react";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "About - Trendora",
};

const page = () => {
  return (
    <div className={s.wrapper}>
      <About />
    </div>
  );
};

export default page;
