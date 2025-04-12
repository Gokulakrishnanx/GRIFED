"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SignInButton } from "../auth/SignInButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-3xl font-bold text-white">
                GRI<span className="text-blue-500">FED</span>
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Features
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              About
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Services
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Contact
            </Link>
            <SignInButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 