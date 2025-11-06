"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bruno_Ace_SC } from 'next/font/google'
import { getHomePath } from'@/app/home/path'
import { useState, useCallback } from 'react'


const bruno = Bruno_Ace_SC({
  weight: '400'
})

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
      duration: 2 }
  })
}


export default function Entrance() {
  const [hovered, setHovered] = useState<boolean>(false)


  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen w-full bg-linear-to-t from-sky-300 to-sky-200 items-center justify-center align  dark:bg-black">

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
                className={`text-5xl z-50 outline-2 outline-black bg-white rounded-md p-4 ${bruno.className}`} 
                href={getHomePath()} 
                onMouseEnter={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                >ENTER</Link>
       </motion.div>
          </motion.div>
        </motion.div>
      </main>
    // </div>
  );
}
