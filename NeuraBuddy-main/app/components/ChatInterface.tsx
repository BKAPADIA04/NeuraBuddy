// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { motion } from 'framer-motion'

// export default function ChatInterface() {
//   const [messages, setMessages] = useState([
//     { role: 'ai', content: 'Hello! I\'m your AI companion. How can I help you today?' }
//   ])
//   const [input, setInput] = useState('')

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages([...messages, { role: 'user', content: input }])
//       setInput('')
//       // Here you would typically send the message to your AI backend and get a response
//       setTimeout(() => {
//         setMessages(prev => [...prev, { role: 'ai', content: 'I\'m here to listen and support you. Can you tell me more about how you\'re feeling?' }])
//       }, 1000)
//     }
//   }

//   return (
//     <section className="py-20 bg-black">
//       <div className="container mx-auto px-4">
//         <Card className="w-full max-w-2xl mx-auto bg-gray-900 border-gray-800">
//           <CardHeader>
//             <CardTitle className="text-teal-400">Chat with Your AI Companion</CardTitle>
//           </CardHeader>
//           <CardContent className="h-96 overflow-y-auto space-y-4">
//             {messages.map((message, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                   <div className={`flex items-start space-x-2 ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
//                     <Avatar>
//                       <AvatarImage src={message.role === 'ai' ? "/placeholder.svg?height=40&width=40" : undefined} />
//                       <AvatarFallback>{message.role === 'ai' ? 'AI' : 'You'}</AvatarFallback>
//                     </Avatar>
//                     <div className={`rounded-lg p-3 ${message.role === 'user' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-100'}`}>
//                       {message.content}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </CardContent>
//           <CardFooter>
//             <div className="flex w-full space-x-2">
//               <Input 
//                 value={input} 
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 className="bg-gray-800 text-gray-100 border-gray-700 focus:border-teal-400"
//               />
//               <Button onClick={handleSend} className="bg-amber-500 text-black hover:bg-amber-400">Send</Button>
//             </div>
//           </CardFooter>
//         </Card>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hello! I'm your AI companion. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // Video Conferencing state and refs
  const remoteVideoRef = useRef(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const startVideo = async () => {
    setIsVideoActive(true);
    // Simulate starting remote video stream
    // In a real implementation, you would connect to a remote peer here
  };

  const stopVideo = () => {
    setIsVideoActive(false);
    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content: "I'm here to listen and support you. Can you tell me more about how you're feeling?",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 space-y-10">
        {/* Chat Interface */}
        <Card className="w-full max-w-2xl mx-auto bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-teal-400">Chat with NeuraBuddy</CardTitle>
          </CardHeader>
          <CardContent className="h-96 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 ${
                      message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <Avatar>
                      <AvatarImage
                        src={message.role === "ai" ? "/placeholder.svg?height=40&width=40" : undefined}
                      />
                      <AvatarFallback>{message.role === "ai" ? "AI" : "You"}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user" ? "bg-amber-500 text-black" : "bg-gray-800 text-gray-100"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="bg-gray-800 text-gray-100 border-gray-700 focus:border-teal-400"
              />
              <Button onClick={handleSend} className="bg-amber-500 text-black hover:bg-amber-400">
                Send
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Video Conferencing Area */}
        {/*<Card className="w-full max-w-4xl mx-auto bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-teal-400">Video Conferencing</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <div className="w-full">
              <video
                ref={remoteVideoRef}
                autoPlay
                className="w-full h-96 bg-black rounded-lg"
              ></video>
              <p className="text-center text-gray-400 mt-2">Remote Video</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            {isVideoActive ? (
              <Button onClick={stopVideo} className="bg-red-500 text-white hover:bg-red-400">
                Stop Video
              </Button>
            ) : (
              <Button onClick={startVideo} className="bg-green-500 text-white hover:bg-green-400">
                Start Video
              </Button>
            )}
          </CardFooter>
        </Card>*/}
      </div>
    </section>
  );
}

