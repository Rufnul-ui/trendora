import React from "react";
import s from "./Contact.module.css";
import Location from "./Location/Location";
import Info from "./Info/Info";

const Contact = () => {
  return (
    <div className={s.wrapper}>
      <Location />
      <Info />
    </div>
  );
};

export default Contact;
