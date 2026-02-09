import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-20 pb-20">
      
      {/* Header */}
      <section className="bg-blue-50 dark:bg-gray-900 py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          >
            <Shield size={24} />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Last Updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300"
        >
          <p className="text-lg leading-relaxed">
            <strong>Rudrix MedTech Private Limited</strong> (“we”, “our”, “us”) is committed to protecting the privacy of its users. This Privacy Policy explains how we collect, store, use, and protect your data when you access our website, software, or digital services (“Platform”).
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
            <div className="pl-4 border-l-4 border-blue-500 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">1.1 Personal Information</h3>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Institution/organization details</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">1.2 Usage Information</h3>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Device data</li>
                  <li>IP address</li>
                  <li>Interaction logs</li>
                  <li>Performance statistics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">1.3 Optional Information</h3>
                <p>Data you voluntarily share such as profile information, uploaded files, or communication logs.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Provide platform features</li>
              <li>Improve system performance</li>
              <li>Enhance user experience</li>
              <li>Maintain security</li>
              <li>Send notifications and updates</li>
              <li>Respond to support queries</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Information Sharing</h2>
            <p className="mb-2">We do not sell personal information.</p>
            <p>Data may be shared only with:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Service providers assisting our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
            <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
              <Lock className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <p>We implement administrative, technical, and organizational safeguards to protect your information.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Cookies</h2>
            <p>Our platform may use cookies to enhance functionality and user experience.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
            <p>You may request:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Access to your data</li>
              <li>Correction of inaccuracies</li>
              <li>Deletion where applicable</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Children’s Privacy</h2>
            <p>Our services are not intended for individuals under the age required by local laws for educational or professional platforms.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Changes to This Policy</h2>
            <p>We may update this policy periodically. Updated versions will be posted on this page.</p>
          </section>

          {/* Section 9: CONTACT */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Contact</h2>
            <p className="mb-4">For questions regarding this Privacy Policy:</p>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <a href="mailto:privacy@rudrixmedtech.com" className="font-semibold text-blue-600 hover:underline">
                  privacy@rudrixmedtech.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1" size={20} />
                <p className="text-gray-700 dark:text-gray-300">
                  S-157, F/f, G.k.-i Near M Block Mkt, <br />
                  Greater Kailash, South Delhi, <br />
                  New Delhi, Delhi, India, 110048.
                </p>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;