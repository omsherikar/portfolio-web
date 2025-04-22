'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Company Name',
    position: 'Software Engineer',
    period: '2022 - Present',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented CI/CD pipelines for automated testing and deployment',
      'Collaborated with cross-functional teams to deliver high-quality products',
    ],
  },
  {
    company: 'Previous Company',
    position: 'Junior Developer',
    period: '2020 - 2022',
    description: [
      'Built responsive web interfaces using modern JavaScript frameworks',
      'Optimized application performance and user experience',
      'Participated in code reviews and agile development processes',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-300 mb-8">
          <span className="text-[#64ffda]">02.</span> Where I've Worked
        </h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h3 className="text-xl font-bold text-gray-300">{exp.position}</h3>
                <span className="text-[#64ffda]">@ {exp.company}</span>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience 