import { useState } from "react";
import { motion } from "framer-motion";


const Gooey = () => {
    const [isCombined, setIsCombined] = useState(false);

    const handleClick = () => {
        setIsCombined(!isCombined);
    };
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Gooey Filter */}
      <svg className="absolute">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      0 0 0 20 -10"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      {/* Animated Container */}
      <div
        className="relative flex items-center justify-center w-96 h-96"
        style={{ filter: "url(#gooey)" }}
      >
            {/* Circle */}
            <motion.div
            className="w-20 h-20 bg-blue-500 rounded-full"
            animate={{
                x: isCombined ? 50 : -100,
                y: isCombined ? 50 : 0,
            }}
            transition={{ duration: 0.5 }}
            />
            {/* Square */}
            <motion.div
            className="w-20 h-20 bg-green-500"
            animate={{
                x: isCombined ? -50 : 100,
                y: isCombined ? -50 : 0,
            }}
            transition={{ duration: 0.5 }}
            />
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="px-6 py-3 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700"
      >
        {isCombined ? "Separate" : "Combine"}
      </button>
    </div>
  )
}

export default Gooey