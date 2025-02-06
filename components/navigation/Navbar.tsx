"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { navLinks } from "@/constants/Data";
import { MenuBtnEmpty } from "@/constants/Icons";
import ThemeSwitcher from "./ThemeSwitcher";
//import Image from "next/image";

const Navbar = () => {
    
  // State to control the visibility of the navigation links
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Ref to the nav element to handle clicks outside the nav menu
  // Create a reference to store the <nav> element using React's `useRef` hook.
  // - Type: The `useRef` is typed to `HTMLElement | null` because it will hold a reference 
  //   to an HTML element (like the <div>) or `null` initially before the element is rendered.
  const divRef = useRef<HTMLDivElement | null>(null);

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
      (divRef.current && !divRef.current.contains(event.target as Node)) || 
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
    <nav className=" fixed top-0 right-0 left-0 z-30 px-4 lg:px-6 py-2.5 
      bg-gray-200 dark:bg-[#0D0C13] border-b border-[#100F14] "
    >
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Put Logo here */}
          {/* <Image
            src={"/creativa.png"}
            width={64}
            height={64}
            loading='lazy'
            alt={"Amelia Logo"}
          /> */}
          <span className="font-monument-grotesk text-xl lg:text-2xl font-normal text-gray-900 dark:text-white 
            leading-none self-center whitespace-nowrap"
          >
            Amelia Olufowobi
          </span>
        </Link>

        <div className="hidden md:flex">
          <span className="font-monument-grotesk text-xl lg:text-2xl font-normal text-gray-900 dark:text-white 
            self-center whitespace-nowrap"
          >
            Product Designer
          </span>
        </div>

        {/* ThemeSwitcher and Menu Btn */}
        <div className="flex justify-center items-center lg:space-x-3">

          <ThemeSwitcher/>

          <button type="button" 
            onClick={toggleNavLinks} 
            className="w-10 h-10 lg:w-[92px] lg:h-[92px]"
          >
            {showNavLinks ? 
              <MenuBtnEmpty className="text-gray-500 dark:text-white"/> 
              : <MenuBtnEmpty className="fill-gray-500 dark:fill-gray-200 text-gray-500"/>
            }
          </button>
        </div>

        {/* Links */}
        <div ref={divRef} 
          className={`w-full ${showNavLinks ? 'block' : 'hidden'} overflow-y-auto max-h-screen no-scrollbar`}
        >
          <NavLinks data={navLinks} toggleNavLinks={toggleNavLinks}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar