import React from "react";
import s from "./Service.module.css";
import { IndianRupeeIcon, RefreshCw, ShieldCheck, Van } from "lucide-react";

const Service = () => {
  return (
    <div className={s.main}>
      <h1 className={s.h1}>Our Services</h1>
      <div className={s.wrapper}>
        <div className={s.icon}>
          <div>
            <Van size={40} />
          </div>
          <div>
            <p className={`${s.p} ${s.bold}`}>Free Shipping</p>
            <p className={s.p}>
              on Order above <IndianRupeeIcon size={12} /> 999
            </p>
          </div>
        </div>

        <div className={s.icon}>
          <div>
            <RefreshCw size={40} />
          </div>
          <div>
            <p className={`${s.p} ${s.bold}`}>Eazy Return</p>
            <p className={s.p}>Within 7 Days</p>
          </div>
        </div>

        <div className={s.icon}>
          <div>
            <ShieldCheck size={40} />
          </div>
          <div>
            <p className={`${s.p} ${s.bold}`}>Secure Payment</p>
            <p className={s.p}>100% Secure Checkout</p>
          </div>
        </div>

        <div className={s.icon}>
          <div>
            <RefreshCw size={40} />
          </div>
          <div>
            <p className={`${s.p} ${s.bold}`}>24/7 Support</p>
            <p className={s.p}>We are here to Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
