"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Features() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Feature */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Automatic zoom for engaging screen recordings
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Make your demos and tutorials easier to follow while grabbing more attention. 
            Especially on smaller screens.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Demo/Screenshot Area */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 border-2 border-gray-800">
              {/* Replace with your actual demo image/video */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <p className="text-lg">Demo Content Area</p>
              </div>
            </div>
            {/* Decorative gradient elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent opacity-30 blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-purple-500/10 to-transparent opacity-30 blur-3xl transform -rotate-12"></div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Automatic zoom",
    description: "To focus on the main action, Screen Studio automatically zooms in on actions you perform on your screen."
  },
  {
    title: "Export in vertical mode",
    description: "If you need to export your video for social media, Screen Studio will automatically adjust all the zooms for an optimal viewing experience."
  },
  {
    title: "Manual zoom",
    description: "You can also manually select important parts of your recording. Screen Studio will automatically animate all the zooms."
  },
  {
    title: "Easy editing",
    description: "Simply drag your zooms on the timeline. All the heavy lifting is done automatically. No manual work is required."
  }
]; 