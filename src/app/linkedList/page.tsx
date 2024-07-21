import AboutLinklist from '@/components/BasicOparetion/LinkList/AboutLinkedlist'
import LinkListFunction from '@/components/BasicOparetion/LinkList/LinkListFunction'
import SubNavbar from '@/components/nav-footer/SubNavbar'
import React from 'react'

const page = () => {
  return (
    <main>
      <SubNavbar/>
      <AboutLinklist/>
      <LinkListFunction/>
    </main>
  )
}

export default page