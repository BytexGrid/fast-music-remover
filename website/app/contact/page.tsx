'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { HiMail, HiChat } from 'react-icons/hi';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or need support? We're here to help. Fill out the form below
            or reach out through our other channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Other Ways to Connect
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:support@fastmusicremover.com"
                  className="flex items-center space-x-3 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <HiMail className="w-6 h-6" />
                  <span>support@fastmusicremover.com</span>
                </a>
                <a
                  href="https://discord.gg/xje3PQTEYp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <HiChat className="w-6 h-6" />
                  <span>Join our Discord</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Response Time
              </h2>
              <p className="text-gray-800 dark:text-gray-300">
                We typically respond within 24 hours during business days. For faster
                support, consider joining our Discord community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 