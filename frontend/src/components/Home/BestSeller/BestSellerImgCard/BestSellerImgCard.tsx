"use client";

import styles from "./BestSellerImgCard.module.css";
import BuyButton from "../../Featured/FeaturedButtons/BuyButton/BuyButton";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

const BestSellerImgCard = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch("http://localhost:3001/popular");
      const data = await response.json();

      setProduct(data);
    };

    getImages();
  }, []);
  return (
    <div className={styles.container}>
      {product.map((product) => (
        <div className={styles.card} key={product.id}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.alt}
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <BuyButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellerImgCard;
