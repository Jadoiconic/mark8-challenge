"use client"

import { addProduct } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import Link from 'next/link';
import React from 'react';

import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

interface ProductItemProps {
    index: number;
}

const ProductItem = ({ index }: ProductItemProps) => {
    const itemId = 123;
    const dispatch = useAppDispatch();

    const handleAddProduct = () => {
        const newProduct = { productName: 'MacBook', price: 1200, quantity: 1 };
        dispatch(addProduct(newProduct));
    };

    return (
        <div className="py-4">
            <Link href={`/details/${itemId}`}>
                <div className="h-40 bg-gray-200 rounded-md mb-4" />
                <h3 className="font-semibold">Product {index + 1}</h3>
            </Link>
            <div className="flex justify-between items-center">
                <div className='flex space-x-1'>
                    <p className="text-[#a3d9a5] text-sm font-bold">9,000 Rwf</p>
                    <p className="text-gray-400 text-sm">12,000 Rwf</p>
                </div>
                <div className="flex space-x-2">
                    <button className="p-2" onClick={handleAddProduct}>
                        <IoCartOutline size={30} className="h-5 w-5 font-bold" />
                    </button>
                    <button className="p-2">
                        <FaRegHeart size={30} className="h-5 w-5 font-bold" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
