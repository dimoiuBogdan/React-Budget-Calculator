import React, { useState, useEffect } from "react";

export default function DarkModeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    toggleDarkMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkMode = () => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setIsDarkMode((prevValue) => !prevValue);
  };

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="text-4xl absolute top-2 right-5 focus:outline-none"
      >
        {isDarkMode ? (
          <i className="far fa-sun text-indigo-400"></i>
        ) : (
          <i className="fas fa-moon text-yellow-400"></i>
        )}
      </button>
    </div>
  );
}
