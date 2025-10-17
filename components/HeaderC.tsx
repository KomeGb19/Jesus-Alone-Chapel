"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import StaggeredMenu from "./StaggeredMenu"; // ✅ ensure this import path is correct

const menuItems = [
  { label: "About", ariaLabel: "About Jesus Alone Chapel", link: "/about" },
  {
    label: "Fellowships",
    ariaLabel: "Campus communities",
    link: "/fellowships",
  },
  {
    label: "BUJCF",
    ariaLabel: "Bells University Joint Christian Fellowship",
    link: "/bujcf",
  },
  { label: "Sermons", ariaLabel: "Impacting messages", link: "/sermons" },
  { label: "Events", ariaLabel: "What we are up to", link: "/events" },
  { label: "Give", ariaLabel: "Donate to the Church", link: "/give" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white py-3 px-6 sticky top-0 z-30">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className="hover:text-[#FFA600] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            variant="ghost"
            className="bg-transparent hover:bg-transparent p-2"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Staggered Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={false}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl="/logo.svg"
            accentColor="#FFA600"
            isFixed={true}
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => {
              console.log("Menu closed");
              setIsMenuOpen(false);
            }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
