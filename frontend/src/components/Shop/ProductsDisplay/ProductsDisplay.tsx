"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Zap } from "lucide-react";
import s from "./ProductsDisplay.module.css";

type Product = {
  id: string;
  image: string;
  alt: string;
  title: string;
  price: number;
  rating: number;
};

const ProductsDisplay = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState("featured");
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/allProducts");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-high") {
      return a.price - b.price;
    }

    if (sort === "high-low") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <div className={s.wrapper}>
      <div className={s.topBar}>
        <div>
          <h2 className={s.heading}>All Products</h2>
          <p className={s.resultCount}>{products.length} Products</p>
        </div>

        <select
          className={s.sort}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="latest">Latest</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <div className={s.grid}>
        {sortedProducts.map((product) => {
          const isWishlisted = wishlist.includes(product.id);

          return (
            <article className={s.card} key={product.id}>
              <div className={s.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.alt || product.title}
                  fill
                  className={s.image}
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1100px) 50vw, 33vw"
                />

                <button
                  type="button"
                  className={`${s.wishlist} ${
                    isWishlisted ? s.wishlisted : ""
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={
                    isWishlisted
                      ? `Remove ${product.title} from wishlist`
                      : `Add ${product.title} to wishlist`
                  }
                >
                  <Heart
                    size={18}
                    strokeWidth={1.8}
                    fill={isWishlisted ? "currentColor" : "none"}
                  />
                </button>

                <div className={s.imageActions}>
                  <button type="button" className={s.quickButton}>
                    Quick View
                  </button>
                </div>
              </div>

              <div className={s.details}>
                <h3 className={s.name}>{product.title}</h3>

                <div className={s.meta}>
                  <div className={s.rating}>
                    <span className={s.star}>★</span>
                    <span>{product.rating}</span>
                  </div>

                  <span className={s.separator}>|</span>

                  <span className={s.reviews}>Trusted Product</span>
                </div>

                <div className={s.priceRow}>
                  <p className={s.price}>
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className={s.actions}>
                  <button type="button" className={s.cartButton}>
                    <ShoppingCart size={17} strokeWidth={2} />
                    <span>Add to Cart</span>
                  </button>

                  <button type="button" className={s.buyButton}>
                    <Zap size={16} fill="currentColor" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsDisplay;
