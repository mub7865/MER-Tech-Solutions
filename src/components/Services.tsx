'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-[#1E132E] text-white py-16 px-6" id="services">
      <div className="container mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#D1B3FF]">Our Services</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-gray-300"
          >
            Our digital marketing services boost your online presence with SEO, social media, and targeted ads.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 bg-[#513187] text-white px-6 py-2 rounded-lg hover:bg-[#432066]"
          >
            Schedule Discussion →
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2A1C47] p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-[#513187] p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#D1B3FF]">{service.title}</h3>
              </div>
              <p className="mt-3 text-gray-400">{service.description}</p>
              <button className="mt-4 text-[#D1B3FF] hover:text-white">
                Schedule Discussion →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Data Array
const services = [
  { title: "Web & App Development", description: "Custom websites & applications tailored to your needs.", icon: "💻" },
  { title: "Social Media Marketing", description: "Grow your brand with strategic social media campaigns.", icon: "📱" },
  { title: "Email Marketing", description: "Engage your audience with targeted email campaigns.", icon: "📧" },
  { title: "Search Engine Marketing", description: "Improve visibility & rankings with expert SEO strategies.", icon: "🔍" },
  { title: "Creative & Content", description: "Compelling content creation for all digital platforms.", icon: "✍️" },
  { title: "Digital Advertising & PPC", description: "Maximize ROI with targeted online ad campaigns.", icon: "📈" },
];