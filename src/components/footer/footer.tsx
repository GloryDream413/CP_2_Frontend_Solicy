import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import { Logo } from '@/components/logo'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link as ScrollLink } from 'react-scroll'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'custom_background.topBanner', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                <Logo></Logo>
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
          <Grid item xs={12} md={1}>
            <ScrollLink to="hero" spy={true} smooth={true} offset={-150} duration={350}>

              <ExpandLessIcon sx={{ mr: '15px', '&:hover': { cursor: 'pointer' }, width: '40px', height: '40px', padding: '5px', background: 'white', borderRadius: '50%', m: '5px', color: 'black' }}></ExpandLessIcon>
            </ScrollLink>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: 'center', mt:4, letterSpacing : '2px' }}>
          © 2024 Solicy LLC. All rights reserved
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
