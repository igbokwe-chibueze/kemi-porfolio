// MotionWrapper.tsx
"use client";

import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

import React from 'react'

const MotionWrapper = ({ children, className }: MotionWrapperProps) => {
  return (
    <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className={className}
    >
        {children}
    </motion.div>
  )
}

export default MotionWrapper