import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact - Trendora",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
