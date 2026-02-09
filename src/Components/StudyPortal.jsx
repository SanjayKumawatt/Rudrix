import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
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

const StudyPortal = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm"
          >
            <BrainCircuit size={18} />
            Study Smart
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Rudrix Study Portal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Your Structured Medical Learning Companion
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A dedicated digital space for medical students preparing for global examinations.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {studyFeatures.map((feature, index) => (
              <span key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium shadow-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={16} className="text-green-500" />
                {feature}
              </span>
            ))}
          </div>
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
              className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className={`flex items-start justify-between mb-4 border-l-4 pl-4 ${exam.color}`}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    {exam.name} <span className="text-2xl">{exam.flag}</span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exam.fullName}</p>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-400 group-hover:text-blue-600 transition-colors">
                  <Target size={20} />
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 min-h-[100px]">
                {exam.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-blue-500 transition-colors" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Link 
                to={`/contact`}
                className="block w-full py-3 text-center border-2 border-gray-200 dark:border-gray-700 rounded-xl font-bold text-gray-700 dark:text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Start Practice
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudyPortal;