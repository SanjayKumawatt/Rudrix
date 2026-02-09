import React from 'react';
import { Link } from 'react-router-dom'; // Link import kar liya
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-16 lg:pt-20 lg:pb-24">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* Welcome Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Welcome to Rudrix Medtech
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">
            RUDRIX MEDTECH
          </span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-2">
            Building the Digital Infrastructure of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600">
             Modern Healthcare
            </span>
          </span>
        </motion.h1>

        {/* Description Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10"
        >
          Rudrix MedTech is a technology-driven healthcare solutions provider focused on creating scalable digital tools for medical institutions, students, and healthcare organizations.
          <br className="hidden md:block mt-2" />
          Our software ecosystem is designed to simplify learning, digital operations, and collaboration in the medical sector.
        </motion.p>

        {/* Action Buttons (Ab ye Clickable Links hain) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Link 1: Explore Platform */}
          <Link 
            to="/products" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Link 2: Request a Demo */}
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold text-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            Request a Demo
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;