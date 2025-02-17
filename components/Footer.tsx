"use client"

import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";
import { ProfileType } from "@/types/profileTypes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {

  // State to store the profile data from Sanity.
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [copied, setCopied] = useState(false);

  // Fetch the profile data from Sanity on component mount.
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await client.fetch(profileQuery);
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data: ", error);
      }
    };

    fetchProfileData();
  }, []);

  // Use a default email if profileData or email is not available
  const emailToCopy = profileData?.emailContact?.email || "okemiolufowobi@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      setCopied(true);
      // Hide the notification after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <footer id="footer" className="relative bg-gray-200 dark:bg-night-blue border-t border-gray-600 dark:border-gray-100">
      <div className="py-8 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-12">
          <div className=" flex flex-col space-y-4 lg:space-y-10">
            <span className="font-monument-grotesk text-xl lg:text-7xl font-normal text-gray-900 dark:text-white"
            >
              Let&apos;s work together
            </span>

            <div className=" relative space-y-2 lg:space-y-3">
              <motion.button 
                whileHover={!copied ? { scale: 1.07 } : {}}
                whileTap={!copied ? { scale: 0.97 } : {}}
                onClick={handleCopy}
                disabled={copied}
                className="w-fit px-2 lg:px-4 lg:py-3 bg-green-950 rounded-[40px] focus:outline-none"
              >
                <span className="font-monument-grotesk text-xl lg:text-8xl font-normal text-[#C7FC56]">
                  {emailToCopy}
                </span>
              </motion.button>

              <div className="absolute left-0 right-0 top-full mt-2">
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}    // start slightly above
                      animate={{ opacity: 1, y: 0 }}       // slide down into view
                      exit={{ opacity: 0, y: -20 }}        // slide up out of view
                      transition={{ 
                        opacity: { duration: 0.6 },  // increased opacity duration
                        y: { duration: 0.3 }         // standard duration for y movement
                      }}
                    >
                      <span
                        className="font-monument-grotesk text-base lg:text-xl font-normal text-white dark:text-gray-900 
                        rounded-sm w-fit py-1 px-2 bg-[#0D0C13] dark:bg-[#d1d5db]"
                      >
                        Copied!
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom half */}
        <hr className=" my-6 lg:my-12 sm:mx-auto border-gray-600 dark:border-gray-100 " />

        <div className="max-w-screen-xl mx-auto px-4 lg:px-12">
          <div 
            className="sm:flex sm:items-center sm:justify-between space-y-2 sm:space-y-0 
            font-gT-WalsheimPro text-base lg:text-3xl font-normal text-gray-900 dark:text-white"
          >
            <div className="">
              Design Amelia Oluwakemi <br />
              <a href="https://github.com/igbokwe-chibueze" className=" hover:underline ">Development Igbokwe Chibueze</a>.
            </div>

            <div className="">
              © 2025 <a href="" className=" hover:underline ">Amelia Oluwakemi™</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer