"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
// Removed unused Layout import

const PageTransition = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default PageTransition;
