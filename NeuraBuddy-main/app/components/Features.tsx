'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Clock, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { title: "Emotional Support", description: "Always here to listen and provide comfort.", icon: Heart },
  { title: "Intelligent Conversations", description: "Engage in meaningful dialogues on various topics.", icon: Brain },
  { title: "24/7 Availability", description: "Your companion is always awake and ready to chat.", icon: Clock },
  { title: "Privacy Focused", description: "Your conversations are private and secure.", icon: Shield },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-400">Why Choose NeuraBuddy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-amber-400 mb-4" />
                  <CardTitle className="text-teal-400">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

