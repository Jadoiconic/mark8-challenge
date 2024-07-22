'use client';

import { useEffect, useState } from 'react';
import { BiPhone } from 'react-icons/bi';
import { FaRegHeart, FaHeart, FaRegStar } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';
import Button from '@/generic/components/button/Button';
import ProductItem from './ProductItem';
import OpenYourStore from '../store/OpenYourStore';
import { useSearchParams } from 'next/navigation';
import { retrieveUserAuth } from '@/generic/services/LocalStorage';
import Skeleton from '@/generic/components/skeleton/Skeleton';

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    description: string;
    thumbnail: string[];
    store: {
        name: string;
    };
    reviews: {
        rating: number;
        count: number;
    };
}

const ProductDetails = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [isSelected, setIsSelected] = useState<number>(0);
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!id) return;

        const fetchProductDetails = async () => {
            const { accessToken } = retrieveUserAuth();
            try {
                setLoading(true);
                const response = await fetch(`https://api.mark8.awesomity.rw/products/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setLoading(false);
                setProduct(data);
            } catch (error) {
                setError('Internal server error');
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <Skeleton />;
    }
    if (error) {
        return <p>{error}</p>;
    }
    if (product) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <div className='flex justify-between space-x-5'>
                <div className='rounded-lg bg-white overflow-hidden border md:w-1/3'>
                    <div className='bg-[#F7F8FB] h-[40vh] w-full'>
                        {/* <img src={product.thumbnail[isSelected]} className='w-full h-full object-cover' alt={product.name} /> */}
                    </div>
                    <div className='p-2 flex space-x-1'>
                        {Array.from({ length: 6 }).map((thumb, index) => (
                            <div
                                key={index}
                                className={`bg-[#F7F8FB] ${isSelected === index ? 'border-2 border-[#C1CF16]' : ''} rounded-lg h-[5vh] md:w-[5vh] cursor-pointer`}
                                onClick={() => setIsSelected(index)}
                            >
                                {/* <img src={thumb} className='w-full h-full object-cover' alt={`Thumbnail ${index + 1}`} /> */}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='rounded-lg bg-white overflow-hidden border md:w-2/3'>
                    {/* Card header */}
                    <div className='flex justify-between items-center border'>
                        <div className='p-4 flex space-x-3'>
                            <h1 className='font-semibold'>Product</h1>
                            <span className='bg-[#F7F8FB] p-1 font-normal rounded-lg text-xs'>IN STOCK</span>
                        </div>
                        <div className='flex space-x-3 px-4 items-center'>
                            <button className='flex space-x-2 py-1 border px-4 rounded-lg'>
                                <FaRegHeart size={20} color='#C1CF16' /> <span>Save</span>
                            </button>
                            <IoMdMore size={20} />
                        </div>
                    </div>

                    {/* Card body */}
                    <div className='min-h-[33vh] w-full p-4'>
                        <p className='text-[#C1CF16] py-1'>
                            {700} Rwf <span className='text-slate-400'>{900} Rwf</span>
                        </p>
                        <h1 className='font-semibold'>Description</h1>
                        <p className='py-1'>Summary description</p>
                        <h1 className='font-semibold'>Reviews</h1>
                        <div className='flex space-x-2 py-2 items-center'>
                            <FaRegStar color='#C1CF16' size={20} />
                            <span className='font-semibold text-xs'>{4.5}</span>
                            <span className='text-slate-400'>(120 Reviews)</span>
                        </div>
                    </div>

                    {/* Card footer */}
                    <div className='border flex justify-between items-center w-full py-2 px-4'>
                        <div className='flex space-x-1 items-center'>
                            <div className='font-semibold text-sm'>Store Info:</div>
                            <div className='h-5 w-5 rounded-full bg-[#C1CF16]' />
                            <div>{"product.store.name"}</div>
                        </div>
                        <div>
                            <Button label='Contact Store' onClick={() => alert('Clicked!')}>
                                <BiPhone color='#C1CF16' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <section className='py-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index}>
                            <ProductItem index={index} productName={"product.name"} thumbnail={"product.thumbnail[0]"} unitPrice={400} productId={"product.id"} />
                        </div>
                    ))}
                </div>
            </section>
            <section className='py-4'>
                <OpenYourStore />
            </section>
        </section>
    );
};

export default ProductDetails;
