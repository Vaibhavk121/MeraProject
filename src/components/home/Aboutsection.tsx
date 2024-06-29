import React from 'react'
import img from "../../../public/About_Image.png"
import Image from 'next/image'
const AboutSection = () => {
  return (
    <div className='about_container relative '>
      <div className="about_title absolute flex  mt-14 ml-20">
        <p id='circle'></p> <p className=' text-4xl text-white'>About Us</p>
      </div>

      <div className="about_content">
        <div className="about_text h-full w-2/3 ">
            <p>
                Snippet2Sketch is an online educational tool designed <br />
                to help students and educators understand and  <br />
                visualize data structure and algorithms. It provides an <br />
                interactive platform where user can see graphical <br />
                representation of algorithms in action,allowing for a  <br />
                more intuitive understanding of complex concepts.
            </p>
        </div>

        <div className="about_picture h-full w-1/3 ">
          <Image src={img} alt="about_image" />
        </div>
      </div>
      <button className='about_content_button flex align-middle justify-center text-white border-white border-2 px-7 py-1 text-1xl
     bg-black'>Explore  →</button>
    </div>
  )
}

export default AboutSection