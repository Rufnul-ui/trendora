import React from "react";
import s from "./Location.module.css";

const Location = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.387730227315!2d80.20848662933241!3d13.049959683187362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c2084f9c3b%3A0x54b9629cc45d76f0!2sNexus%20Vijaya%20Mall!5e0!3m2!1sen!2sin!4v1789729749793!5m2!1sen!2sin"
          width="800"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};

export default Location;
