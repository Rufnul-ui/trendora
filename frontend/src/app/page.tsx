import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import Service from "@/components/Home/Service/Service";
import Featured from "@/components/Home/Featured/Featured";
import Bestseller from "@/components/Home/BestSeller/Bestseller";
import OurBrands from "@/components/Home/OurBrands/OurBrands";

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Featured />
      <Bestseller />
      <OurBrands />
    </div>
  );
}
