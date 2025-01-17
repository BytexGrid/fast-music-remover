'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            error={errors.name}
            disabled={isSubmitting}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            error={errors.email}
            disabled={isSubmitting}
          />
        </div>
        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          error={errors.subject}
          disabled={isSubmitting}
        />
        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
          error={errors.message}
          disabled={isSubmitting}
        />
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingText="Sending..."
            disabled={isSubmitting}
          >
            Send Message
          </Button>
          <AnimatePresence mode="wait">
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-sm ${
                  submitStatus === 'success' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {submitStatus === 'success' 
                  ? 'Message sent successfully!' 
                  : 'Failed to send message. Please try again.'}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
} 