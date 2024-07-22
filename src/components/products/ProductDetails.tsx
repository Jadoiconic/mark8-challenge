'use client';

import { useEffect, useState } from 'react';
import { BiPhone } from 'react-icons/bi';
import { FaRegHeart, FaHeart, FaRegStar } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';
import Button from '@/generic/components/button/Button';
import ProductItem from './ProductItem';
import OpenYourStore from '../store/OpenYourStore';
import { useParams } from 'next/navigation';
import { retrieveUserAuth } from '@/generic/services/LocalStorage';
import Skeleton from '@/generic/components/skeleton/Skeleton';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [isSelected, setIsSelected] = useState(0);
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        async function fetchProductDetails() {
            const { accessToken } = retrieveUserAuth();

            if (!id) {
                setError('Product ID is not available.');
                setLoading(false);
                return;
            }

            const url = `https://api.mark8.awesomity.rw/products/${id}`;
            const options = {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    setError(`HTTP error! status: ${response.status}`);
                    setLoading(false);
                    return;
                }
                const data = await response.json();
                setProduct(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Error fetching product');
                setLoading(false);
            }
        }

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <Skeleton />;
    }
    if (error) {
        return <p>{error}</p>;
    }
    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <div className='flex justify-between space-x-5'>
                <div className='rounded-lg bg-white overflow-hidden border md:w-1/3'>
                    <div className='bg-[#F7F8FB] h-[40vh] w-full'>
                        <img src={product.thumbnail[isSelected]} className='w-full h-full object-cover' alt={product.name} />
                    </div>
                    <div className='p-2 flex space-x-1'>
                        {product.thumbnail.map((thumb, index) => (
                            <div
                                key={index}
                                className={`bg-[#F7F8FB] ${isSelected === index ? 'border-2 border-[#C1CF16]' : ''} rounded-lg h-[5vh] md:w-[5vh] cursor-pointer`}
                                onClick={() => setIsSelected(index)}
                            >
                                <img src={thumb} className='w-full h-full object-cover' alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='rounded-lg bg-white overflow-hidden border md:w-2/3'>
                    {/* Card header */}
                    <div className='flex justify-between items-center border'>
                        <div className='p-4 flex space-x-3'>
                            <h1 className='font-semibold'>{product.name}</h1>
                            <span className='bg-[#F7F8FB] p-1 font-normal rounded-lg text-xs'>{product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}</span>
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
                            {product.unitPrice} Rwf <span className='text-slate-400'>{product.originalPrice || product.unitPrice} Rwf</span>
                        </p>
                        <h1 className='font-semibold'>Description</h1>
                        <p className='py-1'>{product.description}</p>
                        <h1 className='font-semibold'>Reviews</h1>
                        {product.reviews.length > 0 ? (
                            product.reviews.map(review => (
                                <div key={review.id} className='flex flex-col space-y-2 py-2'>
                                    <div className='flex space-x-2 items-center'>
                                        <FaRegStar color='#C1CF16' size={20} />
                                        <span className='font-semibold text-xs'>{review.rating}</span>
                                        <span className='text-slate-400'>({review.comment})</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </div>

                    {/* Card footer */}
                    <div className='border flex justify-between items-center w-full py-2 px-4'>
                        <div className='flex space-x-1 items-center'>
                            <div className='font-semibold text-sm'>Store Info:</div>
                            <div className='h-5 w-5 rounded-full bg-[#C1CF16]' />
                            <div>{product.createdBy.email}</div>
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
                            <ProductItem index={index} productName={product.name} thumbnail={product.thumbnail[0]} unitPrice={product.unitPrice} productId={product.id} />
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
