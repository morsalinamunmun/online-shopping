// import React from 'react';

// const Footer = () => {
//     return (
//         <div>
//             Footer
//         </div>
//     );
// };

// export default Footer;

import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function ResponsiveFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company Name</h3>
            <p className="mb-4">We are dedicated to providing the best service to our customers.</p>
            <p className="mb-2">123 Main Street, City, Country 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@company.com</p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-300 transition duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300 transition duration-300">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition duration-300">
                <FaFacebookF size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-pink-500 transition duration-300">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-blue-700 transition duration-300">
                <FaLinkedinIn size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}