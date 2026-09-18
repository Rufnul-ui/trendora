import React from "react";
import s from "./Footer.module.css";
import Logo from "../Navbar/Logo/Logo";
import QuickLinks from "./QuickLinks/QuickLinks";
import CustomerServices from "./CustomerServices/CustomerServices";
import Contacts from "./Contacts/Contacts";
import FooterEnd from "./FooterEnd/FooterEnd";

const Footer = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <Logo />
        </div>
        <div className={s.middle}>
          <div className={s.midContents}>
            <QuickLinks />
            <CustomerServices />
            <Contacts />
          </div>
        </div>
        <div>
          <FooterEnd />
        </div>
      </div>
    </div>
  );
};

export default Footer;
