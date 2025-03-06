'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#513187]">What Client Says</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mt-4"
          >
            Our clients feedback speaks volumes. Discover their stories of success,
            collaborations, and the impact of results we&apos;ve achieved together.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-md rounded-lg p-6 flex space-x-4 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image src="/user1.jpg" alt="Robert Fox" width={50} height={50} className="rounded-full" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-[#513187]">Robert Fox</h3>
              <p className="text-gray-500 text-sm">CEO at Digital Solutions</p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-gray-700 mt-2"
              >
                &quot;The digital marketing team transformed our online presence,
                delivering exceptional results with over 150% targeted ads.
                Highly recommend their professional approach.&quot;
              </motion.p>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-md rounded-lg p-6 flex space-x-4 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image src="/user2.jpg" alt="Leslie Alexander" width={50} height={50} className="rounded-full" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-[#513187]">Leslie Alexander</h3>
              <p className="text-gray-500 text-sm">Marketing Coordinator</p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-gray-700 mt-2"
              >
                &quot;We saw incredible growth thanks to their tailored digital
                marketing strategies. The teams&apos; expertise in SEO and social
                media has proven invaluable.&quot;
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}