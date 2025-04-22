'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Project One',
    description: 'A web application built with React and Node.js that helps users manage their tasks efficiently.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with real-time inventory management and payment processing.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description: 'A social media dashboard with analytics and content management features.',
    technologies: ['React', 'Firebase', 'Chart.js', 'Material-UI'],
    github: '#',
    live: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-300 mb-8">
          <span className="text-[#64ffda]">03.</span> Some Things I've Built
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="absolute inset-0 bg-[#112240] rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-gray-300 mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="text-gray-400 hover:text-[#64ffda] transition-colors relative group/link"
                    whileHover={{ x: 5 }}
                  >
                    GitHub
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] group-hover/link:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                    />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="text-gray-400 hover:text-[#64ffda] transition-colors relative group/link"
                    whileHover={{ x: 5 }}
                  >
                    Live Demo
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] group-hover/link:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects 