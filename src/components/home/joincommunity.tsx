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

import { data } from './popular-course.data'
import { CourseCardItem } from '@/components/course'
import { resolve } from 'path'

const HomePopularCourse: FC = () => {


  return (
    <Grid container direction='column' sx={{ pb:8, backgroundColor: 'custom_background.ourserviceItem' }}>
      <Grid justifyContent='center'>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 8, fontSize: { xs: 30, md: 50 } }}>
          Join Community
        </Typography>
      </Grid>

      <Grid container direction='row' >


        <Grid item xs={12} md={6} sx={{ height: '400px', paddingRight: '20px' }}>
          <Box component="img"
            src="/images/joincommunity.svg" width='100%' height='400px'
          >
          </Box>
        </Grid>
        <Grid item container direction='column' xs={12} md={6} >
          <Grid item sx={{ mb: 4 }}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '18px' }}>
              Our social networks are for everyone who wants to be a part of the future, so don't hesitate about joining us!
            </Typography>
          </Grid>

          <Grid container direction='row'>

            {/* Twitter */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  backgroundColor: '#3FA9F5',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<TwitterIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Twitter
              </Button>
            </Grid>

            {/* Linkedin */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  backgroundColor: '#0077B7',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<LinkedInIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Linkedin
              </Button>
            </Grid>


            {/* Discord */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  backgroundColor: '#5865F2',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<SmartToyIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Discord
              </Button>
            </Grid>


            {/* Github */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  backgroundColor: '#000000',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<GitHubIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Github
              </Button>
            </Grid>


            {/* Instagram */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  background: 'linear-gradient(90deg,#7224c3 -2.03%,#c3246d 45.08%,#dc8d40 94.2%)',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<InstagramIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Instagram
              </Button>
            </Grid>


            {/* Youtube */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  backgroundColor: '#F61C0D',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<YouTubeIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Youtube
              </Button>
            </Grid>


            {/* Tiktok */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  backgroundColor: '#000000',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<MusicNoteIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Tiktok
              </Button>
            </Grid>


            {/* Facebook */}
            <Grid item xs={12} md={6}  sx = {{mb:4}}>
              <Button sx={{
                borderRadius: '4px',
                border : '1px solid gray',
                
                width: '80%',
                '&:hover': {
                  backgroundColor: '#0077B7',
                  boxShadow : '1px 0px gray',
                  color : 'white',
                },
                letterSpacing: '3px',
                fontWeight: 'bold',
                backgroundColor: 'custom_background.joincommunity',
                color: 'text.secondary'
              }}
                size="large" variant="outlined"
                startIcon={<FacebookIcon />}
                endIcon={<ArrowForwardIosIcon />}
              >
                Facebook
              </Button>
            </Grid>




          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePopularCourse
