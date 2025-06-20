import Link from "next/link";
import { FC } from "react";
import { FaAdversal, FaTelegram, FaVk, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import Image from 'next/image'

const Footer: FC = () => {
    return ( 
    <>
        <div>
            <div className="flex justify-center py-8 px-16 gap-25 m-auto">
                <div>
                    <Link href='/'>
                        <Image
                        priority
                        width={25}
                        height={25}
                        src='/globe.svg'
                        alt="Amazon v2" 
                    />
                    </Link>
                    <div className="flex gap-4 py-2.5">
                        <FaYoutube />
                        <IoLogoTwitter />
                        <FaVk />
                        <FaAdversal />
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-xl">Продукты и услуги</h1>
                    <div className="pt-2 text-sm">
                        <p>Все информация</p>
                        <p>Написанная здесь</p>
                        <p>Не несет</p>
                        <p>Никакой, любой</p>
                        <p>Информационной ценности</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-xl">О команде</h1>
                    <div className="pt-2 text-sm">
                        <p>Михаил Ершов</p>
                        <p>Бабкин Никита</p>
                        <p>Максим "Симба"</p>
                        <p>Мария Ефремова</p>
                        <p>Алиса без Боба</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-xl">Поддержка</h1>
                    <div className="pt-2 text-sm">
                        <p>Вопросы и ответы</p>
                        <p>Как мы работаем с клиентами</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-xl">Контакты</h1>
                    <div className="pt-2 text-sm">
                        <p>Контактная информация</p>
                        <p>8 800 5555-200</p>
                        <p>service@ppcard.ru</p>
                        <div className="flex gap-1">
                            <FaWhatsapp /> 
                            <p>8 845 2374-233</p>
                        </div>
                        <div className="flex gap-1">
                            <FaTelegram /> 
                            <p>8 876 2435-283</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer