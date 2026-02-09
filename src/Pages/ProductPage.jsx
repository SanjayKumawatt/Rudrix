import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Activity, 
  Users, 
  ShoppingBag, 
  MessageSquare, 
  BarChart3, 
  Code, 
  Headphones,
  CheckCircle2,
  ArrowRight,
  Server,
  FileText,
  Calendar
} from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6"
          >
            <Server size={24} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Products & <span className="text-blue-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A Complete Digital Software Ecosystem for the Healthcare Industry. <br />
            Rudrix MedTech develops modern, scalable, and secure digital solutions designed specifically for the operational, educational, and workflow needs of the healthcare sector.
          </motion.p>
        </div>
      </section>

      {/* 2. MAIN CONTENT - PRODUCTS LIST */}
      <div className="container mx-auto px-4 py-16 space-y-24">

        {/* --------------------------------------------------------
            SECTION 1: MEDICAL EDUCATION SOFTWARE SUITE
        --------------------------------------------------------- */}
        <ProductSection 
          title="Medical Education Software Suite (MES Suite)"
          desc="A complete digital platform to support medical learning, training, assessment, and institutional academic workflows."
          icon={GraduationCap}
          color="text-blue-600"
          bgColor="bg-blue-50 dark:bg-blue-900/10"
        >
          <ProductCard title="1.1 Learning Management System (LMS)" subTitle="A structured digital environment for delivering medical education.">
            <FeatureList title="Key Features" items={["Chapter-wise & module-based content structure", "Interactive learning interface", "Video lectures & document library upload", "Faculty dashboards", "Student performance analytics", "Learning path personalization"]} />
            <FeatureList title="Who Uses It" items={["Medical colleges", "Coaching institutions", "Universities", "E-learning platforms"]} />
          </ProductCard>

          <ProductCard title="1.2 Assessment & Exam Engine" subTitle="A powerful tool for conducting digital examinations and practice sessions.">
            <FeatureList title="Features" items={["MCQ-based exams", "Question bank creation", "Timed tests", "Automated scoring", "Progress reports", "Detailed performance breakdown"]} />
            <FeatureList title="Benefits" items={["Ideal for internal assessments", "Helps standardize testing systems", "Enables practice-based learning"]} />
          </ProductCard>

          <ProductCard title="1.3 Practice Question Bank Platform" subTitle="For students preparing for national and international medical exams.">
            <FeatureList title="Supported Exams" items={["FMGE", "NExT", "INICET", "NEET PG", "PLAB 1", "USMLE Step 1"]} />
            <FeatureList title="Included" items={["Topic-wise questions", "Difficulty-based filtering", "Attempt history", "Analytics dashboard"]} />
          </ProductCard>
        </ProductSection>


        {/* --------------------------------------------------------
            SECTION 2: HEALTHCARE ERP SYSTEM
        --------------------------------------------------------- */}
        <ProductSection 
          title="Healthcare ERP System (H-ERP)"
          desc="A modular, cloud-based digital backbone for hospitals & clinics to streamline daily operations."
          icon={Activity}
          color="text-emerald-600"
          bgColor="bg-emerald-50 dark:bg-emerald-900/10"
        >
          <ProductCard title="2.1 Inventory & Procurement Management" subTitle="A complete system to manage medical consumables, supplies, and equipment.">
            <FeatureList title="Features" items={["Stock tracking", "Supplier management", "Purchase orders", "Expiry alerts", "Automated notifications", "Real-time consumption reports"]} />
            <FeatureList title="Benefits" items={["Reduces wastage", "Prevents stockouts", "Ensures better financial control"]} />
          </ProductCard>

          <ProductCard title="2.2 Staff & Workforce Management (HRMS)" subTitle="A system designed for healthcare workforce operations.">
            <FeatureList title="Features" items={["Staff profiles", "Duty rosters", "Attendance tracking", "Shift scheduling", "Leave requests", "Role-based access"]} />
            <FeatureList title="Benefits" items={["Simplifies shift management", "Improves workforce planning"]} />
          </ProductCard>

          <ProductCard title="2.3 Finance & Billing Dashboard" subTitle="For internal financial tracking and operational management.">
            <FeatureList title="Features" items={["Daily revenue logs", "Expense tracking", "Department-wise costing", "Vendor payment logs"]} />
            <FeatureList title="Benefits" items={["Transparent financial monitoring", "Helps in monthly reporting"]} />
          </ProductCard>

          <ProductCard title="2.4 Department Workflow Manager" subTitle="Digitizes communication between internal teams.">
            <FeatureList title="Features" items={["Task assignment", "Workflow tracking", "Inter-department notifications", "File & document transfer"]} />
          </ProductCard>
        </ProductSection>


        {/* --------------------------------------------------------
            SECTION 3: PATIENT COORDINATION SUITE
        --------------------------------------------------------- */}
        <ProductSection 
          title="Patient Coordination Suite"
          desc="Software tools for organizing and managing patient-related workflows. (Operational only, non-clinical)."
          icon={Users}
          color="text-cyan-600"
          bgColor="bg-cyan-50 dark:bg-cyan-900/10"
        >
          <ProductCard title="3.1 Appointment & Scheduling Management" subTitle="A convenient software for organizing patient visits.">
            <FeatureList title="Features" items={["Calendar-based scheduling", "Queuing system", "SMS/email reminders", "Multi-department slots"]} />
            <FeatureList title="Benefits" items={["Reduced waiting times", "Better departmental organization"]} />
          </ProductCard>

          <ProductCard title="3.2 Digital Case File Repository" subTitle="A centralized storage system for documents and records.">
            <FeatureList title="Features" items={["Secure file uploads", "Patient visit logs", "Document categorization", "Access control"]} />
            <FeatureList title="Benefits" items={["Organized documentation", "Better record management"]} />
          </ProductCard>

          <ProductCard title="3.3 Referral & Coordination Tools" subTitle="Helps streamline communication across departments.">
            <FeatureList title="Features" items={["Digital referrals", "Inter-department chat", "Transfer logs", "Notes & attachments"]} />
          </ProductCard>
        </ProductSection>


        {/* --------------------------------------------------------
            SECTION 4: MEDICAL MARKETPLACE INTERFACE
        --------------------------------------------------------- */}
        <ProductSection 
          title="Medical Marketplace Interface"
          desc="A digital interface for medical sellers and institutional buyers."
          icon={ShoppingBag}
          color="text-orange-600"
          bgColor="bg-orange-50 dark:bg-orange-900/10"
        >
          <ProductCard title="4.1 Vendor Dashboard">
            <FeatureList items={["Product catalog management", "Pricing updates", "Order logs", "Buyer communication"]} />
          </ProductCard>
          <ProductCard title="4.2 Institutional Buyer Dashboard">
            <FeatureList items={["Browse product categories", "Request quotations", "Compare listings", "Track orders"]} />
          </ProductCard>
          <ProductCard title="4.3 Marketplace Management Tools">
            <FeatureList items={["Category filters", "Supplier verification workflow", "Order tracking system"]} />
          </ProductCard>
        </ProductSection>


        {/* --------------------------------------------------------
            SECTION 5: COLLABORATION TOOLS
        --------------------------------------------------------- */}
        <ProductSection 
          title="Collaboration & Communication Tools"
          desc="A secure environment for coordinated work across teams, students, faculty, and institutions."
          icon={MessageSquare}
          color="text-purple-600"
          bgColor="bg-purple-50 dark:bg-purple-900/10"
        >
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SimpleCard title="5.1 Groups & Communities" items={["Departments", "Institutions", "Student batches", "Research teams"]} />
              <SimpleCard title="5.2 Messaging Tools" items={["One-to-one chat", "Group chat", "File sharing", "Admin controls"]} />
              <SimpleCard title="5.3 Project & Task Boards" items={["Research projects", "Institutional tasks", "Collaborative assignments"]} />
           </div>
        </ProductSection>


        {/* --------------------------------------------------------
            SECTION 6: DATA & ANALYTICS
        --------------------------------------------------------- */}
        <ProductSection 
          title="Data & Analytics Solutions"
          desc="Transforming operational activities into meaningful insights."
          icon={BarChart3}
          color="text-pink-600"
          bgColor="bg-pink-50 dark:bg-pink-900/10"
        >
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SimpleCard title="6.1 Institution Dashboard" items={["Usage statistics", "Engagement reports", "Performance summaries"]} />
              <SimpleCard title="6.2 Student Performance" items={["Strength/weakness mapping", "Attempt history", "Difficulty curve graph"]} />
              <SimpleCard title="6.3 Operational Analytics" items={["Inventory consumption patterns", "Staff duty performance metrics", "Task completion logs"]} />
           </div>
        </ProductSection>


        {/* --------------------------------------------------------
            SECTION 7 & 8: CUSTOM DEV & SUPPORT
        --------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Dev */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 bg-gray-900 text-white rounded-2xl shadow-xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-600 rounded-lg"><Code size={24}/></div>
                    <h3 className="text-2xl font-bold">Custom Software Development</h3>
                </div>
                <p className="mb-6 text-gray-400">We provide custom solutions based on institutional requirements.</p>
                <ul className="space-y-3">
                    {["Institution-branded learning portals", "Operational workflow automation", "Custom dashboards", "Internal communication systems", "API integrations"].map((item, i)=>(
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-blue-500 mt-1"/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Support */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-lg"><Headphones size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Support & Managed Services</h3>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">Dedicated support to keep your operations running smoothly.</p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {["Onboarding & training", "Technical support", "Software updates", "Dedicated account managers", "Migration assistance"].map((item, i)=>(
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-green-500 mt-1"/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>

      </div>


      {/* 3. WHY CHOOSE US */}
      <section className="py-20 bg-blue-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Rudrix MedTech?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
                "Built specifically for healthcare & medical education",
                "Modular and customizable",
                "Scalable for small to large institutions",
                "Data-secure architecture",
                "Affordable and resource-efficient",
                "Continuous product improvement"
            ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                        <CheckCircle2 size={20} />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{text}</span>
                </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. CTA SECTION */}
      <section className="py-20 bg-white dark:bg-gray-950 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Interested in our services?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
                We offer demos, consultation calls, and tailored product bundles based on your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                    Request a Demo
                    <ArrowRight size={20} />
                </Link>
                <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
                >
                    Contact Sales
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const ProductSection = ({ title, desc, icon: Icon, color, bgColor, children }) => (
  <section className="scroll-mt-24">
    <div className="flex items-start gap-4 mb-8">
      <div className={`p-4 rounded-2xl ${bgColor} ${color}`}>
        <Icon size={32} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">{desc}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {children}
    </div>
  </section>
);

const ProductCard = ({ title, subTitle, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    {subTitle && <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{subTitle}</p>}
    <div className="space-y-6">
      {children}
    </div>
  </motion.div>
);

const FeatureList = ({ title, items }) => (
  <div>
    {title && <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-2">{title}</h4>}
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SimpleCard = ({ title, items }) => (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 size={14} className="text-purple-500"/>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default ProductsPage;