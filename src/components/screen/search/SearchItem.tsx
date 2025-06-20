import { ITender } from "@/interfaces/tender.interface";
import { convertPrice } from "@/utils/convertPrice";
import { convertRegion } from "@/utils/convertRegion";
import Link from "next/link";
import { FC } from "react";

interface ITenders {
    initialTender: ITender
}


const SearchItem: FC<ITenders> = ({initialTender}) => {
    return (
        <>  
        <Link href={`/tender/${initialTender.id}`}>
           <div key={initialTender.id} className="rounded-xl px-2 py-6 hover:border border-solid border-sec-black/60 transition duration-300 ease-in-out">
                
                <div className="flex gap-4 items-center text-sm">
                    <p className="w-max px-2 py-1 rounded-xl bg-gradient-to-r from-bg-second-color via-bg-second-color to-secondary">
                        {convertRegion(initialTender.region_id)}
                    </p>
                    <p className="px-2 py-1 rounded-xl font-medium bg-stand">
                       {initialTender.customer.title} 
                    </p>
                </div>
                <h1 className="font-medium">{initialTender.title}</h1>
                <div key={initialTender.id} className="flex items-center justify-between">
                    <p>{convertPrice(initialTender.price)}</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-lg text-sec-black/85">Вероятность успеха:</p>
                        <p className="font-medium text-primary">{initialTender.win}%</p>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default SearchItem