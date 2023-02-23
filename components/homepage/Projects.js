/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Josefin_Sans } from "@next/font/google"
import Link from "next/link"
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "700" })
import { AiFillGithub } from "react-icons/ai"

const Projects = () => {
  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className="text-2xl uppercase tracking-[-2px]">
        <h1 className={josefinSans.className}>Recent Projects</h1>
      </div>
      <ul className="mt-4 ">
        <li className="mb-8 rounded-lg overflow-hidden">
          <Link href={`/`} className="rounded-lg overflow-hidden">
            <img src="./assets/projects/nextmeal.png" className="rounded-lg mb-1" alt="" />
          </Link>
          <div className="flex items-center justify-between bg-neutral-100 rounded-lg">
            <div className="p-4 flex gap-2">
              <img
                src="./assets/technologies/react.png"
                className="w-8 object-contain"
                alt=""
              />

              <img src="./assets/technologies/tw.png" className="w-8" alt="" />
            </div>
          </div>
        </li>
        <li className="mb-8">
          <Link
            href={`https://bigbeat-next-sanity.vercel.app/`}
            target="_blank"
          >
            <img src="./assets/projects/bigbeat.png" className="rounded-lg mb-1" alt="" />
          </Link>
          <div className="flex items-center justify-between bg-neutral-100 rounded-lg">
            <div className="p-4 flex gap-2">
              <img
                src="./assets/technologies/react.png"
                className="w-8 object-contain"
                alt=""
              />
              <img
                src="./assets/technologies/next.png"
                className="w-8 object-contain"
                alt=""
              />
              <img src="./assets/technologies/tw.png" className="w-8" alt="" />
              <img
                src="./assets/technologies/sanity.png"
                className="w-8"
                alt=""
              />
              <img
                src="./assets/technologies/headless.png"
                className="w-8"
                alt=""
              />
            </div>
            <AiFillGithub className="mr-4 dark:invert" size={30} />
          </div>
        </li>
        <li>
          <Link
            href={`https://betterman-next-sanity.vercel.app/`}
            target="_blank"
          >
            <img src="./assets/projects/betterman.png" className="rounded-lg mb-1" alt="" />
          </Link>
          <div className="flex items-center justify-between bg-neutral-100 rounded-lg">
            <div className="p-4 flex gap-2">
              <img
                src="./assets/technologies/react.png"
                className="w-8 object-contain"
                alt=""
              />
              <img
                src="./assets/technologies/next.png"
                className="w-8 object-contain"
                alt=""
              />
              <img src="./assets/technologies/tw.png" className="w-8" alt="" />
              <img
                src="./assets/technologies/sanity.png"
                className="w-8"
                alt=""
              />
              <img
                src="./assets/technologies/headless.png"
                className="w-8"
                alt=""
              />
            </div>
            <AiFillGithub className="mr-4 dark:invert" size={30} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects