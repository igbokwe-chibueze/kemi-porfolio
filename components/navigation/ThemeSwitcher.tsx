
import { MoonIcon, SunIcon } from "@/constants/Icons";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Use local storage to remember the user's theme preference
        const storedTheme = localStorage.getItem("theme");
        
        // Check for system's preferred theme
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
        } else if (storedTheme === "light") {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
        } else if (prefersDarkMode) {
        // Set theme based on system preference
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

  return (
    <div className="flex items-center">

      <button
        className="btn-menu inline-flex items-center justify-center w-16 h-16"
        onClick={toggleTheme}
      >
        {isDarkMode ? <SunIcon/> : <MoonIcon/>}
      </button>      
    </div>
  )
}

export default ThemeSwitcher