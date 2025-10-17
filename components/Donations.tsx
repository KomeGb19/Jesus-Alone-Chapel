"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const Donations = () => {
  return (
    <section className="bg-black py-10 px-4 md:px-15">
      {/* Make this div relative so the naira stays inside */}
      <div className="relative flex flex-col bg-[#FDE4B6] px-6 md:px-12 py-10 rounded-2xl overflow-hidden">
        <h2 className="text-black text-[28px] md:text-[64px] font-bold">
          Give to the Chapel
        </h2>
        <p className="text-black text-sm md:text-[20px] max-w-[700px]">
          Giving is an act of worship. Support the work of God on campus by
          sowing into the ministry.
        </p>

        <div className="flex max-sm:flex-col items-center mt-5 md:mt-10 gap-4 z-10">
          <Button className="rounded-full bg-[#FFA600] p-6 hover:text-[#FFA600] w-60 hover:bg-white hover:border hover:border-[#FFA600] text-lg max-sm:w-full transition-colors duration-500">
            Offerings
          </Button>
          <Button className="rounded-full bg-black text-lg p-6 max-sm:w-full w-60 hover:text-black hover:bg-white hover:border hover:border-black transition-colors duration-500">
            Donations
          </Button>
        </div>

        {/* Naira image positioned INSIDE the box */}
        <Image
          src="/naira.png"
          alt="Naira Symbol"
          width={250}
          height={250}
          className="absolute -right-10  max-sm:top-23 sm:top-10 md:top-30  opacity-25 z-0 object-contain w-[400px] h-[400px]"
        />
      </div>
    </section>
  );
};

export default Donations;
