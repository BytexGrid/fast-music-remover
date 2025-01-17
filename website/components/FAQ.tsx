'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-500 dark:text-gray-400"
        >
          <HiChevronDown className="w-6 h-6" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 dark:text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqData = [
  {
    question: "How does the music removal process work?",
    answer: "Our AI technology uses advanced machine learning algorithms to separate speech from background music. It analyzes the audio frequencies and patterns to identify and remove music while preserving the quality of speech and other important audio elements."
  },
  {
    question: "What file formats are supported?",
    answer: "We support most common audio and video formats including MP3, WAV, MP4, and MOV. You can also directly process YouTube videos by providing the URL."
  },
  {
    question: "Is there a file size limit?",
    answer: "Yes, the current file size limit is 500MB for uploads. For larger files, we recommend splitting them into smaller segments or using our API for batch processing."
  },
  {
    question: "How long does processing take?",
    answer: "Processing time depends on the file size and duration. Most files are processed within minutes. Longer videos may take up to 10-15 minutes to complete."
  },
  {
    question: "Can I use this for commercial purposes?",
    answer: "Yes, our tool can be used for both personal and commercial purposes. Please refer to our documentation for licensing details and API usage for commercial applications."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
} 