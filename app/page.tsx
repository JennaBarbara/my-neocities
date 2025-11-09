"use client"

import { motion } from 'framer-motion'
import { Bruno_Ace_SC } from 'next/font/google'
import { getHomePath } from'@/app/home/path'
import { useState} from 'react'
import { redirect, RedirectType } from 'next/navigation'
import Button from '@/app/components/button'

const bruno = Bruno_Ace_SC({
  weight: '400'
})

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

const rippleClassName = "absolute outline-15 outline-sky-500 size-1 rounded-full items-center justify-center"

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
      <main className="flex flex-col h-screen w-screen bg-linear-to-t from-cyan-200 to-sky-500 items-center justify-center p-2 text-black overflow-hidden">

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
       <Button
            className={`absolute  text-5xl z-50  ${bruno.className}`} 
            onClick={() => enter()}
            >ENTER</Button>
        <div className='absolute bottom-0 m-4'>
          <Button className='mx-5 md:mx-30' 
           onClick={() =>activateRippleManually()}
           disabled={isActive}
           >activate ripple</Button>
           <Button className='mx-5 md:mx-30' 
           onClick={() =>skip()}
           >{"skip >>"}</Button>
        </div>
      </main>
  );
}
