import React from "react";
import s from "./BuyButton.module.css";
import { ArrowRight } from "lucide-react";

const BuyButton = () => {
  return (
    <div className={s.wrapper}>
      <button type="submit" className={s.button}>
        Shop Now <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default BuyButton;
