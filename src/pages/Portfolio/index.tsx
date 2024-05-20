import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicAboutUs = dynamic(() => import('@/components/Portfolio/aboutus'))
const DynamicGetInTouch = dynamic(() => import('@/components/Portfolio/getintouch'))
const DynamicOurWorks = dynamic(() => import('@/components/Portfolio/ourworks'))

const About: NextPageWithLayout = () => {
  return (
    <>
      <DynamicAboutUs/>
      <DynamicOurWorks/>
      <DynamicGetInTouch/>
    </>
  )
}

About.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default About
