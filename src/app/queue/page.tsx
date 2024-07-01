import AboutLinklist from '@/components/BasicOparetion/LinkList/AboutLinkedlist'
import LinkListFunction from '@/components/BasicOparetion/LinkList/LinkListFunction'
import AboutQueue from '@/components/BasicOparetion/queue/AboutQueue'
import QueueWorking from '@/components/BasicOparetion/queue/QueueWorking'
import Navbar from '@/components/nav-footer/Navbar'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar/>
      <AboutQueue/>
      <QueueWorking/>
    </main>
  )
}

export default page