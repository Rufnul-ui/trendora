import React from "react";
import s from "./Categories.module.css";
import categories from "@/utils/constants/categories";

type CategoriesProps = {
  selectedCategory: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
};

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Categories</h3>

      <div className={s.options}>
        {categories.map((category) => (
          <label key={category} className={s.option}>
            <input
              type="checkbox"
              checked={selectedCategory.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />

            <span className={s.checkbox} />

            <span className={s.label}>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Categories;
