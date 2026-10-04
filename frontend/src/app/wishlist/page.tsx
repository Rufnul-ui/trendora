import Wishlist from "@/components/Wishlist/Wishlist";
import { Metadata } from "next";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Wishlist | Trendora",
};

const page = () => {
  return (
    <div className={s.wrapper}>
      <Wishlist />
    </div>
  );
};

export default page;
