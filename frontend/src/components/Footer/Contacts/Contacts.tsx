import React from "react";
import s from "./Contacts.module.css";
import { MapPin, PackageOpen, Phone } from "lucide-react";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.h1}>Quick Links</h1>
      <div className={s.main}>
        <p>
          <Phone size={14} /> <span>+91-9876543210</span>
        </p>
        <p>
          <PackageOpen size={14} />{" "}
          <span className={s.mail}>support@trendora.com</span>
        </p>
        <p>
          <MapPin size={14} /> <span>Chennai, India</span>
        </p>
      </div>
      <div className={s.social}>
        <FiFacebook size={24} className={s.icon} />
        <BsInstagram size={24} className={s.icon} />
        <BsTwitterX size={24} className={s.icon} />
        <FaYoutube size={24} className={s.icon} />
      </div>
    </div>
  );
};

export default Contacts;
