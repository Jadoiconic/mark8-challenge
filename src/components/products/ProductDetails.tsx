"use client"

import Button from '@/generic/components/button/Button';
import React, { useState } from 'react'
import { BiPhone } from 'react-icons/bi';
import { FaRegHeart } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import ProductItem from './ProductItem';
import OpenYourStore from '../store/OpenYourStore';


const ProductDetails = () => {
    const [isSelected, setIsSelected] = useState(0)
    return (
        <section>
            <div className='flex justify-between space-x-5'>
                <div className='rounded-lg bg-white overflow-hidden border md:w-1/3'>
                    <div className='bg-[#F7F8FB] h-[40vh] w-full' />
                    <div className='p-2 flex space-x-1'>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className={`bg-[#F7F8FB]
                                 ${isSelected == index ? "border-2 border-[#C1CF16]" : ""} 
                                 rounded-lg h-[5vh] md:w-[5vh]`}
                                onClick={() => setIsSelected(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className='rounded-lg bg-white overflow-hidden border md:w-2/3'>
                    {/* card header */}
                    <div className='flex justify-between items-center border'>
                        <div className='p-4 flex space-x-3'>
                            <h1 className='font-semibold'>Product Details</h1>
                            <span className='bg-[#F7F8FB] p-1 font-normal rounded-lg text-xs'>IN STOCK</span>
                        </div>
                        <div className='flex space-x-3 px-4 items-center'>
                            <button className='flex space-x-2 py-1 border px-4 rounded-lg'>
                                <FaRegHeart size={20} color='#C1CF16' /> <span>Save</span></button>

                            <IoMdMore size={20} />

                        </div>
                    </div>

                    {/* card body */}

                    <div className='min-h-[33vh] w-full p-4'>
                        <h1 className='font-bold'>Product 5</h1>
                        <p className='text-[#C1CF16] py-1'>
                            9,000 Rwf <span className='text-slate-400'>12,000 Rwf</span>
                        </p>
                        <h1 className='font-semibold'>Description</h1>
                        <p className='py-1'>
                            A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-forward individuals.
                        </p>
                        <h1 className='font-semibold'>Reviews</h1>
                        <div className='flex space-x-2 py-2 items-center'>
                            <FaRegStar color='#C1CF16' size={20} />
                            <span className='font-semibold text-xs'>4.8</span>
                            <span className='text-slate-400'>(14 Reviews)</span>
                        </div>

                    </div>



                    {/* card footer */}
                    <div className='border flex justify-between items-center w-full py-2 px-4'>
                        <div className='flex space-x-1 items-center'>
                            <div className='fone-semibold text-sm'>Store Info:</div>
                            <div className='h-5 w-5 rounded-full bg-[#C1CF16]' />
                            <div>AwesomeShop 1</div>
                        </div>
                        <div>
                            <Button label='Contact Store' onClick={() => { }}>
                                <BiPhone color='#C1CF16' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <section className='py-4'>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index}>
                            <ProductItem index={index} />
                        </div>
                    ))}
                </div>
            </section>
            <section className='py-4'>
            <OpenYourStore />
            </section>
        </section>
    )
}

export default ProductDetails