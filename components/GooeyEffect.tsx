'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HandIcon, SmileIcon } from '@/constants/Icons';

export default function GooeyEffect() {
  const [isSeparated, setIsSeparated] = useState(false);

  const toggleSeparation = () => {
    setIsSeparated(!isSeparated);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="relative w-[300px] h-[200px] mb-4">
        <svg
          width="300"
          height="200"
          viewBox="0 0 300 200"
          className="absolute top-0 left-0"
          aria-hidden="true"
        >
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="gooey"
              />
            </filter>
          </defs>
          <g filter="url(#gooey)">
            {/* Fixed Square */}
            <rect x="60" y="60" width="80" height="80" fill="black" />
            {/* Mobile Square */}
            <motion.rect
              x="60"
              y="60"
              width="80"
              height="80"
              fill="black"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: isSeparated ? 100 : 0, opacity: isSeparated ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            />
          </g>
        </svg>
        
        <div className="absolute top-0 left-0 w-full h-full z-10">
          {/* Fixed Button */}
          <button
            className="absolute top-[60px] left-[60px] w-[80px] h-[80px] flex flex-col items-center justify-center 
            bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:ring-opacity-50 rounded-lg"
            onClick={toggleSeparation}
            aria-label={isSeparated ? 'Combine squares' : 'Separate squares'}
          >
            <SmileIcon className="text-white" size={40} />
            <span className="text-gray-200 font-bold mt-1 text-xs">Fixed</span>
          </button>
          {/* Mobile Icon */}
          <motion.div
            className="absolute top-[60px] left-[60px] w-[80px] h-[80px] flex flex-col items-center justify-center 
            pointer-events-none"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: isSeparated ? 100 : 0, opacity: isSeparated ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <HandIcon className="text-white" size={40} />
            <span className="text-gray-200 font-bold mt-1 text-xs">Mobile</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
