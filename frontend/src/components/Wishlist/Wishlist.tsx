"use client";

import React, { useEffect, useState } from "react";
import s from "./Wishlist.module.css";
import WishlistEmpty from "./WishlistEmpty/WishlistEmpty";
import WishlistCard from "./WishlistCard/WishlistCard";
import {
  getWishlist,
  type Wishlist as WishlistType,
} from "@/api/product/wishlist";
import { getProducts, type Product } from "@/api/product/product";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistType[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const [wishlistData, productData] = await Promise.all([
          getWishlist(),
          getProducts(),
        ]);

        setWishlist(wishlistData);
        setProducts(productData);
      } catch (error) {
        console.error("Error loading wishlist data:", error);
      }
    };

    fetchWishlist();
  }, []);

  const wishlistProducts = wishlist
    .map((item) => products.find((product) => product.id === item.productId))
    .filter((product): product is Product => product !== undefined);

  if (wishlistProducts.length === 0) {
    return <WishlistEmpty />;
  }

  return (
    <div className={s.wrapper}>
      {wishlistProducts.map((product) => (
        <WishlistCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Wishlist;
