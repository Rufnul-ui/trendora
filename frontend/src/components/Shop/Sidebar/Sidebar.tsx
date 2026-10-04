import React from "react";
import s from "./Sidebar.module.css";
import Categories from "./Categories/Categories";
import PriceRange from "./PriceRange/PriceRange";
import Sizes from "./Sizes/Sizes";
import SelectColor from "./SelectColor/SelectColor";

type SidebarProps = {
  selectedCategory: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPriceRange: string[];
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<string[]>>;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
};

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
}: SidebarProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1 className={s.title}>Shop</h1>

        <p className={s.subtitle}>Find Your Perfect Style</p>

        <span className={s.divider} />
      </div>

      <div className={s.filters}>
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <PriceRange
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />

        <Sizes
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />

        <SelectColor
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      </div>
    </div>
  );
};

export default Sidebar;
