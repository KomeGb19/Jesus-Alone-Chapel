"use client";
import React from "react";
import Image from "next/image";
import FellowshipCard from "./FellowshipCard";

const Fellowships = () => {
  return (
    <section className="bg-black mt-10 py-10 px-4 md:px-15 relative overflow-hidden">
      <Image
        src="/elipse.svg"
        alt="background"
        width={0}
        height={0}
        className="w-full h-full absolute -top-[350px] right-[280px] rotate-180 z-0 pointer-events-none"
      />
      {/* <Image
        src="/elipse.svg"
        alt="background"
        width={0}
        height={0}
        className="w-full h-[1200px] absolute -top-[100px] left-[500px] rotate-50 z-0 pointer-events-none"
      /> */}

      <div className="flex flex-col items-start">
        <p className="text-[#FFA600] text-xs md:text-base bg-[#FFA600]/20 px-2 py-1 rounded-full border border-[#FFA600]">
          FELLOWSHIPS
        </p>
        <h1 className="font-semibold mt-2 text-2xl md:text-[64px] max-w-2xl text-white">
          A CITY SET ON A HILL CANNOT BE HIDDEN
        </h1>
        <p className="text-[#FFA600] text-sm md:text-lg mt-2">
          Belong to a Community
        </p>
      </div>
      <FellowshipCard />
    </section>
  );
};

export default Fellowships;
