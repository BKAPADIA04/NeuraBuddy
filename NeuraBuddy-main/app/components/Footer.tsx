import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-teal-400">NeuraBuddy</h3>
            <p className="text-gray-400">Your trusted AI companion, always here for you.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-teal-400">Features</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-teal-400">Testimonials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-teal-400">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-teal-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Connect With Us</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-teal-400">Twitter</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-teal-400">Facebook</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-teal-400">Instagram</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-teal-400">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 AICompanion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

