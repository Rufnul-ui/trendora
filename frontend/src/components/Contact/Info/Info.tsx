import React from "react";
import s from "./Info.module.css";
import { MapPin, Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";

const Info = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.main}>
        <div className={s.infoCard}>
          <MapPin className={s.icon} />
          <h2>Our Address</h2>
          <p>
            3rd Floor, 183, Arcot Rd, Vadapalani,
            <br />
            Chennai, Tamil Nadu 600026
          </p>
        </div>

        <div className={s.infoCard}>
          <Phone className={s.icon} />
          <h2>Phone</h2>
          <p>
            +91 98765 43210
            <br />
            Mon - Sat, 9:00 AM - 6:00 PM
          </p>
        </div>

        <div className={s.infoCard}>
          <MdEmail className={s.icon} />
          <h2>Email</h2>
          <p>
            support@trendora.com
            <br />
            We reply within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;