import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeFeature: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'custom_background.estimate' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/home-about.svg" width={650} height={678} quality={97} alt="Feature img" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1.8,
                fontWeight: 'bold',
                color : 'white',
              }}
            >
              About Solicy
            </Typography>

            <Typography sx={{ color: 'white', fontSize: '24px', mb: 2, ml: { xs: 0, md: 4 } }}>
              Solicy is a fast-growing company providing Blockchain and Software solutions to customers from around the globe. Due to the high demand for Blockchain development services in the market, we keep up with innovations and provide a wide range of services.
            </Typography>
            <Button sx={{
              background: 'white',
              borderRadius: '10px',
              width : '200px',
              height: '50px',
              boxShadow: '0px 1px gray',
              ml: { xs: 0, md: 4 },
              '&:hover' : {
                background: 'white',
              },
              letterSpacing : '3px',
              fontWeight : 'bold'
            }}
              size="large" variant="outlined" >
              See More
            </Button>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature
