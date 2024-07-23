import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import logo from "@/assets/logo/logo.png"

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" hidden md:flex md:items-center md:justify-between px-12 py-3 w-full bg-[#F4F5F6] shadow-sm">
            <div className='flex gap-5 items-center  text-black'>
                <div className="flex items-center gap-2">
                    <Image src={logo} alt={'logo'} width={40} height={40} />
                    <div className='flex flex-col'>
                        <span className="text-lg  font-bold">Mark8</span>
                    </div>
                </div>
            </div>
            <div className=" text-black">
                <span className='font-semibold'><FaRegCopyright size={20} /> Mark8</span>  <span className='text-[#495D69]'>By Awesomity Ltd</span>
            </div>
            <div className='flex text-black items-center'>
                <Link href="#" className='py-2 px-2'>
                    <FaXTwitter size={20} />
                </Link>
                <Link href="#" className='py-2 px-2'>
                    <FaInstagram size={20} />
                </Link>
                <Link href="#" className='py-2 px-2'>
                    <FiYoutube size={20} />
                </Link>
                <Link href="#" className='py-2 px-2'>
                    <LuLinkedin size={20} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer