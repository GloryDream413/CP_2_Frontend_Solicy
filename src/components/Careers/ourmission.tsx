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

const OurMission: FC = () => {
  return (
    <>
      <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 8, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
            <Grid item xs={12} md={8}>
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
                    }}
                  >

                    Our Mission
                  </Typography>
                </Box>
                <Box sx={{mt:2, mb: 4, width: { xs: '100%', md: '90%' } }}>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.4, fontSize: '26px' }}>
                    {
                      "We keep up with innovations and provide a wide range of services since the high demand for blockchain development services in the market. We grow exponentially, yet preserve the values that have driven us from the first day. We aim to inhale the benefits of blockchain and software technologies into our client's business ambitions."
                    }
                  </Typography>
                </Box>

              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ position: 'relative' }}>
              <Box sx={{ lineHeight: 0 }}>
                <Image src="/images/aboutus/ourmission.webp" width={800} height={800} alt="Hero img" />
              </Box>
            </Grid>
          </Grid>



        </Container>
      </Box>

    </>
  )
}

export default OurMission
