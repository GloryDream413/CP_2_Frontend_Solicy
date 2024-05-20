import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicAboutUs = dynamic(() => import('@/components/Careers/aboutus'))
const DynamicExcellence  = dynamic(() => import('@/components/Careers/excellence'))
const DynamicOurValues  = dynamic(() => import('@/components/Careers/ourvalues'))
const DynamicGetInTouch  = dynamic(() => import('@/components/Careers/getintouch'))

const About: NextPageWithLayout = () => {
  return (
    <>
      <DynamicAboutUs/>
      <DynamicExcellence/>
      <DynamicOurValues/>
      <DynamicGetInTouch/>
    </>
  )
}

About.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default About
