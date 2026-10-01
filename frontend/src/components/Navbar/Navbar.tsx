"use client";

import { useState } from "react";
import s from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import Navlinks from "./Navlinks/Navlinks";
import Buttons from "@/components/Navbar/Buttons/Buttons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <Logo />
        <Navlinks />
        <Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {menuOpen && (
        <div className={s.mobileMenu}>
          <Navlinks mobile />
        </div>
      )}
    </div>
  );
};

export default Navbar;
