"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const menuItems = [
  { label: "About", ariaLabel: "About Jesus Alone Chapel", link: "/about" },
  {
    label: "Fellowships",
    ariaLabel: "Campus communities",
    link: "/fellowships",
  },
  {
    label: "BUJCF",
    ariaLabel: "Bells University Joint Christain Fellowship",
    link: "/bujcf",
  },
  { label: "Sermons", ariaLabel: "Impacting messages", link: "/sermons" },
  { label: "Events", ariaLabel: "What we are up to", link: "/events" },
  { label: "Give", ariaLabel: "Donate to the Church", link: "/give" },
];
/* const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
]; */

const Header = () => {
  return (
    <header className="w-full bg-black text-white py-3 px-6 sticky z-30">
      <nav className="flex items-center justify-between max-w-7xl mx-auto ">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />

        <ul className="hidden md:flex space-x-8">
          {menuItems.map((items) => (
            <li key={items.link}>
              <Link
                href={items.link}
                className="hover:text-[#FFA600] transition-colors duration-300"
              >
                {items.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Button variant="ghost" className="bg-none"><Menu className="w-10 h-10" /></Button>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
