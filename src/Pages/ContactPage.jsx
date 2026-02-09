import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  User, 
  ChevronDown 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: 'Request a Demo', // Default value set kar di hai
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Input Change Handle karna
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ye fake API call hai (Backend connect karne ke baad hata dena)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Form data reset nahi kiya taaki user ko uska naam dikha sakein
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-20 pb-20">
      
      {/* 1. Header Section */}
      <section className="relative py-12 bg-blue-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Contact <span className="text-blue-600">Us</span>
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are here to help. Reach out to us for any queries.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Contact Information */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Address Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Office Address</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                S-157, F/f, G.k.-i Near M Block Mkt,<br />
                Greater Kailash, South Delhi,<br />
                New Delhi, Delhi, India, 110048.
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Drop us a line at:</p>
              <a href="mailto:support@rudrixmedtech.in" className="text-lg font-semibold text-blue-600 hover:underline break-all">
                support@rudrixmedtech.in
              </a>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Interactive Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 relative overflow-hidden min-h-[500px]">
              
              <AnimatePresence mode='wait'>
                {isSubmitted ? (
                  /* --- SUCCESS STATE (No Alert) --- */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-gray-900 z-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
                      Thanks <strong>{formData.name}</strong>, we have received your request regarding <strong>"{formData.requestType}"</strong>.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* --- FORM STATE --- */
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Request Type Dropdown (Yeh raha wo special field) */}
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">I am interested in...</label>
                      <div className="relative">
                        <select 
                          name="requestType"
                          value={formData.requestType}
                          onChange={handleChange}
                          className="w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                        >
                          <option>Request a Demo</option>
                          <option>Sales Inquiry</option>
                          <option>Product Support</option>
                          <option>Applying for a Job</option>
                          <option>Partnership</option>
                          <option>General Query</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={18} />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <textarea 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;