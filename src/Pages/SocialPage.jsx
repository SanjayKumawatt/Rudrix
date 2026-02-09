import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Building2, 
  Share2, 
  Library, 
  PenSquare, 
  Hash, 
  Globe,
  Heart,
  MessageCircle,
  Send
} from 'lucide-react';

const features = [
  {
    text: "Create posts, share insights, and collaborate",
    icon: Share2,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    text: "Topic-based discussions",
    icon: Hash,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    text: "Institution groups and communication channels",
    icon: Building2,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
  },
  {
    text: "Messaging & networking options",
    icon: MessageSquare,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    text: "Resource libraries and announcements",
    icon: Library,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
  }
];

const SocialNetworkPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pt-20">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm"
            >
              <Globe size={18} />
              Global Medical Community
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Rudrix <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Healthcare Community
              </span> Network
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              A professional network designed for healthcare learners, institutions, startups, and service providers.
            </motion.p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
                >
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon size={20} />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Mock Social UI Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative max-w-md mx-auto">
              {/* Fake Post Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* User Info */}
                <div className="p-4 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">DR</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">Dr. Ananya Sharma</h4>
                    <p className="text-xs text-gray-500">Cardiologist • 2h ago</p>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Just reviewed the latest research on non-invasive cardiac imaging. The AI integration in diagnostics is truly a game changer! 🩺💙 #MedTech #Cardiology
                  </p>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 mb-3">
                    <Users size={32} />
                  </div>
                  {/* Actions */}
                  <div className="flex justify-between text-gray-500 dark:text-gray-400 pt-2">
                    <div className="flex gap-4">
                      <Heart size={20} className="hover:text-red-500 cursor-pointer" />
                      <MessageCircle size={20} className="hover:text-blue-500 cursor-pointer" />
                      <Share2 size={20} className="hover:text-green-500 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements behind card */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 dark:bg-white rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-gray-900 mb-4">
              Engage, Share, Collaborate
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-600 mb-10 max-w-2xl mx-auto">
              Build meaningful connections within the healthcare ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              

              {/* Button 3: Explore Discussions */}
              <Link 
                to="/contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-gray-600 dark:border-gray-300 text-gray-300 dark:text-gray-900 rounded-xl font-bold transition-all hover:bg-gray-800 dark:hover:bg-gray-100"
              >
                <Hash size={20} />
                Explore Discussions
              </Link>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SocialNetworkPage;