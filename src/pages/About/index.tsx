import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'


const About: NextPageWithLayout = () => {
  return (
    <>
      This is about page !!!!!!!!!
    </>
  )
}

About.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default About
