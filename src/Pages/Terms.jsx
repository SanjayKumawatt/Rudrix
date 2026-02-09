import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, Mail, MapPin } from 'lucide-react';

const TermsConditions = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-20 pb-20">
      
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <FileText size={24} />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            Terms & Conditions
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
            By accessing or using the <strong>Rudrix MedTech Platform</strong>, you agree to these Terms & Conditions. If you do not agree, please discontinue use.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Use of the Platform</h2>
            <p>You may use our platform for lawful purposes only. You agree not to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Misuse or disrupt system operations</li>
              <li>Upload harmful or unauthorized content</li>
              <li>Attempt unauthorized access</li>
              <li>Reproduce or distribute proprietary materials</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Accounts & Responsibilities</h2>
            <p>When creating an account, you agree to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain confidentiality of login credentials</li>
              <li>Take responsibility for activities under your account</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Intellectual Property</h2>
            <p>All software, graphics, content, and designs are owned by <strong>Rudrix MedTech</strong>.</p>
            <p className="mt-2 text-red-500 font-medium">Unauthorized copying or distribution is prohibited.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Service Modifications</h2>
            <p>We reserve the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Update features</li>
              <li>Modify or discontinue services</li>
              <li>Conduct maintenance</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 p-4 rounded-r-xl mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Our platform provides non-clinical software tools and does not replace professional medical judgement.
                </p>
              </div>
            </div>
            <p>We are not liable for:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Service interruptions</li>
              <li>Data loss caused by external factors</li>
              <li>User-generated content</li>
              <li>Misuse of the platform</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Suspension or Termination</h2>
            <p>We may suspend or terminate accounts that violate these terms.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Governing Law</h2>
            <div className="flex items-center gap-3">
              <Scale size={20} className="text-gray-500" />
              <p>These terms are governed by the laws applicable in <strong>India</strong>.</p>
            </div>
          </section>

          {/* Section 8: CONTACT */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Contact</h2>
            <p className="mb-4">For any queries regarding these Terms:</p>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <a href="mailto:legal@rudrixmedtech.com" className="font-semibold text-blue-600 hover:underline">
                  legal@rudrixmedtech.com
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

export default TermsConditions;