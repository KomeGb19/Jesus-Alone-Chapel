"use client";
import React from "react";
import WelcomeCards from "./WelcomeCards";

const Welcome = () => {
  return (
    <section className="relative mt-10 px-4 md:px-15">
      <div className="flex flex-col items-start">
        <p className="text-[#FFA600] text-xs md:text-base bg-[#FFA600]/20 px-2 py-1 rounded-full border border-[#FFA600]">
          YOUR NEW FAMILY
        </p>
        <h1 className="font-semibold mt-2 text-2xl md:text-4xl">
          WELCOME TO JAC
        </h1>
        <p className="text-black/65 text-sm md:text-lg mt-2">
          A place to worship, fellowship and spiritual growth within the campus
          community.
        </p>
      </div>
      <WelcomeCards />
    </section>
  );
};

export default Welcome;
