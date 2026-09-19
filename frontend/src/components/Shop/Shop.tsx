import React from "react";
import s from "./Shop.module.css";
import Sidebar from "./Sidebar/Sidebar";
import ProductsDisplay from "./ProductsDisplay/ProductsDisplay";

const Shop = () => {
  return (
    <main className={s.wrapper}>
      <aside className={s.sidebar}>
        <Sidebar />
      </aside>

      <section className={s.content}>
        <ProductsDisplay />
      </section>
    </main>
  );
};

export default Shop;
