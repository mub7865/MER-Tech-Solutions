'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Stats data
  const stats = [
    { percentage: 90, label: "Client Retention" },
    { percentage: 56, label: "Budget Growth" },
    { percentage: 82, label: "ROI" },
    { percentage: 79, label: "Service Demand" },
    { percentage: 65, label: "Agency Growth" },
  ];

    // State to track clicked stat
  return (
    <section className="bg-[#FAFAF8] py-16 px-6" id="about">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-900"
        >
          About us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          At <strong className="text-[#513187]">MER Tech Solution</strong>, we specialize in innovative digital marketing strategies 
          that drive results. Our team is dedicated to helping businesses grow and succeed online.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 text-gray-600 max-w-2xl mx-auto"
        >
          With tailored solutions and a focus on real-time outcomes, we empower 
          brands to connect with their audience and achieve their goals in the digital landscape.
        </motion.p>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" ref={ref}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="text-center"
            >
              {/* Stat Bar */}
              <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${stat.percentage}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="absolute bottom-0 left-0 w-full bg-[#513187] rounded-lg"
                />
              </div>
              {/* Stat Text */}
              <p className="mt-2 text-xl font-bold text-gray-900">{stat.percentage}%</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}