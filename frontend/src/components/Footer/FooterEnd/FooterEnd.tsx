import React from "react";
import s from "./FooterEnd.module.css";

const FooterEnd = () => {
  const date = new Date().getFullYear();
  return (
    <div className={s.wrapper}>
      <p>&copy; {date} Trendora . All Rights Reserved</p>
    </div>
  );
};

export default FooterEnd;
