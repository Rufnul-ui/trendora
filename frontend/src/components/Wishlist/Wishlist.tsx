"use client";

import React from "react";
import s from "./Wishlist.module.css";
import WishlistEmpty from "./WishlistEmpty/WishlistEmpty";
import WishlistCard from "./WishlistCard/WishlistCard";
import { useWishlist } from "@/context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <WishlistEmpty />;
  }

  return (
    <div className={s.wrapper}>
      {wishlist.map((product) => (
        <WishlistCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Wishlist;
