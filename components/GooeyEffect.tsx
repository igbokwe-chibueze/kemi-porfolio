'use client';

import React, { useState } from 'react';
import {AnimatePresence, motion } from 'framer-motion';
import { MenuIcon } from '@/constants/Icons';
import { sectionLinks } from '@/constants/Data';
import ScrollLink from './SmoothScroller/ScrollLink';

export default function GooeyEffect({stiffness= 90}) {
  const [isSeparated, setIsSeparated] = useState(false);

  const toggleSeparation = () => {
    setIsSeparated(!isSeparated);
  };

  return (
    <div className="fixed bottom-36 right-0 left-0 z-30 lg:hidden py-2.5 pointer-events-none">
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
              className="dark:fill-[#d1d5db]" 
              initial={{ y: 0, opacity: 0, scaleX: 0  }}
              animate={{ y: isSeparated ? -50 : 0, opacity: isSeparated ? 1 : 0, scaleX: 1  }}
              transition={{ type: 'spring', stiffness, damping: 20 }}
              style={{ transformOrigin: "left" }} 
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
            <MenuIcon className='text-white dark:text-gray-900'/>
          </button>

          {/* Mobile Container */}
          <AnimatePresence>
            {isSeparated && (
              <motion.div
                key="mobile-menu"
                className="absolute top-[70px] left-[20px] w-[280px] h-[60px] flex flex-col items-center justify-center 
                  rounded-2xl"
                initial={{ y: 0, opacity: 0, scaleX: 0  }}
                animate={{ y: -50, opacity: 1, scaleX: 1  }}
                exit={{ y: 0, opacity: 0, scaleX: 0  }}
                transition={{ type: 'spring', stiffness, damping: 20 }}
                style={{ transformOrigin: "left" }} 
              >
                <div className='flex flex-wrap justify-between items-center gap-4'>
                  {sectionLinks.map((link) => (
                    <div key={link.id} className='font-gT-WalsheimPro text-lg font-normal 
                        tracking-tight lg:leading-[50px]'>
                      <ScrollLink targetId={link.id} 
                        offset={-40} duration={700} smoothScroll={true} threshold={0.4}
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
}
