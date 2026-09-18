import Image from "next/image";
import featuredImg from "@/utils/constants/featuredImg";
import styles from "./FeaturedImageCard.module.css";
import BuyButton from "../FeaturedButtons/BuyButton/BuyButton";

export default function ImageCard() {
  return (
    <div className={styles.container}>
      {featuredImg.map((item) => (
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
}
