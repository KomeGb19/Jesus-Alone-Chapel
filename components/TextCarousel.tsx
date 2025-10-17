"use client";

import * as React from "react";
/* import Autoplay from "embla-carousel-autoplay"; */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  {
    id: 1,
    title: "Faith in Action",
    text: "We are called to live out our faith boldly, shining the light of Christ wherever we go.",
  },
  {
    id: 2,
    title: "Community of Believers",
    text: "Together, we grow stronger — encouraging, supporting, and uplifting one another in love.",
  },
  {
    id: 3,
    title: "Kingdom Builders",
    text: "Our mission is to advance the Kingdom of God through service, worship, and the Word.",
  },
  {
    id: 4,
    title: "Empowered for Purpose",
    text: "Every believer carries divine potential — equipped by the Spirit to make impact in their generation.",
  },
];

export default function TextCarousel() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#FFA600] mb-10">
          WORDS OF INSPIRATION
        </h2>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full relative overflow-visible"
        >
          <CarouselContent className="-ml-4">
            {slides.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[85%] sm:basis-[45%] md:basis-[30%] pl-4"
              >
                <Card className="bg-[#111] rounded-2xl border border-[#FFA600]/30 shadow-lg hover:scale-[1.02] transition-transform duration-300 p-6 flex flex-col justify-between">
                  <CardContent className="text-center flex flex-col justify-center items-center h-full">
                    <h3 className="text-xl font-semibold text-[#FFA600] mb-3">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
