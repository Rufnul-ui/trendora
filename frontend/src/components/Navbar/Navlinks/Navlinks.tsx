import navItems from "@/utils/constants/navItems";
import Link from "next/link";
import s from "./Navlinks.module.css";

interface NavlinksProps {
  mobile?: boolean;
}

const Navlinks = ({ mobile = false }: NavlinksProps) => {
  return (
    <nav className={`${s.wrapper} ${mobile ? s.mobile : ""}`}>
      {navItems.map((item) => (
        <Link key={item.path} href={item.path} className={s.link}>
          <span className={s.li}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navlinks;
