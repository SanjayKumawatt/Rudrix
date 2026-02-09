import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Database, 
  Bot, 
  Maximize, 
  ShieldCheck, 
  ArrowRight,
  Layers 
} from 'lucide-react';

const focusPoints = [
  {
    text: "Cloud-based digital infrastructure",
    icon: Cloud,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    text: "Data-backed operational tools",
    icon: Database,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    text: "AI-assisted automation features (non-clinical)",
    icon: Bot,
    color: "text-rose-500",
    bg: "bg-rose-100 dark:bg-rose-900/30"
  },
  {
    text: "Scalable interfaces for growing institutions",
    icon: Maximize,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30"
  },
  {
    text: "Secure communication channels",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30"
  }
];

const DigitalFuture = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Designed for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Healthcare’s Digital Future
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                We focus on bridging the technological gap through:
              </p>

              {/* List Items */}
              <div className="space-y-6">
                {focusPoints.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon size={20} />
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10"
              >
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Know More
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Abstract Tech Visual (CSS Only) */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-violet-700 p-8 shadow-2xl"
            >
              {/* Decorative Circles/Grid Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
              
              {/* Floating Card inside Visual */}
              <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Layers size={24} className="text-white" />
                        </div>
                        <div>
                            <div className="h-2 w-24 bg-white/40 rounded mb-2"></div>
                            <div className="h-2 w-16 bg-white/20 rounded"></div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 w-full bg-white/10 rounded"></div>
                        <div className="h-2 w-full bg-white/10 rounded"></div>
                        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    </div>
                    <div className="mt-6 flex gap-3">
                         <div className="h-8 w-8 rounded-full bg-green-400/80"></div>
                         <div className="h-8 w-8 rounded-full bg-blue-400/80"></div>
                         <div className="h-8 w-8 rounded-full bg-purple-400/80"></div>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalFuture;