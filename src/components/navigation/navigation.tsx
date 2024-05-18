import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link } from '@mui/material';
// import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'
import { useRouter } from 'next/router';

const Navigation: FC = () => {

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={Link}
          href={destination}
          key={destination}
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
          {/* <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box> */}

          {label}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
