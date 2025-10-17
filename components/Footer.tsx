"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterSection {
  title: string;
  tabs: Record<number, string>;
}

const footerItems: {
  ourChurch: FooterSection;
  getInvolved: FooterSection;
  socialItems: { id: number; logo: string; link: string }[];
} = {
  ourChurch: {
    title: "Our Church",
    tabs: {
      1: "About Us",
      2: "Donate",
      3: "Rides",
      4: "Testimonies",
    },
  },
  getInvolved: {
    title: "Get Involved",
    tabs: {
      1: "Follow Us",
      2: "Become a Worker",
      3: "FAQs",
    },
  },
  socialItems: [
    {
      id: 1,
      logo: "/instagram.svg",
      link: "https://www.instagram.com/bellsjcf/",
    },
    {
      id: 2,
      logo: "/whatsApp.svg",
      link: "https://whatsapp.com/channel/0029VbA1hoNDeON1m47A4H1v",
    },
    { id: 3, logo: "/telegram.svg", link: "https://t.me/+K93tB5oXEGU5NTg8" },
    {
      id: 4,
      logo: "/youtube.svg",
      link: "https://www.youtube.com/@TheFlipsideBujcf",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-15 flex flex-col gap-10 z-30 relative">
      <div className="text-center text-gray-500 border-t border-gray-700/40 pt-4"></div>
      <div className="flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={48}
          height={48}
          className="md:w-24 md:h-24"
        />

        {/* Social section */}
        <div className="flex gap-4">
          {footerItems.socialItems.map((social) => (
            <Link key={social.id} href={social.link} target="_blank">
              <Image
                src={social.logo}
                alt="social"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform duration-200 md:w-[30px] md:h-[30px]"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 flex-1">
        {(
          Object.entries(footerItems).filter(
            ([key]) => key !== "socialItems"
          ) as [string, FooterSection][]
        ).map(([key, section]) => (
          <div key={key}>
            <h3 className="text-md mb-3 text-[#FFA600] font-semibold">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {Object.values(section.tabs).map((tab, i) => (
                <li
                  key={i}
                  className="hover:underline hover:text-[#FDE4B6] cursor-pointer text-sm text-gray-300"
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-gray-600 w-50 md:w-60">
          Bells University of Technology (BellsTech), Idiroko, Ota, Ogun State.
        </p>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700/40 pt-4">
        © {new Date().getFullYear()} Jesus Alone Chapel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
