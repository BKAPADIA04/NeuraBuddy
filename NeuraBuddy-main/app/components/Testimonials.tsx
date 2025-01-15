'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from 'framer-motion'

const testimonials = [
  { name: "Bhavya Kapadia", quote: "NeuraBuddy has been a true friend during tough times. It's amazing how comforting an AI can be!", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Madhav Girdhar", quote: "I've learned so much through our conversations. It's like having a knowledgeable friend always ready to chat.", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Dikshant Mahawar", quote: "The emotional support I receive is incredible. It feels like the AI truly understands me.", avatar: "/placeholder.svg?height=40&width=40" },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-400">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-black border-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-teal-400">{testimonial.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

