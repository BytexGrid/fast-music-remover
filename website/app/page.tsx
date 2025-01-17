'use client';

import Image from "next/image";
import AnimateInView from "@/components/AnimateInView";
import { motion } from "framer-motion";
import { 
  HiOutlineMusicNote, 
  HiOutlineAdjustments, 
  HiOutlineDocumentDuplicate 
} from "react-icons/hi";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-[85vh]">
        {/* Hero Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative px-4 sm:px-6 lg:px-8 flex min-h-[85vh] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center pt-20 pb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8"
          >
            <Image
                src="/logo.png"
                alt="Fast Music Remover Logo"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">
                Fast Music Remover
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-xl sm:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-light"
            >
              Take control of your media content. Remove background music while preserving speech, enhance audio quality, and process your content with state-of-the-art AI technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/docs/getting-started"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-lg font-semibold text-white shadow-lg hover:shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/examples#demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-lg font-semibold text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-gray-800/20 transition-all duration-200"
                >
                  View Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative blur circles */}
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl opacity-30 dark:opacity-20" />
        </div>
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2">
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl opacity-30 dark:opacity-20" />
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful tools to enhance your audio content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <HiOutlineMusicNote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Intelligent Music Removal
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced AI technology that precisely removes background music while preserving speech and important audio elements.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <HiOutlineAdjustments className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Noise Reduction
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enhanced audio quality with sophisticated noise reduction algorithms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 mb-6 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <HiOutlineDocumentDuplicate className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Multiple Format Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Process various audio and video formats, including YouTube URLs and local files.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Three simple steps to enhance your audio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <div className="absolute top-8 left-[60%] hidden md:block w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 dark:from-blue-400/0 dark:via-blue-400/30 dark:to-blue-400/0" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Upload Media
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Submit a YouTube URL or upload your audio/video file
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <div className="absolute top-8 left-[60%] hidden md:block w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 dark:from-purple-400/0 dark:via-purple-400/30 dark:to-purple-400/0" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Process
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI processes your content to remove music and enhance quality
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Download
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get your processed media with clean, enhanced audio
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <FAQ />
          </AnimateInView>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 mb-8">
              Be part of our growing community of developers and users.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/omeryusufyagci/fast-music-remover"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/xje3PQTEYp"
                className="flex items-center gap-2 bg-[#7289DA] hover:bg-[#677BC4] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
                Discord
              </motion.a>
            </div>
          </AnimateInView>
    </div>
      </section>
    </main>
  );
}
