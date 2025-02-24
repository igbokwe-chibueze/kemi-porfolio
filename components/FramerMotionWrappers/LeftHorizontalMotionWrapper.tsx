"use client";

import { motion } from "framer-motion";

interface HorizontalWrapperProps {
  children: React.ReactNode;
  className?: string;
}


const LeftHorizontalMotionWrapper = ({ children, className }:HorizontalWrapperProps) => {
  return (
    <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className={className}
    >
        {children}
    </motion.div>
  )
}

export default LeftHorizontalMotionWrapper