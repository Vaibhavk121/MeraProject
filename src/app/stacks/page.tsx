
import AboutStack from '@/components/BasicOparetion/stack/AboutStack'
import AnimationLayout from '@/components/BasicOparetion/stack/AnimationLayout'
import SubNavbar from '@/components/nav-footer/SubNavbar'
import React from 'react'

const page = () => {
  return (
    <>
      <SubNavbar/>
      <AboutStack/>
      <AnimationLayout/>
    </>
  )
}

export default page