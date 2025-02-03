'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SmileIcon } from '@/constants/Icons';
import { sectionLinks } from '@/constants/Data';
import ScrollLink from './SmoothScroller/ScrollLink';

const ScaleTest = ({ closeOnClickOutside = true }) => {
  const [isSeparated, setIsSeparated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the container for outside click detection

  const toggleSeparation = () => {
    setIsSeparated(!isSeparated);
  };

  // Close on outside click if the prop is true
  useEffect(() => {
    if (!closeOnClickOutside) return; // Exit early if the feature is disabled

    const handleClickOutside = (event: MouseEvent) => { // Explicitly typing the event
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsSeparated(false); // Close the component when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Listen for mouse clicks
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup listener on unmount
    };
  }, [closeOnClickOutside]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: -50,
      transition: {
        y: { delay: 0.3, duration: 2 },
        opacity: { delay: 0.8, duration: 2 },
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        y: { duration: 1 },       // Faster exit for the y property
        opacity: { duration: 0.5 }, // Faster exit for opacity
      },
    },
  };

  const mobileSquareVariants = {
    combined: {
      scaleX: 0,
      opacity: 0,
      y: 0,
      transition: {
        scaleX: { duration: 0.6, delay: 0.2 },
        opacity: { duration: 2, delay: 0.2 },
        y: { type: 'spring', stiffness: 90, damping: 20, delay: 0.2 },
      },
    },
    separated: {
      scaleX: 1,
      opacity: 1,
      y: -50,
      transition: {
        scaleX: { duration: 1 },
        opacity: { duration: 0.4 },
        y: { type: 'spring', stiffness: 90, damping: 20 },
      },
    },
  };

  return (
    <div className="fixed bottom-36 right-0 left-0 z-30 lg:hidden py-2.5 px-4 space-y-2 pointer-events-none" ref={containerRef}>
      <div className="relative">
        <svg
          width="600"
          height="200"
          viewBox="0 0 600 200"
          className="pointer-events-none"
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
            {/* Fixed Circle */}
            <rect x="20" y="100" width="40" height="40" fill="#0D0C13"
              className="dark:fill-[#d1d5db]" />

            {/* Mobile Square */}
            <motion.rect
              x="20"
              y="70"
              width="280"
              height="60"
              fill="#0D0C13"
              className="rounded-md"
              variants={mobileSquareVariants}
              initial="combined"
              animate={isSeparated ? "separated" : "combined"}
              style={{ originX: 0 }}
            />
          </g>
        </svg>

        <div className="absolute top-0 left-0 w-auto h-full z-10 pointer-events-auto">
          {/* Fixed Button */}
          <button
            className="absolute left-[20px] top-[100px] w-10 h-10 flex flex-col items-center justify-center 
            bg-transparent border-none cursor-pointer rounded-full p-1"
            onClick={toggleSeparation}
            aria-label={isSeparated ? 'Combine squares' : 'Separate squares'}
          >
            <SmileIcon className='text-white dark:text-gray-900' />
          </button>

          {/* Mobile Container */}
          <AnimatePresence>
            {isSeparated && (
              <motion.div
                key="mobile-menu"
                className="absolute top-[70px] left-[20px] w-[280px] h-[60px] flex flex-col items-center justify-center 
                  rounded-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex flex-wrap justify-between items-center gap-4">
                  {sectionLinks.map((link) => (
                    <div
                      key={link.id}
                      className="font-gT-WalsheimPro text-lg font-normal tracking-tight lg:leading-[50px]"
                    >
                      <ScrollLink
                        targetId={link.id}
                        offset={-40}
                        duration={700}
                        smoothScroll={true}
                        threshold={0.4}
                        className="text-white dark:text-gray-900"
                        activeClassName="text-blue-300 dark:text-red-600 transition-all duration-300"
                      >
                        <button>{link.name}</button>
                      </ScrollLink>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ScaleTest;
