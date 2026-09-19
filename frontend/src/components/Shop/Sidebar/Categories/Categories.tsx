import React from "react";
import s from "./Categories.module.css";

const categories = ["Men", "Women", "Accessories"];

const Categories = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Categories</h3>

      <div className={s.options}>
        {categories.map((category) => (
          <label key={category} className={s.option}>
            <input type="checkbox" />
            <span className={s.checkbox} />
            <span className={s.label}>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Categories;
