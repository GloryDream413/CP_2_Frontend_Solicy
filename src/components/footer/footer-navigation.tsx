import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const courseMenu: Array<Navigation> = [
  {
    label: 'Our Services',
    path: '#',
  },
  {
    label: 'Tech Stack',
    path: '#',
  },
  {
    label: 'About Us',
    path: '#',
  },
  {
    label: 'Blockchain',
    path: '#',
  },
  {
    label: 'Portfolio',
    path: '#',
  },
  {
    label: 'Conditions',
    path: '#',
  },
  {
    label: 'Software',
    path: '#',
  },
  {
    label: 'Careers',
    path: '#',
  },
  {
    label: 'Privacy Policy',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>

        <Typography sx={{ fontSize: '28px', mb: 2 }}>
          What we Do ?
        </Typography>

        <Grid container direction="row">
          {courseMenu.map(({ label, path }, index) => (
            <Grid item xs={12} md={4} sx={{ mb: 1 }} key = {index+path}>
              <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>


        <Typography sx={{ fontSize: '28px', mb: 2 }}>
          Contact Us
        </Typography>
        <Grid container direction="row" alignItems='center'>
          <Grid item>
            <LocationOnIcon sx={{ mr: '0px', '&:hover': { cursor: 'pointer' }, width: '24px', height: '24px', padding: '5px', background: 'white', borderRadius: '50%', m: '5px', color: 'black' }}></LocationOnIcon>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: '14px', mb: 1 }}>
              30/1 Sevan St.,Yerevan
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" alignItems='center'>
          <Grid item>
            <AttachEmailIcon sx={{ mr: '0px', '&:hover': { cursor: 'pointer' }, width: '24px', height: '24px', padding: '5px', background: 'white', borderRadius: '50%', m: '5px', color: 'black' }}></AttachEmailIcon>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: '14px', mb: 1 }}>
              contact@solicy.net
            </Typography>
          </Grid>
        </Grid>



      </Grid>
    </Grid>
  )
}

export default FooterNavigation
