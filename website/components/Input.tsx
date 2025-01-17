'use client';

import { motion } from 'framer-motion';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
        <motion.div
          initial={false}
          animate={{ y: error ? -3 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <input
            ref={ref}
            className={`
              w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:bg-gray-100 dark:disabled:bg-gray-900
              ${error 
                ? 'border-red-500 dark:border-red-500' 
                : 'border-gray-300 dark:border-gray-600'
              }
              ${className}
            `}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${props.name}-error` : undefined}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 text-sm text-red-500 dark:text-red-400"
            id={`${props.name}-error`}
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 