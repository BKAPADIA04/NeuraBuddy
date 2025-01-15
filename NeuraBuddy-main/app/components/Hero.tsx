'use client'

import { motion } from 'framer-motion'
import EruptingButtons from './EruptingButtons'

export default function Hero() {
  const title = "Your AI Companion: Always Here, Always Attentive"

  return (
    <section className="py-10 text-center bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-7xl md:text-6xl font-bold mb-6 text-teal-400 overflow-hidden">
  {title.split('').map((char, index) => (
    <motion.span
      key={`${char}-${index}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 3, // Increase duration for slower animation
        delay: index * 0.1, // Increase delay for each character
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Alternate animation direction
      }}
    >
      {char}
    </motion.span>
  ))}
</h1>

      <motion.p 
        className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Discover a world where AI becomes your closest confidant, offering understanding, support, and companionship tailored just for you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative z-10"
      >
        <EruptingButtons />
      </motion.div>
    </section>
  )
}

