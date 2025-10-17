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
    title: "Reedemer's Campus Fellowship",
    meetings: "Tues & Thursdays",
    image: "/redeemers.png",
  },
  {
    title: "BUCCF",
    meetings: "Fridays",
    image: "/winners.png",
  },
  {
    title: "Winners Campus Fellowship",
    meetings: "Wed & Sundays",
    image: "/bujcf.png",
  },
  {
    title: "Deeper Life Campus Fellowship",
    meetings: "Mon & Wednesdays",
    image: "/deeperlife.png",
  },
];

const FellowshipCard = () => {
  return (
    <section className="py-10">
      {/* Cards Grid */}
      <div className="flex max-sm:flex-col gap-8">
        {CardItems.map((item, index) => (
          <Card
            key={index}
            className="relative group overflow-hidden rounded-2xl border-none shadow-lg hover:scale-[1.02] hover:border hover:border-[#FFA600] transition-transform duration-300 md:w-[287px] h-[393px]"
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
            <Image
              src="/community.svg"
              alt="Fellowships"
              width={0}
              height={0}
              className="w-20 h-20 absolute right-0 top-57.5"
            />
            {/* Text Content */}
            <CardContent className="relative bg-[#FFA600]/20 p-3 backdrop-blur-[10px] z-10 top-70 flex flex-col  text-white h-[96px] ">
              <CardTitle className="text-base font-medium mb-1">
                {item.title}
              </CardTitle>
              <CardDescription className="text-gray-200 text-xs font-regular">
                {item.meetings}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FellowshipCard;
