
import AboutStack from '@/components/BasicOparetion/stack/AboutStack'
import StackOperation from '@/components/BasicOparetion/stack/StackOperation'
import Navbar from '@/components/nav-footer/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar/>
      <AboutStack/>
      <StackOperation/>
    </>
  )
}

export default page