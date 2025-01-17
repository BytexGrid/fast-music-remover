'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import { ButtonHTMLAttributes } from 'react';

type BaseButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">>;

interface ButtonProps extends BaseButtonProps {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  isLoading = false,
  loadingText = 'Loading...',
  className = '',
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400',
    secondary: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-300 dark:disabled:bg-gray-600'
  };

  return (
    <motion.button
      type={type}
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...(props as HTMLMotionProps<"button">)}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" className="mr-2" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
} 