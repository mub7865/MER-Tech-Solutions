'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-[#F7F4FC] text-[#2D1B5A] py-16 px-6" id="work">
      <div className="container mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#513187]">Our Work</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-gray-700"
          >
            Our work combines creativity and data-driven strategies to deliver impactful digital marketing solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 bg-[#513187] text-white px-6 py-2 rounded-lg hover:bg-[#432066]"
          >
            Show More →
          </motion.button>
        </motion.div>

        {/* Work Grid */}
        <div className="mt-12 space-y-8" ref={ref}>
          {workData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg cursor-pointer"
            >
              {/* Work Image */}
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                src={work.image}
                alt={work.title}
                className="w-full md:w-1/3 rounded-lg"
              />

              {/* Work Details */}
              <div className="flex-1">
                <p className="text-sm text-gray-500">{work.category}</p>
                <h3 className="text-lg font-bold text-[#513187]">{work.title}</h3>
                <p className="mt-2 text-gray-600">{work.description}</p>
              </div>

              {/* Work Stat */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="bg-[#D1B3FF] text-[#2D1B5A] px-3 py-1 rounded-full text-sm font-bold"
              >
                {work.stat}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Work Data Array
const workData = [
  { 
    category: "SEO Optimization",
    title: "TechCorp's Traffic Soars With SEO Optimization",
    description: "Boosting organic traffic with optimized content and keyword strategies.",
    stat: "+75",
    image: "work_img1.png"
  },
  { 
    category: "Social Media Management",
    title: "FashionWave's Engagement Soars With Creative Campaigns.",
    description: "Engaging social media strategies that maximize audience reach.",
    stat: "+50",
    image: "work_img2.png"
  },
  { 
    category: "Brand Strategy",
    title: "UrbanNest's Brand Revamp Boosts Recognition.",
    description: "Revolutionizing brand image with innovative marketing approaches.",
    stat: "+50",
    image: "work_img3.png"
  },
];