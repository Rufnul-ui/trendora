import React from "react";
import s from "./Sidebar.module.css";
import Categories from "./Categories/Categories";
import PriceRange from "./PriceRange/PriceRange";
import Sizes from "./Sizes/Sizes";
import SelectColor from "./SelectColor/SelectColor";

const Sidebar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1 className={s.title}>Shop</h1>

        <p className={s.subtitle}>Find Your Perfect Style</p>

        <span className={s.divider} />
      </div>

      <div className={s.filters}>
        <Categories />
        <PriceRange />
        <Sizes />
        <SelectColor />
      </div>
    </div>
  );
};

export default Sidebar;
