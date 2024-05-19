import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BalconyIcon from '@mui/icons-material/Balcony';

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: '#',
    icon: '/images/icons/instagram.svg',
  },
  {
    name: 'YouTube',
    link: '#',
    icon: '/images/icons/youtube.svg',
  },
  {
    name: 'Twitter',
    link: '#',
    icon: '/images/icons/twitter.svg',
  },
  {
    name: 'Dribbble',
    link: 'https://dribbble.com/shots/18114471-Coursespace-Online-Course-Landing-Page',
    icon: '/images/icons/dribbble.svg',
  },
  {
    name: 'Github',
    link: 'https://github.com/hiriski/coursespace-landing-page',
    icon: '/images/icons/github.svg',
  },
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'secondary.main',
        },
        '& img': {
          fill: 'currentColor',
          width: 22,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
        }}
      >
        <TwitterIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></TwitterIcon>
        <LinkedInIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></LinkedInIcon>
        <SmartToyIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></SmartToyIcon>
        <GitHubIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></GitHubIcon>
        <InstagramIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></InstagramIcon>
      </Box>
      <Box
        component="ul"
        sx={{
          mt: 2,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
        }}
      >
        <YouTubeIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></YouTubeIcon>
        <MusicNoteIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></MusicNoteIcon>
        <FacebookIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></FacebookIcon>
        <AccountBalanceIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></AccountBalanceIcon>
        <BalconyIcon sx={{ mr: '20px' , '&:hover' : { cursor : 'pointer'} ,width : '32px', height : '32px', padding : '5px', background : 'white', borderRadius : '50%', m : '5px', color : 'black'}}></BalconyIcon>
      </Box>
    </Box>
  )
}

export default SocialLinks
