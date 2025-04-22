'use client'

import { motion } from 'framer-motion'

export default function Background() {
  // Predefined positions for consistent rendering
  const positions = [
    { left: '12%', top: '38%' },
    { left: '93%', top: '13%' },
    { left: '54%', top: '66%' },
    { left: '92%', top: '17%' },
    { left: '73%', top: '19%' },
    { left: '35%', top: '79%' },
    { left: '30%', top: '15%' },
    { left: '36%', top: '88%' },
    { left: '67%', top: '95%' },
    { left: '34%', top: '31%' },
    { left: '93%', top: '36%' },
    { left: '30%', top: '5%' },
    { left: '42%', top: '85%' },
    { left: '77%', top: '96%' },
    { left: '37%', top: '43%' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a192f]">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #64ffda 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, #64ffda 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #64ffda 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, #64ffda 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #64ffda 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="border-l border-r border-[#64ffda]/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>

        {/* Floating animated elements */}
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, #64ffda 0%, transparent 70%)",
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
} 