import { FC, PropsWithChildren } from "react";
import cn from 'clsx'


interface ICheckbox {
    isChecked: boolean
    onClick: () => void
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({isChecked, onClick, children, ...rest}) => {
    return (
        <button
            className='flex items-center gap-2'
            onClick={onClick}
        >
            <span
                {...rest} 
                className={cn(
                'focus:outline-none border border-solid border-sec-black/80 rounded transition-colors duration-300 ease-in-out h-5 w-5',
                {
                    ' bg-secondary': isChecked,
                }
                )
            }
            />
            <span>{children}</span>
        </button>
    )
}

export default Checkbox