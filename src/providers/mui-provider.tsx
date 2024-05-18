import React, { FC, ReactNode, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import Button from '@mui/material/Button'

import theme from '@/config/theme'

import lightTheme from '@/config/theme';
import darkTheme from '@/config/theme_dark';

interface Props {
  children: ReactNode
}

const MUIProvider: FC<Props> = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Button onClick={toggleTheme}
        sx = {{
          position : 'absolute',
          width : '60px',
          height : '60px',
          left : '24px',
          bottom : '24px',
          zIndex : '1000',
          background : isDarkMode ? '#ffffff' : '#041D4C',
          borderRadius : '50%',
          backgroundImage : 'url(https://ik.imagekit.io/2zlgs27bjo/public/icons/lamp-dark.svg)',
          backgroundSize : '50%',
          backgroundRepeat : 'no-repeat',
          backgroundPosition : 'center'
        }}>
        {/* {isDarkMode ? 'Toggle Dark Mode' : 'Light Mode'} */}
      </Button>
      {children}
    </ThemeProvider>
  )
}

export default MUIProvider
