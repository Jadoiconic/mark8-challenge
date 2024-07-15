import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import logo from "@/assets/logo/logo.png"

import { BiStore } from "react-icons/bi";
import { TbSmartHome } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
    return (
        <header className=" hidden z-50 md:flex md:items-center md:justify-between px-12 py-3 w-full fixed top-0 bg-white shadow">
            <div className='flex gap-5 items-center  text-black'>
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image src={logo} alt={'logo'} width={40} height={40} />
                    <div className='flex flex-col'>
                        <span className="text-lg  font-bold">Mark8</span>
                        <span className="text-[#495D69] text-sm">By Awesomity Lab</span>
                    </div>
                </Link>
                <Link href="/" className="text-sm flex gap-1 items-center font-medium hover:text-primary" prefetch={false}>
                    <TbSmartHome size={20} color='#C1CF16' /> Home
                </Link>
                <Link href="/stores" className="text-sm flex gap-1 items-center font-medium hover:text-primary" prefetch={false}>
                    <BiStore size={20} color='#C1CF16' /> Stores
                </Link>
            </div>
            <nav className="flex  text-black items-center gap-6">
                <button className="text-sm hover:text-primary">
                    <IoSearch size={20} />
                </button>
                <Link href="/cart" className="text-sm flex gap-1 items-center font-medium hover:text-primary text-[#495D69]" prefetch={false}>
                    <IoCartOutline size={20} /> My Cart
                </Link>
                <Link href="/saved" className="text-sm flex gap-1 items-center font-medium hover:text-primary text-[#495D69]" prefetch={false}>
                    <MdFavoriteBorder size={20} /> Saved
                </Link>
                <button className="text-sm border px-8 py-2 rounded flex gap-1 items-center font-medium hover:text-primary text-[#495D69]">
                    Open Store <BiStore size={20} color='#C1CF16' />
                </button>
                <div className='border flex rounded'>
                    <div className='border py-2 px-2'>
                        <FaRegUser size={20} color='#C1CF16' />
                    </div>
                    <button className="text-sm border py-2 px-1 rounded flex gap-1 items-center font-medium hover:text-primary text-[#495D69]">
                        <MdKeyboardArrowDown size={20} color='#C1CF16' />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header