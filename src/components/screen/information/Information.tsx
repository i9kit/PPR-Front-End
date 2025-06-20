import Button from "@/ui/button/Button";
import Heading from "@/ui/Heading";
import Link from "next/link";
import { FC } from "react";
import { FaArrowRight, FaFingerprint } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";

const Information: FC = () => {
    return (
        <div>
        <div className="items-center text-center pt-25 pb-30 bg-gradient-to-r from-bg-second-color via-bg-second-color to-secondary">
            <div className="font-medium text-7xl">
                <div className="text-center items-center inline-flex gap-6">
                    <p>Создаем</p>
                    <p className="rounded-full px-5 py-2 text-white bg-primary">будущее</p>
                </div>
                <p>каждому</p>
                <div className="text-center items-center inline-flex gap-6">
                    <p>и</p>
                    <p className="rounded-full px-5 py-2 text-white bg-secondary">даем</p>
                    <p>работать</p>
                </div>
            </div>

            <div className="pt-10">
                <Link href={"/search"} className="text-center items-center ">
                    <Button variant={"blue"} size="lg">
                        <div className="flex items-center gap-3">
                            Ознакомиться
                            <FaArrowRight/>
                        </div>
                    </Button>
                </Link>
            </div>
        </div>

        <div className="mt-18 m-auto w-12/20">
            <Heading className="font-medium text-center text-5xl">Кейс | Smart Leads</Heading>
            <div className="flex justify-center gap-20 pt-8 text-center items-center">
                <div className="font-medium text-3xl rounded-full px-8 py-6 shadow-2xl">
                    <p>ППР помогает бизнесу</p>
                    <p>сделать процессы</p>
                    <p>быстрее и комфортнее</p>
                </div>
                <FaArrowRight size={50} className="text-secondary"/>
                <div className="text-xl bg-bg-second-color rounded-xl py-2 px-4">
                    <p>Мы создали комплексное решение,</p>
                    <p>чтобы клиентам было удобно заниматься</p>
                    <p>поиском и отбором различных тендеров</p>
                    <p>при помощи инструментом, помогающие</p>
                    <p>производить поиск тендеров в сети,</p>
                    <p>а также высчитать вероятность их успеха.</p>
                </div>
            </div>
        </div>

        <div className="mt-38 m-auto w-12/20">
            <div className="font-medium text-justify text-5xl">
                <h1>Почему</h1>
                <h1>именно мы</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-12 items-center justify-center text-center">
                <div className="bg-bg-color rounded-xl shadow-md">
                    <p className="font-medium text-start px-6 pt-4 pb-2 text-2xl">Скорость</p>
                    <p className="text-start px-6 py-2 text-xl">Из-за глубокого подхода к данному вопросу, создание системы прошло с максимальным анализом скорости работи, позволив создать поистину оптимизированную платформу.</p>
                    <div className="px-6 py-2">
                        <IoSpeedometerOutline  size={35} className="text-primary"/>
                    </div>
                </div>
                
                <div className="bg-bg-color rounded-xl shadow-md">
                    <p className="font-medium text-start px-6 pt-4 pb-2 text-2xl">Подробный анализ и прогнозирование</p>
                    <p className="text-start px-6 py-2 text-xl">Вам не придётся самостоятельно анализировать шанс успеха тендера. Наши аналитики сделали это совершенно бесплатно.</p>
                    <div className="px-6 py-2">
                        <MdOutlineAnalytics size={35} className="text-primary"/>
                    </div>
                </div>

                <div className="bg-bg-color rounded-xl shadow-md">
                    <p className="font-medium text-start px-6 pt-4 pb-2 text-2xl">Удобный интерфейс</p>
                    <p className="text-start px-6 py-2 text-xl">Прекрасный дизайн в синергии с уникальным фунцкионалом создает необючайно индивидуальный, а главное максимально понятный.</p>
                    <div className="px-6 py-2">
                        <FaFingerprint size={35} className="text-primary"/>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}

export default Information