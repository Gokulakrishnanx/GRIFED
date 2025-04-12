"use client";

import { motion } from "framer-motion";
import { StarBackground } from "./StarBackground";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <StarBackground />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-sm sm:text-base text-blue-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                Welcome to GRIFED
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Digital Excellence
                </span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400 mb-3 sm:mb-4">
                Innovate. Build. Grow.
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
                At GRIFED, we empower startups and businesses with cutting-edge technology solutions that drive success. Whether you need a stunning website, a scalable mobile app, smart AI integration, or tech consultation — we've got you covered.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-200 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all duration-200">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  title: "Website Development",
                  description: "Crafting fast, secure, and responsive websites tailored to your brand and goals.",
                  gradient: "from-blue-500 to-cyan-500",
                  emoji: "🔧"
                },
                {
                  title: "Mobile App Development",
                  description: "Designing powerful Android & iOS applications with seamless user experiences.",
                  gradient: "from-purple-500 to-pink-500",
                  emoji: "📱"
                },
                {
                  title: "AI & Automation",
                  description: "From chatbots to predictive analytics – we bring the power of AI to your business.",
                  gradient: "from-pink-500 to-rose-500",
                  emoji: "🤖"
                },
                {
                  title: "Tech & Business Growth",
                  description: "Strategic digital solutions and tech consultation to scale your business efficiently.",
                  gradient: "from-amber-500 to-orange-500",
                  emoji: "📈"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-102"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl bg-gradient-to-r ${service.gradient} transition-opacity duration-300`} />
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-xl sm:text-2xl">{service.emoji}</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
} 