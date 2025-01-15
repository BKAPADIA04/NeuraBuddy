import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import ChatInterface from './components/ChatInterface'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <AnimatePresence>
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <ChatInterface />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

