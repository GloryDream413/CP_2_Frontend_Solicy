import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, radioClasses, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

import Image from 'next/image';

import { CourseCardItem } from '@/components/course'
import { resolve } from 'path'

import PublicIcon from '@mui/icons-material/Public';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import AnchorIcon from '@mui/icons-material/Anchor';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import HandymanIcon from '@mui/icons-material/Handyman';

const HomeOurValues: FC = () => {
  return (
    <>
      <Grid container direction='column' sx={{ backgroundColor: 'background.paper', pb: 8 }}>
        <Grid justifyContent='center'>
          <Typography variant="h1" sx={{ textAlign: 'center', mt: 8, mb: 8, fontSize: { xs: 30, md: 50 } }}>
            Join Our Team
          </Typography>
        </Grid>

        <Grid container direction='row' alignItems='center' justifyContent='center'>

          <Grid item container direction="column" justifyContent="space-between" sx={{
            width: '40%',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <Grid item container direction="column" alignItems="center" sx={{ mt: 2 }}>
              <Grid item>
                <PublicIcon sx={{ width: '50px', height: '50px' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
                  Full-Stack JS Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item>
                <Typography variant="h5" sx={{ '&:hover': { pointer: 'cursor' }, textDecoration: 'underline', my: 1, fontWeight: '200', fontSize: { xs: 10, md: 14 } }}>
                  Learn more ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item container direction="column" justifyContent="space-between" sx={{
            width: '40%',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <Grid item container direction="column" alignItems="center" sx={{ mt: 2 }}>
              <Grid item>
                <ClosedCaptionOffIcon sx={{ width: '50px', height: '50px' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
                  Solidity Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item>
                <Typography variant="h5" sx={{ '&:hover': { pointer: 'cursor' }, textDecoration: 'underline', my: 1, fontWeight: '200', fontSize: { xs: 10, md: 14 } }}>
                  Learn more ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item container direction="column" justifyContent="space-between" sx={{
            width: '40%',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <Grid item container direction="column" alignItems="center" sx={{ mt: 2 }}>
              <Grid item>
                <AnchorIcon sx={{ width: '50px', height: '50px' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
                  Solana Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item>
                <Typography variant="h5" sx={{ '&:hover': { pointer: 'cursor' }, textDecoration: 'underline', my: 1, fontWeight: '200', fontSize: { xs: 10, md: 14 } }}>
                  Learn more ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item container direction="column" justifyContent="space-between" sx={{
            width: '40%',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <Grid item container direction="column" alignItems="center" sx={{ mt: 2 }}>
              <Grid item>
                <BloodtypeIcon sx={{ width: '50px', height: '50px' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
                  Back End Node.js Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item>
                <Typography variant="h5" sx={{ '&:hover': { pointer: 'cursor' }, textDecoration: 'underline', my: 1, fontWeight: '200', fontSize: { xs: 10, md: 14 } }}>
                  Learn more ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item container direction="column" justifyContent="space-between" sx={{
            width: '40%',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <Grid item container direction="column" alignItems="center" sx={{ mt: 2 }}>
              <Grid item>
                <SettingsAccessibilityIcon sx={{ width: '50px', height: '50px' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
                  Android Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item>
                <Typography variant="h5" sx={{ '&:hover': { pointer: 'cursor' }, textDecoration: 'underline', my: 1, fontWeight: '200', fontSize: { xs: 10, md: 14 } }}>
                  Learn more ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item container direction="column" justifyContent="space-between" sx={{
            width: '40%',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',
          }}>
            <Grid item container direction="column" alignItems="center" sx={{ mt: 2 }}>
              <Grid item>
                <HandymanIcon sx={{ width: '50px', height: '50px' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
                  iOS Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item>
                <Typography variant="h5" sx={{ '&:hover': { pointer: 'cursor' }, textDecoration: 'underline', my: 1, fontWeight: '200', fontSize: { xs: 10, md: 14 } }}>
                  Learn more ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default HomeOurValues
