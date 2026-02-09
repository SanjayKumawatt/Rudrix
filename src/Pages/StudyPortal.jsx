import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  BrainCircuit, 
  Lock, 
  ArrowRight,
  Target
} from 'lucide-react';

const studyFeatures = [
  "Modular learning paths",
  "Practice question banks",
  "Analytics & progress graphs",
  "Question-wise explanations",
  "Performance monitoring"
];

const exams = [
  {
    name: "FMGE",
    fullName: "Foreign Medical Graduate Examination",
    flag: "🇮🇳",
    features: ["Chapter-wise practice", "10 free questions/month", "Difficulty-wise analytics"],
    color: "border-orange-500"
  },
  {
    name: "NEXT Exam",
    fullName: "National Exit Test",
    flag: "🇮🇳",
    features: ["Comprehensive syllabus mapping", "Topic completion tracking", "Strength & weakness insights"],
    color: "border-blue-500"
  },
  {
    name: "INICET",
    fullName: "Institute of National Importance CET",
    flag: "🇮🇳",
    features: ["Subject-level practice modules", "Timed sessions", "Detailed scoring patterns"],
    color: "border-green-500"
  },
  {
    name: "NEET PG",
    fullName: "National Eligibility cum Entrance Test",
    flag: "🇮🇳",
    features: ["High-yield practice bank", "Monthly progress reviews", "Attempt history reports"],
    color: "border-purple-500"
  },
  {
    name: "PLAB 1",
    fullName: "Professional and Linguistic Assessments Board",
    flag: "🇬🇧",
    features: ["Scenario-based question sets", "Topic-wise segmentation", "Difficulty progression"],
    color: "border-red-500"
  },
  {
    name: "USMLE Step 1",
    fullName: "United States Medical Licensing Examination",
    flag: "🇺🇸",
    features: ["Organ-systems-based learning", "Questions with reasoning", "Progress difficulty scaling"],
    color: "border-indigo-500"
  }
];

const StudyPortalPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-20 pb-20">
      
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 dark:opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 pt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm"
          >
            <BrainCircuit size={18} />
            Study Smart
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Rudrix Study Portal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Your Structured Medical Learning Companion
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            A dedicated digital space for medical students preparing for global examinations.
          </motion.p>

          {/* Features Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {studyFeatures.map((feature, index) => (
              <span key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium shadow-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={16} className="text-green-500" />
                {feature}
              </span>
            ))}
          </motion.div>
        </div>

        {/* 2. Exam Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {exams.map((exam, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className={`flex items-start justify-between mb-4 border-l-4 pl-4 ${exam.color}`}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    {exam.name} <span className="text-2xl">{exam.flag}</span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium tracking-wide text-transform: uppercase">{exam.fullName}</p>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-400 group-hover:text-blue-600 transition-colors">
                  <Target size={20} />
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {exam.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-blue-500 transition-colors" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Action Button (Redirects to Contact) */}
              <Link 
                to="/contact"
                className="block w-full py-3 text-center rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Start Practice
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 3. Upgrade Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 dark:from-blue-950 dark:via-gray-900 dark:to-black p-8 md:p-12 text-center text-white shadow-2xl"
        >
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-yellow-400">
              <Lock size={24} />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Access More with Upgrades
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Unlock full question banks, unlimited attempts, detailed analytics, and AI-assisted revision tools.
            </p>
            
            {/* View Plans Button (Redirects to Contact) */}
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-blue-950 transition-all shadow-lg transform hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default StudyPortalPage;