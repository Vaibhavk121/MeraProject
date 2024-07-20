
import AboutStack from '@/components/BasicOparetion/stack/AboutStack'
import AnimationLayout from '@/components/BasicOparetion/stack/AnimationLayout'
import StackOperation from '@/components/BasicOparetion/stack/StackOperation'
import Navbar from '@/components/nav-footer/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar/>
      <AboutStack/>
      <AnimationLayout/>
    </>
  )
}

export default page