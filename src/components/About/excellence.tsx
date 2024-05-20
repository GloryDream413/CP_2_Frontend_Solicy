import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
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
    label: 'Years in industry',
    value: '2+',
  },
  {
    label: 'Projects successfully done',
    value: '100+',
  },
  {
    label: 'Employees',
    value: '70+',
  },
  {
    label: 'Ongoing Partners',
    value: '40+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <>
      <Box sx={{ width: '90%', textAlign: 'center', mb: { xs: 1, md: 0 } }} >
        <Typography
          sx={{ color: 'white', mb: { xs: 1, md: 2 }, fontSize: { xs: 40, md: 54 }, fontWeight: 'bold' }}
        >
          {value}
        </Typography>
        <Typography color="white" variant="h5">
          {label}
        </Typography>


      </Box>
      {label !== 'Ongoing Partners' ?
        <Divider orientation='vertical' sx={{ marginLeft: 'auto', marginRight: '10px', background: 'white' }}></Divider>
        : <></>}

    </>
  )
}

const Excellence: FC = () => {
  return (
    <>
      <Box id="hero" sx={{ pt:12,backgroundColor: 'custom_background.estimate', position: 'relative', pb: { xs: 16, md: 20 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>

            <Grid item xs={12} md={4} sx={{ position: 'relative' }}>
              <Box sx={{ lineHeight: 0 }}>
                <Image src="/images/aboutus/excellence.svg" width={800} height={800} alt="Hero img" />
              </Box>
            </Grid>

            <Grid item xs={12} md={1}></Grid>
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
                      fontSize: { xs: 25, md: 45 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                      color : 'white'
                    }}
                  >

                    Excellence Is What We Aim For

                  </Typography>
                </Box>
                <Box sx={{ mt: 4, mb: 0, width: { xs: '100%', md: '90%' } }}>
                  <Typography sx={{ color: 'white', lineHeight: 1.4, fontSize: '26px' }}>
                    {
                      "We fiercely climb the growth ladder to generate more value for the world. Solicy emphasizes employing the most advanced technologies to surpass any expectations our clients might have. To provide the highest quality services, we continue to learn, aspire, and achieve new professional milestones."
                    }
                  </Typography>
                </Box>

              </Box>
            </Grid>

          </Grid>



        </Container>
      </Box>

    </>
  )
}

export default Excellence
