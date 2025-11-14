export default function SubHeading ( {text, className}:{text?: string , className?: string}  ) {

    return (     
    <h1 className={`text-lg text-bold font-black text-white bg-linear-to-r from-cyan-500 to-lime-500/0 rounded-sm p-2 ${className}`}>
       {text}
    </h1>)
}
