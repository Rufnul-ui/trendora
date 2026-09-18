import React from "react";
import styles from "./BestSellerImgCard.module.css";
import bestSellerImg from "@/utils/constants/bestSellerImg";
import BuyButton from "../../Featured/FeaturedButtons/BuyButton/BuyButton";
import Image from "next/image";

const BestSellerImgCard = () => {
  return (
    <div className={styles.container}>
      {bestSellerImg.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.imageWrapper}>
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <BuyButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellerImgCard;
