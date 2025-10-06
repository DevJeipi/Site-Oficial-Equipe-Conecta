"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative cursor-pointer p-2 w-10 h-10 rounded-full transition-all duration-300
                 bg-gray-200 dark:bg-neutral
                 hover:bg-gray-300 dark:hover:bg-neutral/80
                 shadow-md dark:shadow-xl"
    >
      {/* Ícone do Sol */}
      <Sun
        className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      rotate-0 scale-100 transition-all duration-500
                      dark:-rotate-90 dark:scale-0 text-neutral"
      />

      {/* Ícone da Lua */}
      <Moon
        className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      rotate-90 scale-0 transition-all duration-500
                      dark:rotate-0 dark:scale-100 text-secondary"
      />
    </button>
  );
}
