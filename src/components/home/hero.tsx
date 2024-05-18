import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <>
      <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', py: 16, pb: { xs: 16, md: 20 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    component="h2"
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 20, md: 36 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >

                    Fluent in Development
                  </Typography>
                </Box>
                <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 , fontSize : '20px', wordWrap:'break-word'}}>
                    {
                      "We provide flexible and intuitive web3, software, and blockchain solutions"
                    }
                  </Typography>
                </Box>
                <Box sx={{ '& button': { mr: 2 } }}>

                  <Button sx={{
                    background: 'primary.main',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor:'primary.main',
                      transform:'scale(1.05)',
                      transition: 'all 0.5s',
                    }
                  }}
                    size="large" variant="contained" startIcon={<TelegramIcon />}>
                    Get in touch
                  </Button>

                  <Button sx={{
                    background: 'white',
                    borderRadius: '10px',
                    '&:hover': {
                      color:'white',
                      transform:'scale(1.05)',
                      transition: 'all 0.5s',
                    }
                  }}
                    size="large" variant="outlined" startIcon={<PhoneIcon />}>
                    Schedule a call
                  </Button>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
              {/* Sertificate badge */}

              <Box sx={{ lineHeight: 0 }}>
                <Image src="/images/home_1_fluent.webp" width={775} height={787} alt="Hero img" />
              </Box>
            </Grid>
          </Grid>



        </Container>
      </Box>

      <Box sx={{
        boxShadow: 2,
        backgroundColor: 'custom_background.estimate',
        py : 8
      }}>
        <Grid container spacing={2}>
          {exps.map((item) => (
            <Grid key={item.value} item xs={12} md={4}>
              <ExpItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default HomeHero
