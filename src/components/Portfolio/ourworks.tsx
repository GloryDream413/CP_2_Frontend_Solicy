import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, radioClasses, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

import VisibilityIcon from '@mui/icons-material/Visibility';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FacebookIcon from '@mui/icons-material/Facebook';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Image from 'next/image';

import { CourseCardItem } from '@/components/course'
import { resolve } from 'path'

const OurWorks: FC = () => {

  return (
    <Grid container direction='column' sx={{ pb: 8, backgroundColor: 'background.paper' }}>
      <Grid justifyContent='center'>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 8, fontSize: { xs: 30, md: 50 } }}>
          Our Works
        </Typography>
      </Grid>

      <Grid container direction="row" spacing={2} justifyContent='center' sx={{ width: '90%', ml: '5%', mb: 4 }}>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="contained" color="primary">All</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="outlined" color="secondary">Blockchain</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="contained" color="error">Business Automation</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="outlined" color="primary">Community Management</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="contained" color="secondary">Delivery</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="outlined" color="error">Electronics</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="contained" color="primary">Environmental Services</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="outlined" color="secondary">Finance</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="contained" color="error">HR</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="outlined" color="primary">KYC</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="contained" color="secondary">SaaS</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="outlined" color="error">Smart Parking</Button> </Grid>
        <Grid item><Button sx={{ mb: 2, '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }} variant="contained" color="success">Social Media</Button> </Grid>
      </Grid>
      <Grid container direction='row' >
        <Grid item xs={12} md={6} sx={{ maxHeight: '20px', paddingRight: '20px' }}>
          <Box component="img"
            src="/images/portfolio/youmeme.webp" width='100%' height='300px'
            sx={{ padding: '10px' }}
          >
          </Box>
        </Grid>
        <Grid item container direction='column' xs={12} md={5} >
          <Grid item sx={{ mb: 2 }}>
            <Typography variant="h1" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: 30, md: 50 } }}>
              YOUMEME
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '18px' }}>
              YouMeme is a state-of-the-art social network designed to deliver joy on demand. Enjoy the latest and funniest memes in the form of images, GIFs, and videos! The platform includes a native meme & GIF editor, special events, a reward system based on a Meme-To-Earn model, a next-gen NFT marketplace, and much more!

            </Typography>
          </Grid>

          <Grid container direction="row" sx={{ maxWidth :'400px', minHeight: '30px', px: '20px', py: '1px', background: '#fefefe',border : '1px solid gray', borderRadius: '50px', width: '80%' }} alignItems='center'>
            <Grid item >
              <Typography variant="h5" sx={{ color : 'black', textAlign: 'center', mr: 4, fontSize: { xs: 12, md: 16 } }}>
                Tech Stack :
              </Typography>
            </Grid>
            <Grid item sx={{ mr: 2 , mt : 1}}>
              <Image src="https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100"
                width='100%' height='30px' ></Image>
            </Grid>
            <Grid item sx={{ mr: 'auto' , mt : 1}}>
              <Image src="	https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100"
                width='100%' height='30px' ></Image>
            </Grid>

            <Grid item></Grid>
          </Grid>

          <Grid container direction='row'>
            {/* Twitter */}
            <Grid item xs={12} md={6} sx={{ mb: 4 }}>
              <Button sx={{
                borderRadius: '4px',
                border: '1px solid gray',

                width: '100%',
                '&:hover': {
                  backgroundColor: '#3FA9F5',
                  boxShadow: '1px 0px gray',
                  color: 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary',
                mt:4
              }}
                size="large" variant="outlined"
                startIcon={<VisibilityIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                View Project
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OurWorks
