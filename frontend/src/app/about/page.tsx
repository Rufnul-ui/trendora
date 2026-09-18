import About from "@/components/About/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Trendora",
};

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
