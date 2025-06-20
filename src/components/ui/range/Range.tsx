import { FC, useEffect, useState } from "react"

import styles from './Range.module.scss'
import { useDebounce } from "@/hooks/useDebounce"

interface IRange {
    min? : number
    max: number
    fromInitialValue?: string
    toInitialValue?: string
    onChangeFromValue: (value: string) => void
    onChangeToValue: (value: string) => void
}

const Rangge: FC<IRange> = ({
    min = 0,
    max, 
    fromInitialValue, 
    toInitialValue, 
    onChangeFromValue, 
    onChangeToValue
}) => {
    const [fromValue, setFromValue] = useState(fromInitialValue || '') 
    const [toValue, setToValue] = useState(toInitialValue || '')

    const debouncedFromValue = useDebounce(fromValue, 500)
    const debouncedToValue = useDebounce(toValue, 500)
    
    useEffect(() => {
        onChangeFromValue(debouncedFromValue)
    }, [debouncedFromValue])

    useEffect(() => {
        onChangeToValue(debouncedToValue)
    }, [debouncedToValue])


    return (
        <div className=" focus:border-primary transition-all duration-300 ease-in-out flex items-center gap-2">
            <input 
                min={min}
                max={max}
                type="number"
                placeholder="От"
                value={fromValue}
                onChange={e => setFromValue(e.target.value)}
                className="rounded-lg border border-solid border-sec-black/80 px-4 py-2 outline-none"
            />
            {"-"}
            <input 
                min={min}
                max={max}
                type="number"
                placeholder="К"
                value={toValue}
                onChange={e => setToValue(e.target.value)} 
                className="rounded-lg border border-solid border-sec-black/80 px-4 py-2 outline-none"
            />
        </div>
    )
}

export default Rangge

