import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'blue' | 'white',
    size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
    children, 
    className,
    variant,
    size  = 'md',
    ...rest}) => {

    return (
      <button 
        {...rest} className={cn(
          'rounded-lg mt-2 px-4 py-2.5 font-medium shadow-lg transition duration-300 ease-in-out text-base',
          {
            'bg-bg-color text-black hover:bg-bg-color-600': variant === "white",
            'bg-primary text-white hover:bg-extra': variant === "blue",
            'px-5 py-2 text-sm': size === 'sm',
            'px-12 py-4 text-xl': size === 'lg',
          }, 
        className
        )}>
          {children}
      </button> 
    )
}

export default Button