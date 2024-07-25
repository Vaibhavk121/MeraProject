import Navbar from '@/components/nav-footer/Navbar'
import AboutMerge from '@/components/Sorting/MergeSort/AboutMerge'
import MergeSort from '@/components/Sorting/MergeSort/MergeSort'

import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar/>
      <AboutMerge/>
      <MergeSort/>
    </main>
  )
}

export default page