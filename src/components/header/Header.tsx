"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from "@/assets/logo/logo.png";

import { BiHeart, BiStore, BiTrash } from "react-icons/bi";
import { TbSmartHome } from "react-icons/tb";
import { IoInformationCircleOutline, IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { TbHeadset } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { clearCart } from '@/redux/features/counterSlice';

const Header = () => {
    const [cartModelIsOpen, setCartModelIsOpen] = useState(false);
    const [profileModelIsOpen, setProfileModelIsOpen] = useState(false);
    const toggleProfileMenu = () => {
        setProfileModelIsOpen(!profileModelIsOpen);
    };
    const toggleMyCart = () => {
        setCartModelIsOpen(!cartModelIsOpen);
    };

    const products = useSelector((state: RootState) => state.cart.products);
    const totalCart = products.reduce((total, item) => total + item.price * item.quantity, 0);
    const dispatch = useAppDispatch();


    return (
        <>
            <header className="hidden z-50 md:flex md:items-center md:justify-between px-12 py-3 w-full fixed top-0 bg-white shadow">
                <div className='flex gap-5 items-center text-black'>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt={'logo'} width={40} height={40} />
                        <div className='flex flex-col'>
                            <span className="text-lg font-bold">Mark8</span>
                            <span className="text-[#495D69] text-sm">By Awesomity Lab</span>
                        </div>
                    </Link>
                    <Link href="/" className="text-sm flex gap-1 items-center font-medium hover:text-primary">
                        <TbSmartHome size={20} color='#C1CF16' /> Home
                    </Link>
                    <Link href="/stores" className="text-sm flex gap-1 items-center font-medium hover:text-primary">
                        <BiStore size={20} color='#C1CF16' /> Stores
                    </Link>
                </div>
                <nav className="flex text-black items-center gap-6">
                    <button className="text-sm hover:text-primary">
                        <IoSearch size={20} />
                    </button>
                    <button onClick={toggleMyCart} className="text-sm flex gap-1 items-center font-medium hover:text-primary text-[#495D69]">
                        <IoCartOutline size={20} /> My Cart {products.length > 1 ? <span>({products.length})</span> : <></>}
                    </button>
                    <Link href="/saved" className="text-sm flex gap-1 items-center font-medium hover:text-primary text-[#495D69]">
                        <MdFavoriteBorder size={20} /> Saved
                    </Link>
                    <Link href="/#OpenStore" className="text-sm border px-8 py-2 rounded flex gap-1 items-center font-medium hover:text-primary text-[#495D69]">
                        Open Store <BiStore size={20} color='#C1CF16' />
                    </Link>
                    <div className='relative'>
                        <div className='border flex rounded items-center'>
                            <div className='border py-2 px-2'>
                                <FaRegUser size={20} color='#C1CF16' />
                            </div>
                            <button
                                onClick={toggleProfileMenu}
                                className="text-sm border py-2 px-1 rounded flex gap-1 items-center font-medium hover:text-primary text-[#495D69]"
                            >
                                <MdKeyboardArrowDown size={20} color='#C1CF16' />
                            </button>
                        </div>
                        {profileModelIsOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <div className="p-2">
                                    <div className="flex items-center gap-2 p-2">
                                        <div className="h-10 w-10 rounded-full">
                                            <FaRegUser size={30} />
                                        </div>
                                        <div className="grid gap-0.5 leading-none">
                                            <h1 className="font-semibold text-sm truncate">Names</h1>
                                            <p className="text-sm text-gray-500 truncate">names@example.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200" />
                                <div className="p-2">
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                        <FaRegUser />
                                        <span>My Account</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                        <IoCartOutline />
                                        <span>My Orders</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                        <TbHeadset />
                                        <span>Help</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                        <FiInfo />
                                        <span>About</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                        <IoSettingsOutline />
                                        <span>Settings</span>
                                    </Link>
                                </div>
                                <div className="border-t border-gray-200 mb-2" />
                                <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                                    <RiLogoutCircleRLine />
                                    <span>Logout</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
                {cartModelIsOpen && (
                    <div className="absolute w-full h-screen z-index-50 top-0 bottom-0 right-0 left-0 rounded-md shadow-lg " >
                        <div className='flex justify-between'>
                            <div className='w-4/6 h-screen bg-black opacity-40' onClick={toggleMyCart}></div>

                            <div className="w-2/6 bg-white">

                                {/* cart header */}
                                <div className="flex justify-between w-full items-center border px-4 py-5">
                                    <h1 className='flex space-x-2 items-center cursor-pointer' onClick={toggleMyCart}><IoMdClose size={20} /> <span>My Cart ({products.length})</span></h1>
                                    <div className='flex gap-2'>
                                        <button className='border rounded py-1 px-4 flex items-center space-x-2'>
                                            <BiHeart color='#C1CF16' size={20} />
                                            <span> Save Cart For later</span>
                                        </button>
                                        <button className='border rounded py-1 px-4'>
                                            <BiTrash color='red' onClick={() => dispatch(clearCart())} size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* cart body */}
                                <div className='flex space-x-3 items-center py-2 bg-[#ddd] px-4'>
                                    <IoInformationCircleOutline />
                                    <p>
                                        By proceeding you won't be charged yet
                                    </p>
                                </div>
                                <div className='h-[75vh] overflow-scroll'>

                                    <div className='px-4 py-4'>
                                        {products.map((item, index) => (
                                            <div key={index}>
                                                <CartItem
                                                    productName={item.productName}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    index={index} />
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* cart footer */}

                                <div className='flex justify-between px-4 border flex-end py-4'>
                                    <div className='text-sm'>
                                        <p>Total</p>
                                        <h1 className='font-bold'>{totalCart} Rwf</h1>
                                    </div>
                                    <button className='py-1 px-4 font-bold rounded bg-[#C1CF16]'>$ checkout</button>
                                </div>

                            </div>

                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;
