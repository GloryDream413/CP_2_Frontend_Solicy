import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Button, Link } from '@mui/material';
// import { Link as ScrollLink } from 'react-scroll'
import { navigations, before_services } from './navigation.data'
import { useRouter } from 'next/router';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import NextLink from 'next/link';


import MyMenu from './haha';

const Navigation: FC = () => {

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div id='id_top'>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>


        {before_services.map(({ path: destination, label }) => (
          <NextLink
            href={destination}
            key={destination}>
            <Box
              // target="_blank"
              sx={{
                position: 'relative',
                color: '#ffffff',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 0, md: 3 },
                mb: { xs: 3, md: 0 },
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', md: 'inherit' },
                ...(destination === currentPath && {
                  textDecoration: 'underline',
                  textUnderlineOffset: '10px',
                }),

                '& > div': { display: 'none' },
                '&.current>div': { display: 'block' },
                '&:hover': {
                  '&>div': {
                    display: 'block',
                  },
                  textDecoration: 'underline',
                  textUnderlineOffset: '10px',
                },
              }}
            >
              {label}
            </Box>
          </NextLink>
        ))}

        <Box sx={{
          position: 'relative',
          color: '#ffffff',
          cursor: 'pointer',
          fontWeight: 600,
        }}>
          <MyMenu></MyMenu>
        </Box>

        {navigations.map(({ path: destination, label }) => (
          <NextLink
            href={destination}
            key={destination}>
            <Box
              component={Link}

              // target="_blank"
              sx={{
                position: 'relative',
                color: '#ffffff',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 0, md: 3 },
                mb: { xs: 3, md: 0 },
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', md: 'inherit' },
                ...(destination === currentPath && {
                  textDecoration: 'underline',
                  textUnderlineOffset: '10px',
                }),

                '& > div': { display: 'none' },
                '&.current>div': { display: 'block' },
                '&:hover': {
                  '&>div': {
                    display: 'block',
                  },
                  textDecoration: 'underline',
                  textUnderlineOffset: '10px',
                },
              }}
            >
              {label}
            </Box>
          </NextLink>
        ))}

      </Box>
    </div>
  )
}

export default Navigation
