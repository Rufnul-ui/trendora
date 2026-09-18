import React from "react";
import s from "./Bestseller.module.css";
import BestSellerImgCard from "./BestSellerImgCard/BestSellerImgCard";

const Bestseller = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapped}>
        <h1 className={s.h1}>Best Sellers</h1>
        <BestSellerImgCard />
      </div>
    </div>
  );
};

export default Bestseller;
