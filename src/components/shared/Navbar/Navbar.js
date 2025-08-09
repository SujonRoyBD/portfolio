'use client';
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact-me" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#0f0212] to-[#2d1b63] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-3xl font-bold italic text-purple-400 drop-shadow-md">Sujon</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-purple-300 font-semibold transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="https://drive.google.com/file/d/10Rq8Gho09DqYW_kgXxPYOecgQGGAEH6Y/view?usp=drive_link"
            className="px-5 py-2 border border-cyan-400 text-white font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-gradient-to-r from-[#0f0212] to-[#2d1b63]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-purple-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#resume"
            className="px-4 py-2 border border-cyan-400 rounded-full text-center font-semibold hover:bg-cyan-600"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
