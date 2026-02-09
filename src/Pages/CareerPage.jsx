import React from 'react';
import { Link } from 'react-router-dom'; // Link import kiya
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  HeartPulse, 
  Palette, 
  BarChart3, 
  Settings, 
  ArrowRight,
  Mail,
  UserCheck
} from 'lucide-react';

const passions = [
  { text: "Health technology", icon: HeartPulse, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
  { text: "Software development", icon: Code, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { text: "UX for medical tools", icon: Palette, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
  { text: "Data analytics", icon: BarChart3, color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
  { text: "Healthcare operations", icon: Settings, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
];

const roles = [
  "Software Developers",
  "UI/UX Designers",
  "Product Management",
  "Sales & Marketing",
  "Support Engineering"
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          >
            <Briefcase size={24} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Rudrix MedTech</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are building digital tools for the next decade of healthcare.
          </motion.p>
        </div>
      </section>

      {/* 2. JOIN US IF YOU ARE PASSIONATE ABOUT */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Join Us If You Are Passionate About</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {passions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`p-4 rounded-xl flex-shrink-0 ${item.bg} ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {item.text}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURRENT ROLES & CTA */}
      <section className="py-20 bg-blue-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left: Roles List */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Current Roles</h2>
              <div className="space-y-4">
                {roles.map((role, index) => (
                  <Link
                    to="/contact" // Redirect to Contact Page
                    key={index}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-5 mb-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                          <UserCheck size={20} />
                        </div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                          {role}
                        </span>
                      </div>
                      <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Apply CTA Card */}
            <div className="w-full lg:w-1/2 sticky top-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-center"
              >
                {/* Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6 text-blue-400">
                    <Mail size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    If you believe you are a fit for any of these roles, we'd love to hear from you. Send us your resume and let's talk!
                  </p>
                  
                  {/* Button ab Contact Page par jayega */}
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all w-full justify-center"
                  >
                    <Mail size={20} />
                    Apply Now
                  </Link>
                  
                  <p className="mt-4 text-sm text-gray-400">
                    or email us at <span className="text-white font-medium">careers@rudrixmedtech.com</span>
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;