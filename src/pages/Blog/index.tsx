import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicBlog = dynamic(() => import('@/components/Blog/blogpage'))

const About: NextPageWithLayout = () => {
  return (
    <>
      <DynamicBlog/>
      {/* <DynamicGetInTouch/> */}
    </>
  )
}

About.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default About
