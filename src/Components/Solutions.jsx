import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  School, 
  Hospital, 
  BookOpen, 
  Rocket, 
  ArrowRight, 
  Database, 
  Cpu, 
  LineChart, 
  Settings 
} from 'lucide-react';

const solutions = [
  {
    title: "Medical Colleges & Universities",
    desc: "Digital learning, assessments, attendance, workflow tools.",
    icon: School,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    title: "Hospitals & Clinics",
    desc: "Operational modules, scheduling, procurement dashboards.",
    icon: Hospital,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20"
  },
  {
    title: "Medical Students",
    desc: "Exam prep resources and performance tracking.",
    icon: BookOpen,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20"
  },
  {
    title: "Healthcare Startups & Innovators",
    desc: "Tools to collaborate, manage teams, and scale efficiently.",
    icon: Rocket,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20"
  }
];

const innovations = [
  { text: "Healthcare Data Digitization", icon: Database },
  { text: "AI in Medical Operations", icon: Cpu },
  { text: "Predictive Analytics", icon: LineChart },
  { text: "Low-cost Medical Workflow Automation", icon: Settings }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* PART 1: Solutions Grid */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Solutions for Every <span className="text-blue-600">Healthcare Segment</span>
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PART 2: Innovation Section (Highlighted Block) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gray-900 dark:bg-gray-800 text-white p-8 md:p-12 lg:p-16"
        >
          {/* Decorative Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Innovation That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Supports Growth
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We continuously explore advancement in:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {innovations.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-cyan-400">
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Button */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <Link 
                to="/products" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                View Products
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Solutions;