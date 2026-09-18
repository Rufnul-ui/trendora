import React from "react";
import s from "./Featured.module.css";
import FeaturedBtn from "./FeaturedButtons/FeaturedBtn";
import FeaturedImageCard from "./FeaturedImageCard/FeaturedImageCard";

const Featured = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapped}>
        <h1 className={s.h1}>Featured Products</h1>
        <FeaturedBtn />
        <FeaturedImageCard />
      </div>
    </div>
  );
};

export default Featured;
