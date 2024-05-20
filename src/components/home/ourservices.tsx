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

import { data } from './popular-course.data'
import { CourseCardItem } from '@/components/course'
import { resolve } from 'path'

const HomePopularCourse: FC = () => {


  return (
    <Grid container direction='column' sx={{ backgroundColor: 'background.paper' }}>
      <Grid justifyContent='center'>
        <Typography variant="h1" sx={{ textAlign: 'center', mt: 8, mb: 16, fontSize: { xs: 30, md: 50 } }}>
          Our Services
        </Typography>
      </Grid>

      <Grid container direction='row'>
        <Grid item xs={12} md={1} ></Grid>
        <Grid item xs={12} md={5} sx={{ height: '400px' , paddingRight : '20px'}}>
          <Box component="section" sx={{
            textAlign: 'center',
            backgroundColor: 'custom_background.ourserviceItem',
            width: '100%',
            height: '70%',
            borderRadius: '20px',
            positino: 'relative',
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: 'custom_background.ourserviceItemHover',
            }
          }}>
            <Box component="img"
              src="/images/ourservices-left.svg" width='35%' height='400px'
              sx={{
                right: '55%',
                marginTop: '-150px',
                borderRadius: '20px',
                position: 'absolute',
              }}
            >
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ height: '400px' , paddingLeft : '20px'}}>
          <Box component="section" sx={{
            textAlign: 'center',
            backgroundColor: 'custom_background.ourserviceItem',
            width: '100%',
            height: '70%',
            borderRadius: '20px',
            positino: 'relative',
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: 'custom_background.ourserviceItemHover',
            }
          }}>
            <Box component="img"
              src="/images/ourservices-right.svg" width='35%' height='400px'
              sx={{
                left: '55%',
                marginTop: '-150px',
                borderRadius: '20px',
                position: 'absolute',

              }}
            >
            </Box>
          </Box>


        </Grid>
        <Grid item xs={12} md={1} ></Grid>
      </Grid>
    </Grid>
  )
}

export default HomePopularCourse
