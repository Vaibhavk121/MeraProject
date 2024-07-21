
import AboutQueue from '@/components/BasicOparetion/queue/AboutQueue'
import QueueWorking from '@/components/BasicOparetion/queue/QueueWorking'
import SubNavbar from '@/components/nav-footer/SubNavbar'
import React from 'react'

const page = () => {
  return (
    <main>
      <SubNavbar/>
      <AboutQueue/>
      <QueueWorking/>
    </main>
  )
}

export default page