"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
        <p className={s.resultCount}>{products.length} Products</p>

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
        {sortedProducts.map((product) => (
          <article className={s.card} key={product.id}>
            <div className={s.imageWrapper}>
              <Image
                src={product.image}
                alt={product.alt || product.title}
                fill
                className={s.image}
                sizes="(max-width: 768px) 50vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>

            <div className={s.details}>
              <h3 className={s.name}>{product.title}</h3>

              <div className={s.bottom}>
                <p className={s.price}>
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <div className={s.rating}>
                  <span>★</span>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
