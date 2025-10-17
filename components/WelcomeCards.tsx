"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const CardItems = [
  {
    title: "WHO ARE WE?",
    subtext: "Learn more about this Chosen Generation",
    image: "/whoweare.png",
  },
  {
    title: "MAKE A FRIEND TODAY!",
    subtext: "Connect with young believers on Campus",
    image: "/afriend.png",
  },
  {
    title: "KINGDOM BUILDERS!",
    subtext: "Be a part of something Bigger.",
    image: "/kingdom.png",
  },
];

const WelcomeCards = () => {
  return (
    <section className="py-10">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CardItems.map((item, index) => (
          <Card
            key={index}
            className="relative group overflow-hidden rounded-2xl border-none shadow-lg hover:scale-[1.02] transition-transform duration-300 h-[393px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            </div>

            {/* Text Content */}
            <CardContent className="relative  flex flex-col  text-white h-64 ">
              <CardTitle className="text-base md:text-2xl font-semibold mb-1">
                {item.title}
                <div className="w-53 md:w-full h-[1px] bg-[#FFA600]"></div>
              </CardTitle>
              <CardDescription className="text-gray-200">
                {item.subtext}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WelcomeCards;
