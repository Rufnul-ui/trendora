"use client";

import s from "./Buttons.module.css";
import { useRouter } from "next/navigation";
import {
  CircleUserRound,
  Heart,
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

interface ButtonsProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Buttons = ({ menuOpen, setMenuOpen }: ButtonsProps) => {
  const router = useRouter();

  return (
    <div className={s.wrapper}>
      <Search
        className={s.btn}
        strokeWidth={3}
        onClick={() => router.push("/search")}
      />

      <Heart
        className={s.btn}
        strokeWidth={3}
        onClick={() => router.push("/wishlist")}
      />

      <ShoppingBag
        className={s.btn}
        strokeWidth={3}
        onClick={() => router.push("/cart")}
      />

      <CircleUserRound
        className={s.btn}
        strokeWidth={3}
        onClick={() => router.push("/login")}
      />

      <button
        className={s.menuBtn}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
};

export default Buttons;
