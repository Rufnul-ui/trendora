"use client";

import { useEffect, useState } from "react";
import s from "./Shop.module.css";
import Sidebar from "./Sidebar/Sidebar";
import ProductsDisplay from "./ProductsDisplay/ProductsDisplay";
import filterProducts from "@/utils/filters/filterProducts";
import { getProducts, type Product } from "@/api/product/product";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = filterProducts(
    products,
    selectedCategory,
    selectedPriceRange,
    selectedColors,
    selectedSizes,
  );

  return (
    <main className={s.wrapper}>
      <aside className={s.sidebar}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
      </aside>

      <section className={s.content}>
        <ProductsDisplay products={filteredProducts} />
      </section>
    </main>
  );
};

export default Shop;
