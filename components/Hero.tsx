"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Our Chaplain"
        fill
        className="object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-centers justify-center h-full text-center px-4">
        <div className="flex flex-col items-center justify-center max-w-[380px] md:max-w-[857px]">
          <h1 className="text-[32px] md:text-[72px] font-bold text-white drop-shadow-lg md:leading-20">
            LIVING BY HIS WORDS OUR PATH IS
            <span className="text-[#FFA600]"> BRIGHT AND CLEAR</span>
          </h1>
          <Button
            variant="default"
            className="mt-8 bg-[#444444]/50 text-white px-6 py-3 rounded-full border border-[#FFA600]/50 font-semibold hover:bg-[#5E2B2B] transition"
          >
            WORSHIP WITH US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
