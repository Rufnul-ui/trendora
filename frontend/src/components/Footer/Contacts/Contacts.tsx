import React from "react";
import s from "./Contacts.module.css";
import { MapPin, PackageOpen, Phone } from "lucide-react";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.h1}>Contacts</h1>
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
        <Link href={"http://www.facebook.com/trendora"} target="_blank">
          <FiFacebook size={24} className={s.icon} />
        </Link>
        <Link href={"http://www.instagram.com/trendora"} target="_blank">
          <BsInstagram size={24} className={s.icon} />
        </Link>
        <Link href={"http://www.x.com/trendora"} target="_blank">
          <BsTwitterX size={24} className={s.icon} />
        </Link>
        <Link href={"http://www.youtube.com/trendora"} target="_blank">
          <FaYoutube size={24} className={s.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
