
import { ReactNode } from "react"

interface ButtonProps {
  children?: ReactNode, 
  className?: string,
  onClick?: () => void, 
  disabled?: boolean,
  size?: 'sm'| 'md' | 'lg'
} 

export default function Button({children, className, onClick, disabled, size='md'}: ButtonProps){

  const padding = size === 'sm' ? 'p-1' : size == 'md' ? 'p-4' : 'p-6'

    return (
      <button 
          className={`cursor-pointer z-50 outline-2 outline-black rounded-md bg-radial-[at_25%_25%] from-white via-slate-200 to-slate-100 disabled:opacity-50 ${padding} ${className}`}
          onClick={onClick}
          disabled={disabled}
       >
        {children}
       </button>
    )

}