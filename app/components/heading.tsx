import { Bruno_Ace_SC } from 'next/font/google'

const bruno = Bruno_Ace_SC({
  weight: '400'
})


export default function Heading (   {text, className}:{text?: string , className?: string}  ) {


return (

    <div className={`${bruno.className} rounded-full p-2 w-full outline-2 outline-sky-500 bg-radial-[at_25%_25%] from-sky-200 via-sky-500 to-cyan-200 ${className}`}>
        <h2 className="font-bold text-center text-white drop-shadow-[0_1.5px_1.5px_rgba(71,85,105,0.8)]">{text}</h2>
    </div>

)
}