import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import TextField from '@mui/material/TextField'
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
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import TelegramIcon from '@mui/icons-material/Telegram';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

import Image from 'next/image';

import { data } from './popular-course.data'
import { CourseCardItem } from '@/components/course'
import { resolve } from 'path'

import MyBot from './botChecker'



const HomeGetInTouch: FC = () => {


  return (
    <div id="id_touch">
      <Grid container direction='column' sx={{ backgroundColor: 'background.paper', pb: 8 }}>
        <Grid justifyContent='center'>
          <Typography variant="h1" sx={{ textAlign: 'center', mt: 8, mb: 8, fontSize: { xs: 30, md: 50 } }}>
            Get In Touch
          </Typography>
        </Grid>

        <Grid container direction='row' >
          <Grid item xs={12} md={1} sx={{ height: '800px', paddingRight: '20px' }}>
          </Grid>
          <Grid item container direction='column' xs={12} md={6} sx={{ width: '80%' }}>
            <Grid container direction='row'>

              <Grid item xs={12} md={6} sx={{ mb: 1, fontSize: '20px' }}>
                First name
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 1, fontSize: '20px' }}>
                Last name
              </Grid>

              <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                <TextField id="outlined-basic" sx={{ width: '90%' }} variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                <TextField id="outlined-basic" sx={{ width: '90%' }} variant="outlined" />
              </Grid>

              <Grid item xs={12} md={12} sx={{ mb: 1, fontSize: '20px' }}>
                Email address
              </Grid>
              <Grid item xs={12} md={12} sx={{ mb: 2 }}>
                <TextField id="outlined-basic" sx={{ width: '95%' }} variant="outlined" />
              </Grid>


              <Grid item xs={12} md={12} sx={{ mb: 1, fontSize: '20px' }}>
                Message
              </Grid>

              <Grid item xs={12} md={12} sx={{ mb: 1, fontSize: '20px' }}>
                <TextField
                  id="outlined-multiline-flexible"
                  label=""
                  multiline
                  rows={6}
                  sx={{ width: '95%', }}
                />
              </Grid>


              <Grid item xs={12} md={12} sx={{ mt: 2, mb: 2, fontSize: '20px' }}>
                Please choose your interest
              </Grid>

              <Grid item xs={12} md={6} sx={{ mb: 2, fontSize: '20px' }}>
                <FormControlLabel control={<Checkbox />} label="Software Development" />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2, fontSize: '20px' }}>
                <FormControlLabel control={<Checkbox />} label="Hire Remote Developers" />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2, fontSize: '20px' }}>
                <FormControlLabel control={<Checkbox />} label="Job Opportunity" />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2, fontSize: '20px' }}>
                <FormControlLabel control={<Checkbox />} label="Marketing Collaboration" />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2, fontSize: '20px' }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Blockchain Development" />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2, fontSize: '20px' }}>
                <FormControlLabel control={<Checkbox />} label="Other" />
              </Grid>

              <Grid item xs={12} md={6} sx={{ mt: 3, mb: 2, fontSize: '20px', background: 'white', border: '2px solid gray' }}>
                {/* <FormControlLabel sx={{ color: 'black' }} control={<Checkbox sx={{ border: '2px solid red' }} />} label="I am not a robot" /> */}
                <MyBot></MyBot>
              </Grid>

              <Grid item xs={12} md={6} >

              </Grid>

              <Grid item xs={12} md={12} sx={{ mb: 2, fontSize: '40px' }}>
                <Button sx={{
                  borderRadius: '4px',
                  border: '1px solid gray',

                  height: '60px',
                  width: '95%',
                  '&:hover': {
                    backgroundColor: '#0077B7',
                    boxShadow: '1px 0px gray',
                    color: 'white',
                  },
                  letterSpacing: '10px',
                  fontWeight: 'bold',
                  backgroundColor: 'custom_background.joincommunity',
                  color: 'text.secondary',
                }}
                  size="large" variant="outlined"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={1} sx={{ paddingRight: '20px' }}> </Grid>

          <Grid container direction="column" xs={12} md={3} sx={{ paddingRight: '20px' }}>
            <Grid item >
              <Box component="img"
                src="/images/getintouch.svg" width='100%' height='100%'
              >
              </Box>
            </Grid>

            <Grid container direction="row" alignItems='center' sx={{ mt: 8 }}>
              <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>
              <Typography sx={{ ml: 2, mr: 1, color: 'text.secondary', lineHeight: 1.6, fontSize: '18px', letterSpacing: '2px', textDecoration: 'underline' }}>
                contact@solicy.net
              </Typography>
              <ContentCopyOutlinedIcon sx={{
                width: '15px',
                '&:hover': {
                  pointer: 'cursor'
                }
              }} />
            </Grid>


            <Grid container direction='row' sx={{ mt: '400px', }}>
              <Grid item sx={{

                '&:hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.2)',
                  transition: 'all 1s',
                }
              }}>
                <Box sx={{ m: '20px', width: '70px', height: '70px', borderRadius: '50%', border: '3px solid #0088CC', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                  <TelegramIcon sx={{ fontSize: '50px' }} color='primary'></TelegramIcon>
                </Box>
              </Grid>


              <Grid item sx={{
                '&:hover': {
                  cursor: 'pointer', transform: 'scale(1.2)',
                  transition: 'all 1s',
                }
              }}>
                <Box sx={{ m: '20px', width: '70px', height: '70px', borderRadius: '50%', border: '3px solid #25D366', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                  <SettingsPhoneIcon sx={{ fontSize: '40px' }} color='success'></SettingsPhoneIcon>
                </Box>
              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeGetInTouch
