'use client'
import { FC } from "react";
import Filter from "./Filter/Filter";
import { FiActivity, FiDatabase } from "react-icons/fi";
import { MdOutlineMonitor } from "react-icons/md";
import { VscChip } from "react-icons/vsc";
import Link from "next/link";
import { ITender } from "@/interfaces/tender.interface";
import SearchItem from "./SearchItem";
import { useFilters } from "./Filter/useFilter";
import { useRouter } from "next/navigation";


interface ITenders {
    initialTenders: ITender[]
}

const SearchComponent: FC<ITenders> = ({initialTenders}) => {
    const { queryParams, updateQueryParams } = useFilters()


    return (
        <>
            <div className="font-medium bg-gradient-to-r from-bg-second-color via-bg-second-color to-secondary w-full pl-96 pt-20 pb-24">
                <h1 className="text-7xl">ML-помощник</h1>
                <div className="flex items-center gap-8 pt-6 text-2xl text-sec-black ">
                    <p className="flex items-center gap-4 rounded-full bg-white py-2 px-6"><MdOutlineMonitor className="text-primary"/> Аналитика</p>
                    <p className="flex items-center gap-4 rounded-full bg-white py-2 px-6"><VscChip className="text-primary"/> Вероятность</p>
                    <p className="flex items-center gap-4 rounded-full bg-white py-2 px-6"><FiActivity className="text-primary"/> Прогноз</p>
                    <p className="flex items-center gap-4 rounded-full bg-white py-2 px-6"><FiDatabase className="text-primary"/> Подбор</p>
                </div>
                
            </div>
            <div
                className="grid m-auto w-12/20 pt-16 pb-24" 
                style={{  
                    gridTemplateColumns: '1fr 3fr' 
                }}
            >
                <Filter/>
                <div className="pl-16">
                    <div className="flex items-center cursor-pointer">
                        <input name="Название тендера" placeholder="Название тендера" className="text-sm w-full px-6 py-4 rounded-xl border border-solid border-sec-black/60" 
                            value={queryParams.title}
                            onChange={e => updateQueryParams("title", e.target.value)}
                        />
                    </div>
                    <div className="pt-8">
                        {initialTenders.length ? (
                            initialTenders.map(tender => (
                                <SearchItem key={tender.id} initialTender={tender}/>
                            ))
                        ): (
                            <div>Тендеры не найдены</div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchComponent