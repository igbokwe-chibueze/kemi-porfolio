"use client"

import { useState, useEffect, useRef } from "react";

const useNavbar = () => {

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

  return { showNavLinks, setShowNavLinks, toggleNavLinks, navRef }
}

export default useNavbar
