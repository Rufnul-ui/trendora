import React from "react";
import s from "./WishlistEmpty.module.css";
import Image from "next/image";

const WishlistEmpty = () => {
  return (
    <div className={s.wrapper}>
      <Image
        src={"/wishlist/wishlist-empty.png"}
        alt="Empty Wishlist"
        width={245}
        height={171}
      />
      <h1 className={s.h1}>Empty Wishlist</h1>
      <p className={s.p}>You have no items in your wishlist. Start adding!</p>
    </div>
  );
};

export default WishlistEmpty;
