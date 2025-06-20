'use client'
import Link from "next/link";
import Image from 'next/image';
import { FC } from "react";



const Header: FC = () => {
    return (
        <header className="flex top-0 left-0 right-0 justify-center bg-gradient-to-r from-bg-second-color via-bg-second-color to-secondary w-full pt-9 pb-6 px-6 items-center gap-10">
            <Link href='/' className="cursor-default">
                <Image
                priority
                width={60}
                height={60}
                src='/black_hole.svg'
                alt="Amazon v2" 
              />
            </Link>
            <div className="flex text-center text-xl font-medium gap-10">
              <p>Функционал</p>
              <p>Особенности</p>
              <p>FAQ</p>
              <p>Контакты</p>           
            </div>
          </header>
    )
}

export default Header

