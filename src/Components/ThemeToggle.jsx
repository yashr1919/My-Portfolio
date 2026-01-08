import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from '@/lib/utils'

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // isDarkMode is a function that is right now false which means that is not active
  // setIsdarkMode is a function that will be used to change/alter that value (false value).

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme"); // this will save the theme from localstorage to storedTheme
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light"); // localstorate is used bcz if we are in light mode and refresh the page then after reload of the page it will still remain light and not change the theme to dark
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    // this function will check, if it is DarkMode then it will do something and if not then do something else
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light"); // localstorate is used bcz if we are in light mode and refresh the page then after reload of the page it will still remain light and not change the theme to dark

      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      //classList is used to access the list of classes in the document

      localStorage.setItem("theme", "dark"); // localstorate is used bcz if we are in dark mode and refresh the page then after reload of the page it will still remain dark and not change the theme to light

      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  ); // if isDarkMode is true then sun icon will so or else Moon icon will show
};
