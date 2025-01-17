'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Breadcrumb"
    >
      <motion.div variants={itemVariants}>
        <Link
          href="/"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Home
        </Link>
      </motion.div>

      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;
        const title = path.charAt(0).toUpperCase() + path.slice(1);

        return (
          <motion.div
            key={path}
            className="flex items-center space-x-2"
            variants={itemVariants}
          >
            <HiChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="font-medium text-gray-900 dark:text-white">
                {title}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {title}
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.nav>
  );
} 