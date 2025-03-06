'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Cody Fisher", role: "Marketing Associate", image: "/team1.jpg" },
  { name: "Ronald Richards", role: "Copy Writer", image: "/team2.jpg" },
  { name: "Eleanor Pena", role: "Medical Assistant", image: "/team3.jpg" },
  { name: "Darrell Steward", role: "Web Designer", image: "/team4.jpg" },
  { name: "Cameron Williamson", role: "Marketing Coordinator", image: "/team5.jpg" },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-gray-50 py-16" id="team">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#513187]">Meet Our Team</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mt-2 max-w-2xl mx-auto"
          >
            Meet our team of passionate digital marketing experts, dedicated to crafting innovative solutions that fuel success.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10" ref={ref}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="text-center cursor-pointer"
            >
              {/* Team Member Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#513187]"
              >
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
              </motion.div>

              {/* Team Member Details */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="mt-4 text-lg font-semibold text-[#513187]"
              >
                {member.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                className="text-gray-500"
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}