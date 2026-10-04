import React from "react";
import s from "./Sizes.module.css";
import sizes from "@/utils/constants/sizes";

type SizesProps = {
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
};

const Sizes = ({ selectedSizes, setSelectedSizes }: SizesProps) => {
  const handleSizesChange = (size: string) => {
    setSelectedSizes((prev) => {
      if (prev.includes(size)) {
        return prev.filter((item) => item !== size);
      }

      return [...prev, size];
    });
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Size</h3>

      <div className={s.sizes}>
        {sizes.map((size) => (
          <label key={size} className={s.size}>
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizesChange(size)}
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
