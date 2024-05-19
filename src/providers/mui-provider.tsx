import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

import typography from '@/config/theme/typography'
import paletteBase from '@/config/theme/palette-base'
import paletteLight from '@/config/theme/palette-light'
import paletteDark from '@/config/theme/palette-dark'
import shadows from '@/config/theme/shadows'

import React, { FC, ReactNode, useState, useEffect, useContext, createContext } from 'react'
import { ThemeProvider } from '@mui/material'
import Button from '@mui/material/Button'
import { useTheme } from 'next-themes';

// default
const createTheme = (darkMode?: boolean): Theme => {
  const palette = darkMode ? { ...paletteBase, ...paletteDark } : { ...paletteBase, ...paletteLight }
  return createMuiTheme({
    palette,
    typography,
    shadows,
  })
}

const lightTheme = createTheme(false)
const darkTheme = createTheme(true)

interface Props {
  children: ReactNode
}

const MUIProvider: FC<Props> = ({ children }) => {
  const { setTheme, theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setTheme(!isDarkMode ? 'dark' : 'light');
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', (!isDarkMode) ? 'dark' : 'light');

    console.log("It was set to ::: ", (!isDarkMode) ? 'dark' : 'light')
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Button onClick={toggleTheme}
        sx={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          left: '24px',
          bottom: '24px',
          zIndex: '1000',
          background: isDarkMode ? '#ffffff' : '#041D4C',
          borderRadius: '50%',
          backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/icons/lamp-dark.svg)',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          '&:hover': {
            transition: 'all 0.5s',
            transform: 'scale(1.1)',
            backgroundColor: isDarkMode ? '#ffffff' : '#041D4C',
          }
        }}>
        {/* {isDarkMode ? 'Dark' : 'Light'} */}
      </Button>
      {children}
    </ThemeProvider>
  )
}

export default MUIProvider
