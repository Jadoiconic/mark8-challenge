import React from 'react'

import { FaRegUser } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import ProductItem from '../products/ProductItem';

const ShopItem = () => {
    return (
        <section className='rounded-lg w-full border my-8'>
            {/* shopItem header */}
            <div className='w-full border flex justify-between items-center  px-8 py-2'>
                <div className='flex space-x-2'>
                    <div className="h-10 w-10 bg-gray-200 rounded-md mb-4" />
                    <div>
                        <h1 className='font-semibold'>Awesome Shop 2</h1>
                        <h4 className='text-gray-400'>132 Products</h4>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <button className='bg-[#C1CF16] px-4 py-2 rounded flex space-x-2 text-sm  font-medium'><FaRegUser size={20}/><span>View Profile</span></button>
                    <button  className='border px-4 py-2 rounded flex space-x-2 text-sm  font-medium'><IoCallOutline size={20} /></button>
                    <button  className='border px-4 py-2 rounded flex space-x-2 text-sm  font-medium'><FaRegHeart size={20} /></button>
                </div>
            </div>
            {/* shopItem body */}
            <div className='py-2 flex justify-between px-8'>
                <div>
                    <h1 className='font-bold'>About</h1>
                </div>
                <div className='flex space-x-2'>
                    {Array.from({length:3}).map((_,index)=>(
                        <div key={index}>
                        <ProductItem index={index} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ShopItem