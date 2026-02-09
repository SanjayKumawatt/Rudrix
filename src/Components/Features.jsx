import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Stethoscope,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    title: "Study Portal & Learning Engine",
    description: "Structured exam preparation, analytics, and smart learning tools.",
    icon: GraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    title: "Healthcare ERP Solutions",
    description: "Digital modules for inventory, procurement, HRMS, scheduling, compliance, and workflow integration.",
    icon: Building2,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    title: "Collaboration & Community Platform",
    description: "A secure communication space for medical institutions, professionals, and students.",
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20"
  },
  {
    title: "Medical Supplies Marketplace",
    description: "A curated interface connecting medical suppliers and institutional buyers.",
    icon: ShoppingBag,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20"
  },
  {
    title: "Data-driven Analytics",
    description: "Institution-level dashboards, usage insights, and performance reports.",
    icon: BarChart3,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20"
  },
  {
    title: "Patient Coordination Tools",
    description: "Appointment tracking, patient workflow management, and secure record management.",
    icon: Stethoscope,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            A Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Digital Ecosystem</span> for Healthcare
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Our platform integrates essential medical and operational tools into one connected environment.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                <feature.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Checkmark (Optional visual flair) */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-green-500">
                <CheckCircle2 size={20} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;