import SubNavbar from "@/components/nav-footer/SubNavbar";
import Image from "next/image";
import React from "react";
import homePageImg from "../../../public/homePage.png";
import Link from "next/link";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
export default function page() {
  return (
    <main className="flex flex-col  items-center justify-center gap-20 text-white">
      <div className="max-w-[1280px]">
      <SubNavbar />
      <article className="flex  flex-col gap-10">
        <h1 className="text-5xl">About Us</h1>
        <div className="flex gap-20 max-lg:flex-col">
          <div className="flex w-1/2 max-lg:w-full flex-col gap-5 text-2xl">
            <p>
              Snippet2Sketch is an online educational tool designed to help
              students and educators understand and visualize data structures
              and algorithms. It provides an interactive platform where users
              can see graphical representations of algorithms in action,
              allowing users for a new intuitive understanding of complex
              concepts.
            </p>
            <p>
              One can use this tool to gain understanding about data structures
              and also visualize them. This helps to have a clear cut
              understanding in every concepts of DSA.
            </p>
          </div>
          <figure className="w-1/2 max-lg:w-full">
            <Image
              src={homePageImg}
              alt="home page"
              className="h-full w-full"
              />
          </figure>
        </div>
      </article>
      <section className="mb-20 flex  flex-col gap-10">
        <h2 className="text-4xl">Team</h2>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex w-[48%] flex-col gap-5 rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Babith K P</p>
            <p className="text-xl">
              🚀 Passionate about creating immersive digital experiences and
              solving real-world challenges through technology. 💻 Excited to
              collaborate with experts in the field to drive innovation and push
              boundaries.
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"/"}>
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[48%] flex-col gap-5 justify-between rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Thomas Antony S</p>
            <p className="text-xl">
              👋 I&lsquo;m a BE CSE student in my pre-final year. I constantly
              make efforts to become a good developer through learning.
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"/"}>
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[48%] flex-col gap-5 justify-between rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Vikas Thapa</p>
            <p className="text-xl">
              👋 Hello, I&lsquo;m Vikas B , a motivated third-year engineering
              student with a passion for innovation and problem-solving. 💡
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"/"}>
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[48%] flex-col gap-5 rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Sudarshan V</p>
            <p className="text-xl">
              As a passionate UI/UX Designer and Frontend Web Developer, I bring
              ideas to life through intuitive design and robust code. With a
              keen eye for aesthetics and a deep understanding of user behavior,
              I create seamless and engaging digital experiences.
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"/"}>
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
              </div>
    </main>
  );
}
