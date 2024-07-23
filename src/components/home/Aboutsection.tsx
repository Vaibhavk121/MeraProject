"use client";
import React from "react";
import img from "../../../public/About_Image.png";
import Image from "next/image";
import { Button } from "../ui/button";
const AboutSection = () => {
  return (
    <div className="relative mb-10 gap-5 flex w-full flex-col items-center justify-center">
      <div className="flex -ml-32 w-3/4 items-start">
        <p id="circle"></p> <p className="text-4xl text-white">About Us</p>
      </div>
      <div className="flex w-3/4 items-center gap-5 justify-center">
        <div className="flex  flex-col h-full items-center justify-center gap-10 text-2xl text-white">
          <p className="text-2xl">
            Snippet2Sketch is an online educational tool designed <br />
            to help students and educators understand and <br />
            visualize data structure and algorithms. It provides an <br />
            interactive platform where user can see graphical <br />
            representation of algorithms in action,allowing for a <br />
            more intuitive understanding of complex concepts.
          </p>
          <div className="w-full flex items-start mb-10">
          <Button
            onClick={() => (window.location.href = "/aboutus")}
            className="rounded-full text-1xl flex justify-center border-2 border-white bg-black px-7 py-1 align-middle text-white hover:bg-slate-50 hover:text-black"
          >
            Explore →
          </Button>
        </div>

        </div>
          <div className="h-full w-[28rem]">
            <Image src={img} alt="about_image" />
          </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
