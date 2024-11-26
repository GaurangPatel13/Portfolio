import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
