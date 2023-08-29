import React, { useState } from 'react';
import "./Darkmode.css"
export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    
  };

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`} >
      <button onClick={toggleDarkMode}>Switch Mode </button>
    </div>
  );
};


