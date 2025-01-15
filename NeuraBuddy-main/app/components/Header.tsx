'use client';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="bg-black shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-teal-400">NeuraBuddy</Link>
        </motion.div>
        <div className="space-x-4">
          <Link href="#features" className="text-gray-300 hover:text-teal-400">Features</Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-teal-400">Testimonials</Link>
          <Button variant="outline" className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-black">Sign In</Button>
          <Button className="bg-amber-500 text-black hover:bg-amber-400">Get Started</Button>
        </div>
      </nav>
    </header>
  )
}

