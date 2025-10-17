"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";

const Leadership = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
          {/* <Image
            src="/leadership4.png"
            alt="Our Chaplain"
            fill
              className="md:hidden object-cover"
          ></Image> */}
          <Image
        src="/leadership.png"
            alt="Our Chaplain"
            fill
              className="object-cover h"
          ></Image>
   

      {/* Black overlay */}
      <div className="absolute inset-0 bg-[#FFA600]/20"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-end justify-start h-full text-center px-4 pt-8 md:px-15">
        <div className="flex flex-col items-end justify-end max-w-[380px] md:max-w-[857px]">
          <p className="text-black text-xs md:text-base bg-black/20 px-2 py-1 rounded-full border border-black">
            OUR SPIRITUAL LEADER
          </p>
          <h1 className="text-[32px] md:text-[72px] font-bold text-white text-right drop-shadow-lg md:leading-20">
            PREPARE YE THE WAY OF THE LORD!
          </h1>
          <p className="text-white text-sm md:text-lg text-right w-[250px] md:w-[633px]">
            “Every thriving spiritual community is guided by a shepherd with a
            heart for God and for people. At Jesus Alone Chapel, we are blessed
            to be under the leadership of our Chaplain.
          </p>
          <Button
            variant="link"
            className="p-0 underline font-semibold text-base md:text-lg"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
