import React from "react";
import s from "./SelectColor.module.css";

const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Red", value: "#c62828" },
  { name: "Blue", value: "#1565c0" },
  { name: "Green", value: "#2e7d32" },
  { name: "Yellow", value: "#f9a825" },
  { name: "Pink", value: "#ec407a" },
  { name: "Brown", value: "#795548" },
  { name: "Grey", value: "#9e9e9e" },
];

const SelectColor = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Select Color</h3>

      <div className={s.colors}>
        {colors.map((color) => (
          <label key={color.name} className={s.color}>
            <input type="checkbox" name="color" value={color.name} />

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
