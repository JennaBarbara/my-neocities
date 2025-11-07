"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bruno_Ace_SC } from 'next/font/google'
import { getHomePath } from'@/app/home/path'
import { useState} from 'react'


const bruno = Bruno_Ace_SC({
  weight: '400'
})

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

const rippleClassName = "flex flex-col outline-15 outline-sky-500 size-1  rounded-full items-center justify-center"

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
      "outline-width": 1,
    },
        
  })
}


export default function Entrance() {
  const [hovered, setHovered] = useState<boolean>(false)

  async function activateRippleManually(){
      setHovered(true)
      await delay(3000)
      setHovered(false)
    }
  


  return (
      <main className="flex flex-col min-h-screen w-full bg-linear-to-t from-sky-300 to-sky-200 items-center justify-center p-2 text-black">

          <motion.div
            className={rippleClassName}
            variants={variants}
            custom={0}
            animate={hovered ? "active" : "inactive"}
          >
            <motion.div
              className={rippleClassName}
              variants={variants}
              custom={1}
              animate={hovered ? "active" : "inactive"}
            >
              <motion.div
                className={rippleClassName}
                variants={variants}
                custom={2}
                animate={hovered ? "active" : "inactive"}
              >
                <Link
                  className={`text-5xl z-50 outline-2 outline-black bg-white  p-4 ${bruno.className}`} 
                  href={getHomePath()} 
                  onMouseEnter={() => setHovered(true)}
                  onMouseOut={() => setHovered(false)}
                  >ENTER</Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className='md:hidden absolute bottom-0 m-4'>
          <button className='z-50 outline-2 outline-black bg-white  p-4 disabled:opacity-50' 
           onClick={() =>activateRippleManually()}
           disabled={hovered}
           >activate ripple</button>
        </div>
      </main>
  );
}
