"use client";

import { motion } from "framer-motion";

interface TopMotionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const TopMotionWrapper = ({ children, className }: TopMotionWrapperProps) => {
  return (
    <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className={className}
    >
        {children}
    </motion.div>
  )
}

export default TopMotionWrapper