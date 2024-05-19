import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeJoinCommunity = dynamic(() => import('@/components/home/joincommunity'))
const DynamicHomeGetInTouch = dynamic(() => import('@/components/home/getintouch'))

const Home: NextPageWithLayout = () => {
  return (
    <div style = {{marginTop : '98px'}}>
      <DynamicHomeGetInTouch />
      <DynamicHomeJoinCommunity />
    </div>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
