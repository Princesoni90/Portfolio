'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[65px] px-5 md:px-10">
        {/* Logo & Name */}
        <Link href="#about-me" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer hidden md:block lg:block"
          />
          <span className=" md:block text-white font-bold ml-2">
            Prince Soni
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 bg-[rgba(3,0,20,0.37)] px-6 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link key={link.title} href={link.link} className="hover:text-[rgb(112,66,248)] transition">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link key={name} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }} // Start from the right
            animate={{ opacity: 1, x: 0 }} // Slide in smoothly
            exit={{ opacity: 0, x: 300 }} // Slide out to the right
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#030014]/80 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 md:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-6 text-white text-3xl"
              onClick={closeMenu}
            >
              ✖
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-6 text-lg">
              {NAV_LINKS.map((link) => (
                <Link key={link.title} href={link.link} onClick={closeMenu} className="hover:text-[rgb(112,66,248)] transition">
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex space-x-6 mt-8">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link key={name} href={link} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
