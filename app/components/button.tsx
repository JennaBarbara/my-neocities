
import { ReactNode } from "react"

interface ButtonProps {
  children?: ReactNode, 
  className?: string,
  onClick?: () => void, 
  disabled?: boolean } 

export default function Button({children, className, onClick, disabled}: ButtonProps){

    return (
      <button 
          className={`${className} cursor-pointer z-50 outline-2 outline-black bg-white p-4 disabled:opacity-50`}
          onClick={onClick}
          disabled={disabled}
       >
        {children}
       </button>
    )

}