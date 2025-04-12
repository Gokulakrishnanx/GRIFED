"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Your Logo</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
            <li>
              <Link href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">About</Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 