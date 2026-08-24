'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Resources: ['Blog', 'Help Center', 'Guidelines', 'Security'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'],
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.a
              href="#home"
              className="font-heading font-bold text-xl tracking-tight block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              CENTURION<span className="text-gold-500">DIAMOND</span>
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              100 facets. engineered to shine. The revolutionary diamond cut that unlocks extraordinary brilliance.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {['twitter', 'instagram', 'facebook'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Centurion Diamond. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed with precision. Crafted for brilliance.
          </p>
        </div>
      </div>
    </footer>
  )
}
