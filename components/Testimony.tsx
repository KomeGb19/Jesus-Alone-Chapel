"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Testimony = () => {
  return (
    <section className="flex flex-col items-center gap-8 h-svh py-10 px-4 md:px-15">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold mt-2 text-xl md:text-[64px] w-[167px] md:w-[653px] text-center  text-black">
          SHARE GOD'S FAITHFULNESS
        </h1>
        <p className="text-[#FFA600] text-xs md:text-base bg-[#FFA600]/20 px-2 py-1 rounded-full border border-[#FFA600]">
          TESTIMONIES
        </p>
      </div>

      <Image
        src="/testimony2.png"
        alt="Testimonies"
        width={160}
        height={160}
        className="w-96 md:hidden"
      />

      <div className="flex flex-col items-start">
        <Button variant="default" className="mb-2 bg-[#4444]/40 text-black">
          See More <MoveRight />{" "}
        </Button>
        <p className="text-[#FFA600] text-xs md:text-lg">
          Revelation 12:11 – ‘They triumphed over him by the blood of the Lamb
          and by the word of their testimony
        </p>
        <h3 className="mt-2 text-black/65  text-base md:text-xl md:w-">
          At Jesus Alone Chapel, we celebrate the mighty works of God in the
          lives of our members. Read and be encouraged by these powerful
          testimonies, and feel free to share yours!”
        </h3>
      </div>
    </section>
  );
};

export default Testimony;
