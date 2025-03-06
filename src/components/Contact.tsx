'use client'

import { motion } from "framer-motion";

const ContactSection = () => {
  // Framer Motion Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // const hoverScale = {
  //   hover: { scale: 1.05, transition: { duration: 0.2 } },
  // };

  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#513187] mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Have a question or want to work with us? Get in touch!
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-[#523683] font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-[#513187] font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[#513187] font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5} // ✅ Fixed: Pass a number, not a string
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#513187] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#715999] transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-bold text-[#523683] mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#523683] mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-600">
                  123 Tech Street, Innovation City, IC 12345
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#523683] mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#523683] mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-600">info@mertechsolution.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;