import Link from 'next/link'
import { Bruno_Ace_SC } from 'next/font/google'
import { getHomePath } from'@/app/home/path'

const bruno = Bruno_Ace_SC({
  weight: '400'
})

export default function EnterButton(){

    return (
        <Link className={`text-5xl z-50 outline-2 outline-black bg-white rounded-md p-4 ${bruno.className}`} href={getHomePath()} >ENTER</Link>
    )

}