'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  return (
    <footer className="bg-[#1E132E] text-white py-12 px-6" ref={footerRef}>
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl bg-white mx-auto rounded-2xl py-10 text-center"
      >
        <h2 className="text-3xl font-semibold text-[#513187]">
          Ready To Launch Your Digital Marketing Project?
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 text-lg text-gray-600"
        >
          Ready to launch your digital marketing project? Let us craft strategies that drive results and growth.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 bg-[#513187] hover:bg-[#432066] text-white py-3 px-8 rounded text-lg font-medium"
        >
          Let&apos;s Talk
        </motion.button>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mt-12"
      >
        {/* MER Tech Solution */}
        <div>
          <h3 className="font-bold text-lg">MER Tech Solution</h3>
          <p className="mt-2 text-gray-300">
            Specialists in innovative digital marketing strategies, branding, creatively-led user-driven design solutions to expand your brand’s online awareness and drive measurable growth.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="font-bold text-lg">MENU</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-bold text-lg">SERVICES</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Web Development</li>
            <li className="hover:underline cursor-pointer">Digital Marketing</li>
            <li className="hover:underline cursor-pointer">SEO</li>
            <li className="hover:underline cursor-pointer">Creative & Content</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="font-bold text-lg">SOCIAL MEDIA</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-6xl mx-auto text-center mt-12 border-t border-gray-600 pt-4 text-xs text-gray-300"
      >
        © 2025 MER Tech Solution. All Rights Reserved. |{" "}
        <span className="underline cursor-pointer">Terms & Conditions</span> |{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>
      </motion.div>
    </footer>
  );
};

export default Footer;