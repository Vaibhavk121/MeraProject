import AboutLinklist from '@/components/BasicOparetion/LinkList/AboutLinkedlist'
import LinkListFunction from '@/components/BasicOparetion/LinkList/LinkListFunction'
import Navbar from '@/components/nav-footer/Navbar'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar/>
      <AboutLinklist/>
      <LinkListFunction/>
    </main>
  )
}

export default page