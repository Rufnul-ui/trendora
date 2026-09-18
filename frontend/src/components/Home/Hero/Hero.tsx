import s from "./Hero.module.css";
import CarouselBanner from "@/components/Home/Hero/Carousel/Carousel";

const Hero = () => {
  return (
    <div className={s.main}>
      <CarouselBanner />
    </div>
  );
};

export default Hero;
