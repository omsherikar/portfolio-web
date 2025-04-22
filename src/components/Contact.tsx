'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully!')
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        toast.error(data.message || 'Something went wrong!')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const inputClasses = (fieldName: string) => `
    w-full bg-[#112240]/30 border-2 rounded-lg px-4 py-3 
    text-gray-300 placeholder-gray-500
    backdrop-blur-md
    transition-all duration-300
    ${focusedField === fieldName 
      ? 'border-[#64ffda] shadow-[0_0_15px_rgba(100,255,218,0.15)]' 
      : 'border-gray-700/50 hover:border-gray-600'
    }
    focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_20px_rgba(100,255,218,0.2)]
  `

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-300 mb-4"
          >
            <span className="text-[#64ffda]">04.</span> Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glassmorphism card effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#64ffda]/5 to-transparent rounded-2xl" />
          <div className="absolute inset-0 backdrop-blur-xl bg-[#112240]/10 rounded-2xl" />
          
          <form onSubmit={handleSubmit} className="relative space-y-6 p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <label htmlFor="name" className="block text-[#64ffda] mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('name')}
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <label htmlFor="email" className="block text-[#64ffda] mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('email')}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <label htmlFor="message" className="block text-[#64ffda] mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={5}
                className={inputClasses('message')}
                placeholder="Your message here..."
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex justify-center pt-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 20px rgba(100,255,218,0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="
                  relative group overflow-hidden
                  bg-transparent border-2 border-[#64ffda] text-[#64ffda]
                  px-8 py-3 rounded-lg font-medium text-lg
                  transition-all duration-300
                  hover:text-[#0a192f]
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact 