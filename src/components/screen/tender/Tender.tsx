import { ITender } from "@/interfaces/tender.interface";
import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaMapMarkerAlt, FaMapPin, FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa";
import { convertRegion } from "@/utils/convertRegion";
import { convertPrice } from "@/utils/convertPrice";
import { GoDotFill } from "react-icons/go";
import { convertWin } from "@/utils/converWin";

interface Tender {
    tender: ITender
}

const TenderComponent: FC<Tender> = ({tender}) => {
    const {customer} = tender
    
    return (
        <>
            <div className="w-full pl-96 bg-gradient-to-r from-bg-second-color via-bg-second-color to-secondary">
                <Link href={"/search"} className="flex w-max text-lg text-sec-black/80 gap-3 items-center justify-center">
                    <FaArrowLeft className="text-sec-black/80"/>
                    <p>Все тендеры</p>
                </Link>
                <div className="flex pt-6 gap-8">
                    <div className="flex items-center justify-center gap-2">
                        <FaMapMarkerAlt className="text-stand"/>
                        <p className="font-medium text-lg">{convertRegion(tender.region_id)}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <FaMapPin className="text-stand"/>
                        <p className="font-medium text-lg">{tender.external_id}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <FaRegCalendar className="text-stand"/>
                        <p className="font-medium text-lg">{tender.date_start}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <FaRegCalendarCheck className="text-stand"/>
                        <p className="font-medium text-lg">{tender.date_end}</p>
                    </div>
                </div>
                <div className="pt-8">
                    <p className="text-6xl font-medium w-12/20 leading-20 text-black">{tender.title}</p>
                </div>
                <div className="pt-4 flex items-center gap-2">
                    <p className="font-medium text-extra">
                        <span>От</span> <span className="underline">{convertPrice(tender.price)}</span> <span>до вычета налогов</span> 
                    </p>
                </div>
                <div className="text-xl pt-2 flex items-center gap-2 ">
                    <p className="text-sec-black">Количество участников:</p>
                    <p className="font-medium">{tender.participant}</p>
                </div>
                <div className="flex items-center gap-2 text-4xl mt-6 pb-4">
                    <p className="text-3xl">Общая вероятность:</p>
                    <p className="font-medium text-extra">{tender.win}%</p>
                </div>
            </div>

            <div className="m-auto w-2/5 pt-16">
                <div>
                    <p className="font-medium text-4xl">Дополнительно</p>
                    <p className="text-xl pt-0.5">(факторы не требующиеся для расчета вероятности)</p>
                    <div className="pt-3">
                        <div className="flex items-center gap-2">
                            <GoDotFill className="text-primary"/> 
                            <p><span className="font-medium">Федеральный закон:</span> {tender.fz}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoDotFill className="text-primary"/> 
                            <p><span className="font-medium">Описание:</span> {tender.description}</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 ">
                    <p className="font-medium text-4xl">Прогноз</p>
                    <div className="pt-3">
                         <div className="flex items-center gap-2">
                            <GoDotFill className="text-secondary"/> 
                            <p><span className="font-medium">Уровень успеха:</span> {convertWin(customer.win).win}</p>
                        </div>
                        <p className="text-xl">{convertWin(customer.win).description}</p>
                    </div>
                </div>

                <div className="pt-8 pb-12">
                    <p className="font-medium text-4xl">Об заказчике</p>
                    <div className="pt-3">
                        <div className="flex items-center gap-2">
                            <GoDotFill className="text-stand"/> 
                            <p className="font-medium">{customer.type_company}&nbsp;"{customer.title}"</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoDotFill className="text-stand"/> 
                            <p><span className="font-medium">ИНН:</span> {customer.inn}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoDotFill className="text-stand"/> 
                            <p><span className="font-medium">ОГРН:</span> {customer.ogrn}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoDotFill className="text-stand"/> 
                            <p><span className="font-medium">Регион регистрации:</span> {convertRegion(customer.region_id)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoDotFill className="text-stand"/> 
                            <p><span className="font-medium">Процент надежности:</span> {customer.win}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TenderComponent