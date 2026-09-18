"use client";
import React from "react";
import s from "./FeaturedBtn.module.css";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const FeaturedBtn = () => {
  const router = useRouter();

  return (
    <div className={s.wrapper}>

      <div className={s.second}>
        <button
          type="button"
          className={`${s.btn} ${s.rightBtn}`}
          onClick={() => router.push("/shop")}
        >
          View All
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedBtn;
