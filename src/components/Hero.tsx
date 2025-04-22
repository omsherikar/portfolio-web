'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-300 mb-4">
            Hi, I'm <span className="text-[#64ffda]">Your Name</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-400 mb-8">
            I build things for the web.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="inline-block bg-transparent border-2 border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-md hover:bg-[#64ffda]/10 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 