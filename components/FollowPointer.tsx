"use client"
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";

const FollowPointer = () => {
    const { point, ref } = useFollowPointer();

  return (
    <div className=" pointer-events-none">
      <motion.div
        ref={ref}
        className="fixed h-4 w-4 lg:h-8 lg:w-8 ring-2 ring-gray-600 dark:ring-gray-100 rounded-full"
        animate={{ x: point.x, y: point.y }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          restDelta: 0.001,
        }}
      />
      <motion.div
        ref={ref}
        className="fixed h-4 w-4 lg:h-8 lg:w-8 bg-[#FABE2C] rounded-full"
        animate={{ x: point.x, y: point.y }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 300,
          restDelta: 0.001,
        }}
      />
    </div>
  )
}

export default FollowPointer