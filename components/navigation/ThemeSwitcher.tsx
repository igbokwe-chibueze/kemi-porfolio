
import { MoonIcon, SunIcon } from "@/constants/Icons";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Use local storage to remember the user's theme preference
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
          document.documentElement.classList.add("dark");
          setIsDarkMode(true);
        } else if (storedTheme === "light") {
          document.documentElement.classList.remove("dark");
          setIsDarkMode(false);
        } else {
          // Default to dark theme if no preference is stored
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
        className="btn-menu w-10 h-10 lg:w-16 lg:h-16"
        onClick={toggleTheme}
      >
        {isDarkMode ? <SunIcon/> : <MoonIcon/>}
      </button>      
    </div>
  )
}

export default ThemeSwitcher