
import Navbar from '@/components/nav-footer/Navbar'
import AboutSelection from '@/components/Sorting/SelectionSort/AboutSelection'
import SelectionSort from '@/components/Sorting/SelectionSort/SelectionSort'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <AboutSelection/>
    <SelectionSort/>
    </>
  )
}

export default page