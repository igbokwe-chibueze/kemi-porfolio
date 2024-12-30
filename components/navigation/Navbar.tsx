"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { navLinks } from "@/constants/Data";
import { MenuBtnEmpty } from "@/constants/Icons";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    
  // State to control the visibility of the navigation links
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Ref to the nav element to handle clicks outside the navigation bar
  // Create a reference to store the <nav> element using React's `useRef` hook.
  // - Type: The `useRef` is typed to `HTMLElement | null` because it will hold a reference 
  //   to an HTML element (like the <nav>) or `null` initially before the element is rendered.
  const navRef = useRef<HTMLElement | null>(null);

  // Function to toggle the visibility of the navigation links
  const toggleNavLinks = () => {
    setShowNavLinks(prevShowNavLinks => !prevShowNavLinks);
  };

  // Function to handle clicks outside the navigation bar or pressing the Escape key
  // MouseEvent | KeyboardEvent: The function can handle both mouse and keyboard events, so we use a union type.
  const handleClickOutsideOrEscape = (event: MouseEvent | KeyboardEvent) => {
    // Check if the click is outside the nav element or if the Escape key is pressed
    // See notes/comments
    if (
      (navRef.current && !navRef.current.contains(event.target as Node)) || 
      (event instanceof KeyboardEvent && event.key === 'Escape')
    ) {
      setShowNavLinks(false); // Hide the navigation links
    }
  };

  // Use effect hook to add and clean up event listeners
  useEffect(() => {
    // Add event listeners for clicks and keydown events
    document.addEventListener('click', handleClickOutsideOrEscape, true);
    document.addEventListener('keydown', handleClickOutsideOrEscape, true);
    return () => {
      // Remove event listeners when the component is unmounted
      document.removeEventListener('click', handleClickOutsideOrEscape, true);
      document.removeEventListener('keydown', handleClickOutsideOrEscape, true);
    };
  }, []);

  return (
    <nav ref={navRef} className=" fixed top-0 right-0 left-0 z-30 px-4 lg:px-6 py-2.5 bg-[#0D0C13] dark:bg-red-700 border-b border-[#100F14] ">
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Put Logo here */}
          <span className="font-monument-grotesk text-2xl font-normal text-white 
            self-center whitespace-nowrap"
          >
            Amelia Olufowobi
          </span>
        </Link>

        <div>
          <span className="font-monument-grotesk text-2xl font-normal text-white 
            self-center whitespace-nowrap"
          >
            Product Designer
          </span>
        </div>

        {/* ThemeSwitcher and Menu Btn */}
        <div className="flex justify-center items-center space-x-3">

          <ThemeSwitcher/>

          <button type="button" 
            onClick={toggleNavLinks} 
            className="inline-flex items-center justify-center w-[92px] h-[92px]"
          >
            {showNavLinks ? <MenuBtnEmpty className="text-white hover:fill-slate-300"/> : <MenuBtnEmpty className="fill-white hover:fill-slate-300"/>}
          </button>
        </div>

        {/* Links */}
        <div className={`w-full ${showNavLinks ? 'block' : 'hidden'}`}>
          <NavLinks data={navLinks} toggleNavLinks={toggleNavLinks}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar