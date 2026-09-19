import React from "react";
import s from "./PriceRange.module.css";

const priceRanges = [
  "Under ₹1,000",
  "₹1,000 - ₹2,000",
  "₹2,000 - ₹5,000",
  "Above ₹5,000",
];

const PriceRange = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Price Range</h3>

      <div className={s.options}>
        {priceRanges.map((range) => (
          <label key={range} className={s.option}>
            <input type="checkbox" />
            <span className={s.checkbox} />
            <span className={s.label}>{range}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceRange;
