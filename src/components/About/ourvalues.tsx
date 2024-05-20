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

const HomeOurValues: FC = () => {
  return (
    <Grid container direction='column' sx={{ backgroundColor: 'background.paper' , pb : 8}}>
      <Grid justifyContent='center'>
        <Typography variant="h1" sx={{ textAlign: 'center', mt: 8, mb: 8, fontSize: { xs: 30, md: 50 } }}>
          Our Values
        </Typography>
      </Grid>

      <Grid container direction='row' alignItems='center' justifyContent='center'>

        <Grid item container direction="column"
          justifyContent='center'
          sx={{
            width: '40%',
            minHeight: '350px',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              // backgroundColor: 'custom_background.ourserviceItemHover',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',

          }}>
          <Grid item xs={12} md={12}>
            <Image src="https://ik.imagekit.io/2zlgs27bjo/public/icons/quality-dark.svg?tr=w-41,q-100"
              width="44px" height="44px"
            >

            </Image>
            <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
              Quality
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ my: 1, fontWeight: '200', fontSize: { xs: 14, md: 20 } }}>
              Our primary focus goes on providing high-quality
              services. We take the best technological
              advancement has to offer to build effective
              solutions.
            </Typography>
          </Grid>
        </Grid>


        {/* Fast delivery */}
        <Grid item container direction="column"
          justifyContent='center'
          sx={{
            width: '40%',
            minHeight: '350px',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              // backgroundColor: 'custom_background.ourserviceItemHover',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',

          }}>
          <Grid item xs={12} md={12}>
            <Image src="https://ik.imagekit.io/2zlgs27bjo/public/icons/clock-dark.svg?tr=w-41,q-100"
              width="44px" height="44px"
            >

            </Image>
            <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
              Fast delivery
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ my: 1, fontWeight: '200', fontSize: { xs: 14, md: 20 } }}>
              We know a thing or two about fast delivery. We
              solve even the most complex issues in a
              comparably short time.
            </Typography>
          </Grid>
        </Grid>


        {/* Enthusiasm */}
        <Grid item container direction="column"
          justifyContent='center'
          sx={{
            width: '40%',
            minHeight: '350px',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              // backgroundColor: 'custom_background.ourserviceItemHover',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',

          }}>
          <Grid item xs={12} md={12} >
            <Image src="https://ik.imagekit.io/2zlgs27bjo/public/icons/lamp-dark.svg?tr=w-41,q-100"
              width="44px" height="44px"
            >

            </Image>
            <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
              Enthusiasm
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ my: 1, fontWeight: '200', fontSize: { xs: 14, md: 20 } }}>
              Oh, we enjoy our work; every second of it brings
              us joy. Perhaps that’s why we are good at what we
              do. Too many times we pray for ease, but there's a prayer seldom met.
            </Typography>
          </Grid>
        </Grid>


        {/* People */}
        <Grid item container direction="column"
          justifyContent='center'
          sx={{
            width: '40%',
            minHeight: '350px',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              // backgroundColor: 'custom_background.ourserviceItemHover',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',

          }}>
          <Grid item xs={12} md={12}>
            <Image src="https://ik.imagekit.io/2zlgs27bjo/public/icons/person-dark.svg?tr=w-41,q-100"
              width="44px" height="44px"
            >

            </Image>
            <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
              People
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ my: 1, fontWeight: '200', fontSize: { xs: 14, md: 20 } }}>
              We care about people: not just our clients, but all
              of the stakeholders a project might have. We put
              people's safety and well-being first. Our priority
              for those individuals is unprecedented.
            </Typography>
          </Grid>
        </Grid>


        {/* Integrity */}
        <Grid item container direction="column"
          justifyContent='center'
          sx={{
            width: '40%',
            minHeight: '350px',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              // backgroundColor: 'custom_background.ourserviceItemHover',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',

          }}>
          <Grid item xs={12} md={12}>
            <Image src="https://ik.imagekit.io/2zlgs27bjo/public/icons/wokspace-dark.svg?tr=w-41,q-100"
              width="44px" height="44px"
            >

            </Image>
            <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
              Integrity
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ my: 1, fontWeight: '200', fontSize: { xs: 14, md: 20 } }}>
              Our team employs strict integrity policies:
              intellectual property protection, non-disclosure
              rules, and a no-cheating code are of great
              significance to us. 
            </Typography>
          </Grid>
        </Grid>


        {/* Learning */}
        <Grid item container direction="column"
          justifyContent='center'
          sx={{
            width: '40%',
            minHeight: '350px',
            backgroundColor: 'custom_background.ourserviceItem',
            '&:hover': {
              pointer: 'cursor',
              // backgroundColor: 'custom_background.ourserviceItemHover',
              backgroundImage: 'url(https://ik.imagekit.io/2zlgs27bjo/public/image/our-service-light-new.webp)',
              backgroundSize: '100% 100%',
              color: 'white'
            },
            margin: '20px',
            border: '1px solid green',
            borderRadius: '15px',
            padding: '20px',

          }}>
          <Grid item xs={12} md={12}>
            <Image src="https://ik.imagekit.io/2zlgs27bjo/public/icons/text-dark.svg?tr=w-41,q-100"
              width="44px" height="44px"
            >

            </Image>
            <Typography variant="h5" sx={{ width: '100%', my: 2, fontSize: { xs: 20, md: 30 } }}>
              Learning
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ my: 1, fontWeight: '200', fontSize: { xs: 14, md: 20 } }}>
              In this evolving industry, we try to keep up.
              Learning is key to many doors, and we aim to
              open a lot of those. Connecting to dots.
            </Typography>
          </Grid>
        </Grid>


      </Grid>
    </Grid>
  )
}

export default HomeOurValues
