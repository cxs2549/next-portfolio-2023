import React from "react"
import { Josefin_Sans } from "@next/font/google"
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "700" })

const About = () => {
  return (
    <div className="mb-12 sm:mt-9">
      <div className="p-4 pb-0 mx-auto max-w-6xl">
        <div>
          <div className="text-3xl md:text-4xl xl:text-5xl font-extrabold uppercase tracking-[-2px]">
            <div className={josefinSans.className}>
              meet <br /> <span className="relative -top-2">cliff sanchez</span>
            </div>
          </div>
          <p className="mt-2 text-neutral-800 dark:text-neutral-300 max-w-sm">
            A talented web developer from Los Angeles with over 7 years of experience in
            JavaScript and 5 years of experience in React. <br /> <br />
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2 pb-8">
          <a href="mailto:sanchez.cliff.86@gmail.com">
            <button className="bg-black text-white dark:invert rounded-full font-semibold h-9 px-4">
              Contact
            </button>
          </a>
          <Link href={`https://github.com/cxs2549`} target="_blank">
            <AiFillGithub size={30} />
          </Link>
          <Link
            href={`https://www.linkedin.com/in/cliff-sanchez-b75a201bb/`}
            target="_blank"
          >
            <AiFillLinkedin size={30} />
          </Link>
        </div>
      </div>
      <div className="p-4 -mt-4 xl:-mt-20 max-w-6xl mx-auto">
        <img src="./assets/aboutbg.png" className="dark:invert" alt="" />
      </div>
    </div>
  )
}

export default About
