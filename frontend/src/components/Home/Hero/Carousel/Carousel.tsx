"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import slides from "@/utils/constants/slides";
import { ChevronLeft, ChevronRight } from "lucide-react";
import s from "./Carousel.module.css";
import { useRouter } from "next/navigation";

function EmblaCarousel() {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const goToPrev = () => {
    emblaApi?.scrollPrev();
  };

  const goToNext = () => {
    emblaApi?.scrollNext();
  };

  // Track current slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins().autoplay;

    autoplay?.play();

    return () => {
      autoplay?.stop();
    };
  }, [emblaApi]);

  return (
    <section className={s.embla}>
      <div className={s.embla__viewport} ref={emblaRef}>
        <div className={s.embla__container}>
          {slides.map((slide, index) => (
            <div className={s.embla__slide} key={index}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={1650}
                height={700}
                priority={index === 0}
              />

              <div
                className={`${s.content} ${s[`content--${slide.position}`]}`}
              >
                <h1>{slide.title}</h1>

                <p>{slide.description}</p>

                <button onClick={() => router.push("/")}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        className={`${s.arrow} ${s.prev}`}
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} strokeWidth={1.5} />
      </button>

      {/* Next Button */}
      <button
        className={`${s.arrow} ${s.next}`}
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight size={40} strokeWidth={1.5} />
      </button>

      {/* Slide Indicators */}
      <div className={s.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${s.dot} ${selectedIndex === index ? s.active : ""}`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default EmblaCarousel;
