'use client'
import Button from "@/ui/button/Button";
import Checkbox from "@/ui/checkbox/Checkbox";
import { FC } from "react";
import { useFilters } from "./useFilter";
import Rangge from "@/ui/range/Range";
import { fzList } from "@/interfaces/tender.interface";


const Filter: FC = () => {
    const { queryParams, updateQueryParams, resetFiltersUpdates } = useFilters()

    
    return (
        <>
            <div className="flex flex-col py-6 px-6 bg-bg-second-color rounded-xl text-sec-black h-full">
                <h1 className="text-2xl font-medium">Фильтр</h1>
                <div>
                    <div className="pt-4">
                        <p className="text-base pb-1 font-medium">Ценовой диапозон</p>
                        <Rangge
                            max={2000}
                            fromInitialValue={queryParams.min_price}
                            toInitialValue={queryParams.max_price}
                            onChangeFromValue={(value) => updateQueryParams('min_price', value)}
                            onChangeToValue={(value) => updateQueryParams('max_price', value)}
                        />
                    </div>
                    <div className="pt-4">
                        <p className="text-base pb-1 font-medium">Федеральный закон</p>
                        {fzList.map(FZ => {
                            const isChecked = queryParams.fz === FZ.value.toString()
                                return (
                                    <Checkbox 
                                        isChecked={isChecked}   
                                        onClick={() => updateQueryParams(
                                            'fz',
                                            isChecked ? '' : FZ.value.toString()
                                        )} 
                                        key={FZ.value}>
                                    {FZ.value}
                                </Checkbox>
                                )
                            })
                            }
                    </div>
                </div>
                <div className="pt-6 mt-auto items-center text-center text-xl shadow-none">
                    <Button variant={"blue"} onClick={() => resetFiltersUpdates() }>Сбросить фильтр</Button>
                </div>

            </div>
        </>
    )
}

export default Filter