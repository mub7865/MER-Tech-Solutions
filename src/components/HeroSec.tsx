'use client'

import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';

const HeroSec = () => {
   
  return (
    <section className='pt-20'>
     
           {/* Hero Section */}
           <motion.section
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-center py-16 px-6"
           >
             <motion.h2
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-gray-400 text-sm tracking-widest"
             >
               MER Tech Solution
             </motion.h2>
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-4xl font-bold text-gray-900 mt-2"
             >
               Creative & Innovative Digital Solutions
             </motion.h1>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="mt-4 text-gray-600 max-w-2xl mx-auto"
             >
               We specialize in web development, digital marketing, and AI-powered solutions to help your business grow and thrive in the digital world.
             </motion.p>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="mt-6 space-x-4"
             >
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-[#513187] text-white px-6 py-3 rounded-lg">
                 Get in Touch
               </motion.button>
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-[#513187] hover:text-white transition-all">
                 Learn More
               </motion.button>
             </motion.div>
           </motion.section>
     
           {/* Hero Image */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 1 }}
             className="container mx-auto px-10 mt-6"
           >
             <Image
               src="/hero_image.png" // Tumhari image ka path
               alt="Boost Your Brand"
               width={1200}
               height={500}
               className="rounded-lg"
             />
           </motion.div>
      
    </section>
  )
}

export default HeroSec
