import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from './useDarkMode';

const ThemeToggle = () => {
  const [isDark, toggle] = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
