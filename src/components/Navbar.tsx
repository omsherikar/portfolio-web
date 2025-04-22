'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide navbar when scrolling up
    if (latest > lastScrollY && latest > 150) { // Only hide after scrolling down 150px
      setHidden(true)
    } else {
      setHidden(false)
    }
    setLastScrollY(latest)

    // Add blur effect when scrolled
    setScrolled(latest > 10)
  })

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: hidden ? -100 : 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      className="fixed w-full z-50 top-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          <div className="relative">
            {/* Blur box background */}
            <motion.div
              className={`absolute -inset-x-8 -inset-y-4 backdrop-blur-2xl rounded-2xl transition-colors duration-300 ${
                scrolled ? 'bg-[#0a192f]/90' : 'bg-[#0a192f]/50'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Navigation items */}
            <div className="relative flex items-center space-x-8 px-6 py-2">
              <Link
                href="#about"
                className="text-gray-300 hover:text-[#64ffda] px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                About
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </Link>
              <Link
                href="#experience"
                className="text-gray-300 hover:text-[#64ffda] px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                Experience
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </Link>
              <Link
                href="#projects"
                className="text-gray-300 hover:text-[#64ffda] px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                Projects
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-[#64ffda] px-3 py-2 rounded-md text-sm font-medium relative group"
              >
                Contact
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 