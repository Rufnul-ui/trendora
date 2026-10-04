import React from "react";
import s from "./PriceRange.module.css";
import priceRange from "@/utils/constants/priceRange";

type PriceRangeProps = {
  selectedPriceRange: string[];
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<string[]>>;
};

const PriceRange = ({
  selectedPriceRange,
  setSelectedPriceRange,
}: PriceRangeProps) => {
  const handlePriceChange = (price: string) => {
    setSelectedPriceRange((prev) => {
      if (prev.includes(price)) {
        return prev.filter((item) => item !== price);
      }

      return [...prev, price];
    });
  };
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Price Range</h3>

      <div className={s.options}>
        {priceRange.map((price) => (
          <label key={price} className={s.option}>
            <input
              type="checkbox"
              checked={selectedPriceRange.includes(price)}
              onChange={() => handlePriceChange(price)}
            />
            <span className={s.checkbox} />
            <span className={s.label}>{price}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceRange;
