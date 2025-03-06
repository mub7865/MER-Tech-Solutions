'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-gradient-to-b from-purple-200 to-white shadow-lg fixed w-full z-50">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}

          className="flex items-center">
          <Link href="/" className="flex items-center ">
            <Image src='/logo.png' alt="Mer Tech Solution Logo" height={100} width={100} className="h-[50px] w-[50px]" ></Image>
            <span className="text-[#513187]  font-bold cursor-pointer mt-2">
              MER Tech Solution
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6 text-gray-700"
        >

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="#about" className="hover:text-black">About Us</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="#services" className="hover:text-black">Our Services</Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="#work" className="hover:text-black">Our Work</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="#testimonial" className="hover:text-black">Testimonial</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="#contact" className="hover:text-black">Contact</Link>
          </motion.li>
        </motion.ul>

        {/* Desktop Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#513187] text-white px-4 py-2 rounded-lg"
        >
          Let&apos;s Talk
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-purple-200 shadow-lg"
          >
            <ul className="flex flex-col space-y-4 p-4 text-gray-700">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#about" className="hover:text-black">About Us</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#services" className="hover:text-black">Our Services</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#work" className="hover:text-black">Our Work</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#team" className="hover:text-black">Our Team</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#testimonial" className="hover:text-black">Testimonial</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#contact" className="hover:text-black">Contact</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    
    </header>
  );
}