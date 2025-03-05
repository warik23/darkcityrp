"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button className="text-white p-2 hover:bg-red-900/20 rounded-md transition-colors" onClick={toggleMenu}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (


        <div className="absolute top-20 right-0 w-max bg-black/80 rounded-lg shadow-lg shadow-red-900/20 border-t border-red-900/30 ">
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link, index) => (


              <motion.div key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index / 10,
                  ease: [0, 0.71, 0.2, 1.01],
                }}


                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  key={index}
                  href={link.href}
                  className="text-lg font-medium hover:text-red-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a
                href="https://discord.gg/pb2gGfGCND"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-800 w-max text-white px-4 py-2 rounded-md text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Discord
              </a>
            </motion.div>
          </div>
        </div>

      )}
    </div>
  )
}

