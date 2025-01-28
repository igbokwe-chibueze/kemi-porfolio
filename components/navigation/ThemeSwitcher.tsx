import { MoonIcon, SunIcon } from "@/constants/Icons";
import { useState, useEffect, useCallback } from "react";

const ThemeSwitcher = () => {
  // State to track whether the dark mode is enabled or not
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Helper function to set the theme (dark or light)
  const setTheme = useCallback((isDark: boolean) => {  // Explicitly typing 'isDark' as boolean
    // Toggle the "dark" class on the root element to switch between themes
    document.documentElement.classList.toggle("dark", isDark);

    // Store the theme preference in localStorage to persist across sessions
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update the local state to reflect the current theme
    setIsDarkMode(isDark);
  }, []);

  // Effect to initialize the theme based on localStorage or system preference
  useEffect(() => {
    // Check for a stored theme in localStorage
    const storedTheme = localStorage.getItem("theme");

    // If there's a stored theme, use it, otherwise check system preference
    const initialTheme = storedTheme
      ? storedTheme === "dark"  // If localStorage has "dark", set dark mode
      : window.matchMedia("(prefers-color-scheme: dark)").matches;  // Fallback to system preference

    // Apply the determined theme
    setTheme(initialTheme);
  }, [setTheme]);

  // Toggle the theme between dark and light when the user clicks the button
  const toggleTheme = () => {
    // Toggle the state between dark and light
    setTheme(!isDarkMode); // `!isDarkMode` switches the theme
  };

  return (
    <div className="flex items-center">
      {/* Button to toggle between light and dark mode */}
      <button className="btn-menu w-10 h-10 lg:w-16 lg:h-16" 
        onClick={toggleTheme}
      >
        {/* Display the appropriate icon based on the current theme */}
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
