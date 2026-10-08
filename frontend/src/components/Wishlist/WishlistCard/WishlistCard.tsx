"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import s from "./WishlistCard.module.css";

type Product = {
  id: string;
  image: string;
  alt: string;
  title: string;
  price: number;
  rating: number;
};

type WishlistCardProps = {
  product: Product;
};

const WishlistCard = ({ product }: WishlistCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <Image src={product.image} alt={product.alt} fill className={s.image} />
      </div>

      <div className={s.details}>
        <div className={s.top}>
          <h3 className={s.title}>{product.title}</h3>

          <button
            className={s.removeButton}
            type="button"
            aria-label="Remove from wishlist"
          >
            <Heart size={20} fill="currentColor" />
          </button>
        </div>

        <div className={s.rating}>
          <Star size={15} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <p className={s.price}>₹{product.price.toLocaleString("en-IN")}</p>

        <button className={s.cartButton} type="button">
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
};

export default WishlistCard;
