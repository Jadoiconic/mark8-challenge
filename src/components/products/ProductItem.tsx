'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addProduct } from '@/redux/features/cartSlice';
import { addFavorite, removeFavorite } from '@/redux/features/favoriteSlice';
import Link from 'next/link';
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

interface ProductItemProps {
    index: number;
    productName: string;
    thumbnail: string;
    unitPrice: number;
    productId: string;
}

const ProductItem = ({ index, productId, productName, thumbnail, unitPrice }: ProductItemProps) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.favorite.favorites || []); // Ensure it's an array

    const handleAddProduct = () => {
        const newProduct = { productName, price: unitPrice, quantity: 1, thumbnail };
        dispatch(addProduct(newProduct));
    };

    const handleAddToFavorite = () => {
        const newProduct = { productName, price: unitPrice, quantity: 1, thumbnail };
        dispatch(addFavorite(newProduct));
    };

    const handleRemoveFromFavorite = () => {
        dispatch(removeFavorite(productName));
    };

    // Check if the product is in the favorites list
    const isFavorite = favorites.some((favorite: any) => favorite.productName === productName);

    return (
        <div className="py-4" key={index}>
            <Link href={`/details/${productId}`}>
                <img src={thumbnail} className="h-40 bg-gray-200 w-full object-fill rounded-md mb-4" />
                <h3 className="font-semibold">{productName}</h3>
            </Link>
            <div className="flex justify-between items-center">
                <div className='flex space-x-1'>
                    <p className="text-[#a3d9a5] text-sm font-bold">{unitPrice} Rwf</p>
                </div>
                <div className="flex space-x-2">
                    <button className="p-2" onClick={handleAddProduct}>
                        <IoCartOutline size={30} className="h-5 w-5 font-bold" />
                    </button>
                    <button className="p-2" onClick={isFavorite ? handleRemoveFromFavorite : handleAddToFavorite}>
                        {isFavorite ? (
                            <FaHeart size={30} className="h-5 w-5 font-bold text-red-500" />
                        ) : (
                            <FaRegHeart size={30} className="h-5 w-5 font-bold" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
