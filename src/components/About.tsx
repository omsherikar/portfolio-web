'use client'

import { motion } from 'framer-motion'
import TechStack from './TechStack'

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-gray-300 mb-8">
          <span className="text-[#64ffda]">01.</span> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div>
            <p className="text-gray-400 mb-4">
              Hello! I&apos;m a passionate software developer with a strong foundation in web development.
              I enjoy creating things that live on the internet, whether that be websites,
              applications, or anything in between.
            </p>
            <p className="text-gray-400">
              My goal is to always build products that provide pixel-perfect,
              performant experiences.
            </p>
          </div>
          <div className="relative">
            {/* Add your profile image or any other content here */}
          </div>
        </div>

        {/* Tech Stack Section */}
        <TechStack />
      </motion.div>
    </section>
  )
}

export default About 