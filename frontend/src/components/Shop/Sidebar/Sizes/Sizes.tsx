import React from "react";
import s from "./Sizes.module.css";

const sizes: string[] = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const Sizes = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Size</h3>

      <div className={s.sizes}>
        {sizes.map((size) => (
          <label key={size} className={s.size}>
            <input type="checkbox" />
            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
