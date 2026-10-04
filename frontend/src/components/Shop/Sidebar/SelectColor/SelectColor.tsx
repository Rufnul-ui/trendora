import React from "react";
import s from "./SelectColor.module.css";
import colors from "@/utils/constants/colors";

type ColorsProps = {
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
};

const SelectColor = ({ selectedColors, setSelectedColors }: ColorsProps) => {
  const handleColorChange = (color: string) => {
    setSelectedColors((prev) => {
      if (prev.includes(color)) {
        return prev.filter((item) => item !== color);
      }

      return [...prev, color];
    });
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Select Color</h3>

      <div className={s.colors}>
        {colors.map((color) => (
          <label key={color.name} className={s.color}>
            <input
              type="checkbox"
              name="color"
              value={color.name}
              checked={selectedColors.includes(color.name)}
              onChange={() => handleColorChange(color.name)}
            />

            <span
              className={s.circle}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
