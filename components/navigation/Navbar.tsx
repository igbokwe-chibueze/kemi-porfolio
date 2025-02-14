"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { MenuBtnEmpty } from "@/constants/Icons";
import ThemeSwitcher from "./ThemeSwitcher";
import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";

const Navbar = () => {
  // State to store the profile data from Sanity.
  const [profileData, setProfileData] = useState(null);
  
  // State to control the visibility of the navigation links.
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Ref for the container that holds the nav links.
  const divRef = useRef<HTMLDivElement | null>(null);

  // Toggle the visibility of the nav links.
  const toggleNavLinks = () => {
    setShowNavLinks((prev) => !prev);
  };

  // Handle clicks outside the nav or pressing the Escape key.
  const handleClickOutsideOrEscape = (event: MouseEvent | KeyboardEvent) => {
    if (
      (divRef.current && !divRef.current.contains(event.target as Node)) ||
      (event instanceof KeyboardEvent && event.key === "Escape")
    ) {
      setShowNavLinks(false);
    }
  };

  // Add event listeners for clicks and keydowns.
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideOrEscape, true);
    document.addEventListener("keydown", handleClickOutsideOrEscape, true);
    return () => {
      document.removeEventListener("click", handleClickOutsideOrEscape, true);
      document.removeEventListener("keydown", handleClickOutsideOrEscape, true);
    };
  }, []);

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

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-30 px-4 lg:px-6 py-2.5 
      bg-gray-200 dark:bg-[#0D0C13] border-b border-[#100F14]"
    >
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Logo image can be placed here */}
          <span
            className="font-monument-grotesk text-xl lg:text-2xl font-normal text-gray-900 dark:text-white 
            leading-none self-center whitespace-nowrap"
          >
            Amelia Olufowobi
          </span>
        </Link>

        <div className="hidden md:flex">
          <span
            className="font-monument-grotesk text-xl lg:text-2xl font-normal text-gray-900 dark:text-white 
            self-center whitespace-nowrap"
          >
            Product Designer
          </span>
        </div>

        {/* ThemeSwitcher and Menu Button */}
        <div className="flex justify-center items-center lg:space-x-3">
          <ThemeSwitcher />
          <button
            type="button"
            onClick={toggleNavLinks}
            className="w-10 h-10 lg:w-[92px] lg:h-[92px]"
          >
            {showNavLinks ? (
              <MenuBtnEmpty className="text-gray-500 dark:text-white" />
            ) : (
              <MenuBtnEmpty className="fill-gray-500 dark:fill-gray-200 text-gray-500" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          ref={divRef}
          className={`w-full ${
            showNavLinks ? "block" : "hidden"
          } overflow-y-auto max-h-screen no-scrollbar`}
        >
          {/* Only render NavLinks when profileData is available */}
          {profileData ? <NavLinks profile={profileData} toggleNavLinks={toggleNavLinks} /> : <p>Loading...</p>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
