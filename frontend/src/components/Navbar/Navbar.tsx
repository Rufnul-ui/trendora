"use client";

import React, { useEffect, useState } from "react";
import s from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import Navlinks from "./Navlinks/Navlinks";
import Buttons from "@/components/Navbar/Buttons/Buttons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${s.wrapper}`}>
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
