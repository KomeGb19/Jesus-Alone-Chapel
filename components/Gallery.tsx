"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TextCarousel from "./TextCarousel";

const CardImages = [
  { id: 1, image: "/gallery1.png" },
  { id: 2, image: "/gallery2.png" },
  { id: 3, image: "/gallery3.png" },
  { id: 4, image: "/gallery1.png" },
  { id: 5, image: "/gallery2.png" },
  { id: 6, image: "/gallery3.png" },
];

const slides = [
  { id: 1, title: "Faith in Action" },
  { id: 2, title: "Community of Believers" },
  { id: 3, title: "Kingdom Builders" },
  { id: 4, title: "Empowered for Purpose" },
  { id: 5, title: "Worship Without Walls" },
  { id: 6, title: "Light to the Nations" },
  { id: 7, title: "Grace for Every Season" },
];


const Gallery = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false
    })
  );
  return (
    <section className="flex flex-col items-end py-10  md:mb-5 h-svh px-4 pt-8 md:px-15 relative overflow-hidden ">
      {/* Header */}
      <div className="flex flex-col items-end justify-end max-w-[380px] md:max-w-[857px]">
        <p className="text-black text-xs md:text-base bg-black/20 px-2 py-1 rounded-full border border-black">
          GALLERY
        </p>
        <h1 className="text-[32px] md:text-[64px] font-semibold text-black text-right md:leading-20">
          SHOW FORTH HIS GLORY
        </h1>
      </div>

      <div className="flex flex-col items-center w-full absolute left-0 top-50 sm:top-65">
        <Carousel
          opts={{
            align: "start",
            loop: true, // ensures it wraps around
            dragFree: true,
          }}
          plugins={[autoplay.current]} // enables autoplay
          className="w-full relative overflow-visible"
        >
          <CarouselContent className="-ml-4">
            {slides.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[85%] sm:basis-[95%] md:basis-[30%] pl-4"
              >
                <Card className="bg-[#111] rounded-2xl border border-[#FFA600]/30 shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between p-3 max-sm:w-80 ">
                  <CardContent className="text-center flex flex-col justify-center items-center ">
                    <h3 className="text-sm font-semibold text-[#FFA600] ">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[autoplay.current]}
          className="w-full overflow-visible mt-8 cursor-grab left-0"
        >
          <CarouselContent className="">
            {CardImages.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[90%] sm:basis-[45%] md:basis-[30%] pl-3"
              >
                <Card className="relative group overflow-hidden rounded-2xl border-none shadow-lg hover:scale-[1.02] transition-transform duration-300 h-[303px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={`Gallery image ${item.id}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
