import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer_container block'>
        <div className="footer_content relative h-4/5 w-full border-b-4 border-white">
            <p className=' absolute left-11 top-5 text-white text-2xl tracking-wider'>Snippet2Sketch</p>

            <div className="footer_links absolute bottom-5 left-5">
                <Link href='/' className='text-xl text-white mx-6'>HOME</Link>
                <Link href='/' className='text-xl text-white mx-6'>SKETCH</Link>
                <Link href='/' className='text-xl text-white mx-6'>ABOUT US</Link>
            </div>

            <div className="footer_contact flex justify-center absolute bottom-5 right-16">
                <p className=' text-white text-xl mx-3 mt-1'>Want to Contribute ? </p>
                <button className=' text-xl text-black bg-white rounded-2xl px-3 py-1 mx-3 h-max'>Contact Us</button>
            </div>

        </div>
        <p className=' flex align-middle justify-center text-white text-xl h-1/5 w-full mx-auto py-1'>&copy; 2024 Snippet2Sketch</p>
    </div>
  )
}

export default Footer