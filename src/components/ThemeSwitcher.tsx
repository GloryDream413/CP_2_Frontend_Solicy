import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import lightTheme from '@/config/theme';
import darkTheme from '@/config/theme_dark';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;