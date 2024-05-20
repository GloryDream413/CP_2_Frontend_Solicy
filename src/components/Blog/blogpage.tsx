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
import { Divider, IconButton, radioClasses, useMediaQuery } from '@mui/material'
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

import { CourseCardItem } from '@/components/course'
import { resolve } from 'path'

import MyBot from '@/components/botChecker'


const HomeGetInTouch: FC = () => {

    return (
        <div id="id_touch">
            <Grid container direction='column' sx={{ backgroundColor: 'background.paper', pb: 8}}>
                <Grid justifyContent='center'>
                    <Typography variant="h1" sx={{ textAlign: 'left', ml: 2, mt: 20, fontSize: { xs: 30, md: 50 } }}>
                        Lessons learned on our journey
                    </Typography>
                    <Typography variant="h1" sx={{ textAlign: 'left', ml: 2, mt: 2, mb: 8, fontSize: { xs: 14, md: 24 }, fontWeight: '100' }}>
                        Here at Solicy, we deliver impactful solutions that can give you the best competitive edge. We first burst onto the scene...
                    </Typography>
                </Grid>

                <Grid container direction="row">
                    <Grid item xs={12} md={7} sx={{ padding: '20px' }}>
                        <Image src="https://ik.imagekit.io/2zlgs27bjo/products/1_O-p1f7zIvOVK5cekJd5JxA_EJrmC0N3o.webp"
                            width='700px'
                            height='500px'
                        ></Image>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ padding: '20px' }}>
                        <Typography variant="h1" sx={{ textAlign: 'left', ml: 2, fontSize: { xs: 30, md: 50 } }}>
                            Understanding Bitcoin Network ...
                        </Typography>
                        <Typography variant="h1" sx={{ textAlign: 'left', ml: 2, mt: 2, mb: 2, fontSize: { xs: 14, md: 20 }, fontWeight: '100' }}>
                            The Bitcoin network is currently experiencing significant congestion, leading to high transaction fees and delays in confirmation times.
                        </Typography>

                        <Typography variant="h1" sx={{ textAlign: 'left', ml: 2, fontSize: { xs: 16, md: 20 } }}>
                            Why is the Bitcoin Network...
                        </Typography>
                        <Typography variant="h1" sx={{ textAlign: 'left', ml: 2, mt: 2, mb: 8, fontSize: { xs: 12, md: 16 }, fontWeight: '100' }}>
                            Solicy | May 17, 2024
                        </Typography>
                    </Grid>
                    <Grid item></Grid>
                </Grid>

                <Divider></Divider>
            </Grid>

        </div>
    )
}

export default HomeGetInTouch
