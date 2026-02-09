import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Lock, 
  Search, 
  Lightbulb, 
  Users,
  Building2
} from 'lucide-react';

const values = [
  {
    title: "Reliability",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    title: "Security",
    icon: Lock,
    color: "text-red-600",
    bg: "bg-red-50 dark:bg-red-900/20"
  },
  {
    title: "Transparency",
    icon: Search,
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-900/20"
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    color: "text-yellow-600",
    bg: "bg-yellow-50 dark:bg-yellow-900/20"
  },
  {
    title: "User-centric development",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-20">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          >
            <Building2 size={24} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Rudrix MedTech</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building the Digital Infrastructure of Modern Healthcare.
          </motion.p>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              <strong className="text-blue-600 dark:text-blue-400">Rudrix MedTech Private Limited</strong> is a healthcare technology company committed to building digital infrastructure for modern medical systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We focus on scalable and reliable software solutions that streamline medical workflows, learning, and communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-600 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  To simplify healthcare operations and education through innovative, accessible, and efficient software solutions.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 dark:bg-gray-800 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To create a connected medical ecosystem where institutions, students, and healthcare providers collaborate seamlessly through technology.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
              >
                <div className={`p-3 rounded-xl flex-shrink-0 ${val.bg} ${val.color}`}>
                  <val.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {val.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;