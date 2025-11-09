"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bruno_Ace_SC } from 'next/font/google'
import { getHomePath } from'@/app/home/path'
import { useState} from 'react'
import { redirect, RedirectType } from 'next/navigation'

const bruno = Bruno_Ace_SC({
  weight: '400'
})

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

const rippleClassName = "absolute outline-15 outline-sky-500 size-1  rounded-full items-center justify-center"

const variants = {
  inActive: {
       height: 1, 
       width: 1,
       "outline-width": 15   
  },
  active: (custom: number) => ({
    height:500, 
    width:500,
    "outline-width": 0,
    transition: { 
      delay: custom * 0.2,
      duration: 2, 
     },
    transitionEnd: {  
    "outline-width": 0,
    },
        
  })
}


export default function Entrance() {
  const [isActive, setIsActive] = useState<boolean>(false)


  async function activateRippleManually() {  
      setIsActive(true)
      await delay(2400)
      setIsActive(false)
    }
  
  async function enter() {
      setIsActive(true)
      await delay(2400)
      setIsActive(false)
      redirect(getHomePath(), RedirectType.push) 
    }

    async function skip() {
      redirect(getHomePath(), RedirectType.push)   
    }


  return (
      <main className="flex flex-col h-screen w-screen bg-linear-to-t from-sky-300 to-sky-200 items-center justify-center p-2 text-black overflow-hidden">

          <motion.div
            className={rippleClassName}
            variants={variants}
            custom={0}
            animate={isActive ? "active" : "inactive"}
          >
        </motion.div>
            <motion.div
              className={rippleClassName}
              variants={variants}
              custom={1}
              animate={isActive ? "active" : "inactive"}
            >
          </motion.div>
              <motion.div
                className={rippleClassName}
                variants={variants}
                custom={2}
                animate={isActive ? "active" : "inactive"}
              >
            </motion.div>
       <button
            className={`absolute cursor-pointer text-5xl z-50 outline-2 outline-black bg-white  p-4 ${bruno.className}`} 
            onClick={() => enter() }
            >ENTER</button>
        <div className='absolute bottom-0 m-4'>
          <button className='z-50 outline-2 outline-black bg-white p-4 mx-5 disabled:opacity-50' 
           onClick={() =>activateRippleManually()}
           disabled={isActive}
           >activate ripple</button>
                    <button className='z-50 outline-2 outline-black bg-white mx-5 p-4 disabled:opacity-50' 
           onClick={() =>skip()}
           >{"skip >>"}</button>
        </div>
      </main>
  );
}
