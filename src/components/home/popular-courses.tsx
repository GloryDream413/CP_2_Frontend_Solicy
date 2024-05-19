import React, { FC , useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

// import { useTheme as useNextTheme } from 'next-themes';


import Image from 'next/image';

import { data } from './popular-course.data'
import { CourseCardItem } from '@/components/course'
import { resolve } from 'path'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomePopularCourse: FC = () => {
  const { breakpoints } = useTheme()

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      console.log("===>", storedTheme);
    }
  }, [])

  
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Grid container direction='column' sx={{ backgroundColor: 'background.paper' }}>
      <Grid justifyContent='center'>
        <Typography variant="h1" sx={{ textAlign : 'center', mt: 8, mb: 8, fontSize: { xs: 40, md: 72 } }}>
          Our Clients
        </Typography>
      </Grid>

      <Grid container justifyContent='center' alignItems='center' spacing={2}>
        {data.map((item, index) =>

          (localStorage.getItem('theme') == item.mode) && (
            <Grid item xs={12} md={2} justifyContent='center' alignItems='center'
              sx={{
                cursor: 'pointer',
                textAlign : 'center',
                '&:hover' : {
                  transform : 'scale(1.2)',
                  transition : 'all 1s',
                }
              }}>
              <Image
                src={item.cover} width='100%' height='100%'></Image>
            </Grid>
          ))

          
        }
      </Grid>

    </Grid>
  )
}

export default HomePopularCourse
