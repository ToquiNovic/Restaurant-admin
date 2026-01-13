"use client";

import { useTheme } from "@/context/ThemeContext";
import { Toggle } from "@/components/ui/toggle";
import { Sun, Moon } from "lucide-react";

export const ThemeTogglerTwo: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      className="
        bg-secondary
        rounded-full size-14
        hover:bg-muted hover:text-primary
        focus:ring-2 focus:ring-ring focus:ring-offset-2
        transition-all duration-300 ease-out
      "
    >
      {theme === "dark" ? (
        <Sun className="size-5 transition-transform duration-300 ease-out rotate-0 scale-100 dark:rotate-180 dark:scale-125" />
      ) : (
        <Moon className="size-5 transition-transform duration-300 ease-out rotate-0 scale-100 dark:rotate-180 dark:scale-125" />
      )}
    </Toggle>
  );
};
