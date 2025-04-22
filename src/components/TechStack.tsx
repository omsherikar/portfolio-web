'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'VS Code', icon: '/tech/vscode.svg' },
  { name: 'Docker', icon: '/tech/docker.svg' },
  { name: 'Linux', icon: '/tech/linux.svg' },
  { name: 'GitHub', icon: '/tech/github.svg' }
]

// Predefined positions to ensure consistent rendering
const initialPositions = [
  { left: '21.68%', top: '29.42%', zIndex: -9 },
  { left: '45.12%', top: '15.78%', zIndex: -8 },
  { left: '68.45%', top: '29.42%', zIndex: -7 },
  { left: '78.91%', top: '52.15%', zIndex: -6 },
  { left: '68.45%', top: '74.88%', zIndex: -7 },
  { left: '45.12%', top: '88.52%', zIndex: -8 },
  { left: '21.68%', top: '74.88%', zIndex: -9 },
  { left: '11.22%', top: '52.15%', zIndex: -10 },
  { left: '35.12%', top: '42.15%', zIndex: -11 },
  { left: '55.12%', top: '62.15%', zIndex: -12 }
]

const TechStack = () => {
  return (
    <div className="relative h-[600px] w-full perspective-[1000px]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        <span className="text-white">Skills & </span>
        <span className="text-[#a78bfa]">Technologies</span>
      </motion.h2>
      
      <div className="relative w-full h-full">
        <motion.div 
          className="absolute inset-0"
          animate={{
            rotateZ: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {technologies.map((tech, index) => {
            const initialPosition = initialPositions[index]
            return (
              <motion.div
                key={tech.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: initialPosition.left,
                  top: initialPosition.top,
                  zIndex: initialPosition.zIndex
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="relative w-24 h-24 flex items-center justify-center group"
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="relative w-full h-full z-10">
                    <div className="absolute inset-0 animate-glow">
                      <div className="absolute inset-0 bg-[#a78bfa] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain p-2 drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]
                                filter brightness-150 contrast-125"
                      priority
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                              px-3 py-1 rounded-full opacity-0 transition-opacity duration-300
                              bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#a78bfa]/20
                              whitespace-nowrap z-50"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-sm text-white font-medium">
                      {tech.name}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes glow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default TechStack 