import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicAboutUs = dynamic(() => import('@/components/About/aboutus'))
const DynamicExcellence  = dynamic(() => import('@/components/About/excellence'))
const DynamicOurMission  = dynamic(() => import('@/components/About/ourmission'))
const DynamicOurValues  = dynamic(() => import('@/components/About/ourvalues'))
const DynamicGetInTouch  = dynamic(() => import('@/components/About/getintouch'))

const About: NextPageWithLayout = () => {
  return (
    <>
      <DynamicAboutUs/>
      <DynamicExcellence/>
      <DynamicOurMission/>
      <DynamicOurValues/>
      <DynamicGetInTouch/>
    </>
  )
}

About.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default About
