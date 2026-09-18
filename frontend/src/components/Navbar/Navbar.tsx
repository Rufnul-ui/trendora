"use client";

import React, { useEffect, useState } from "react";
import s from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import Navlinks from "./Navlinks/Navlinks";
import Buttons from "@/components/Navbar/Buttons/Buttons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path !== "/") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  return (
    <div className={`${s.wrapper} ${scrolled ? s.bgScrolled : ""}`}>
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
