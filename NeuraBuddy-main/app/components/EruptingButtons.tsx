'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const buttons = [
        { id: 1, text: "Emotional Support Specialist", href: "/", color: "from-blue-500 to-blue-600" },
        { id: 2, text: "AI-Powered Conflict Resolution Advisor", href: "/", color: "from-purple-500 to-purple-600" },
        { id: 3, text: "Relationship Counseling Expert", href: "/", color: "from-green-500 to-green-600" },
        { id: 4, text: "Licensed Mental Health Therapist", href: "/", color: "from-red-500 to-red-600" },
        { id: 5, text: "Certified Motivational Coach", href: "/", color: "from-yellow-500 to-yellow-600" },
]

export default function EruptingButtons() {
  const [isHovering, setIsHovering] = useState(false);
  

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Button 
        size="lg" 
        className="text-lg px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl z-10 relative"
      >
        Meet Your Companion
      </Button>
      <AnimatePresence>
        {isHovering && (
          <motion.div 
            className="relative top-full mt-6 -translate-x-1/2 w-[600px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <svg className="absolute top-0 left-1/2 -mt-3 -ml-3 h-6 w-6 text-amber-500 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            </svg>
            <div className=" bg-black bg-opacity-70 rounded-lg shadow-2xl p-6 relative flex flex-wrap justify-center gap-4">
              {buttons.map((button, index) => (
                <motion.div
                  key={button.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-[cal c(50%-0.5rem)]"
                >
                  <Link href={button.href} passHref>
                    <Button 
                      variant="outline" 
                      className={`w-full h-full py-3 bg-gradient-to-r ${button.color} text-white border-transparent hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg text-sm`}
                    >
                      {button.text}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

