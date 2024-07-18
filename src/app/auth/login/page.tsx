import React from 'react';
import Image from 'next/image';
import bgImage from '../../../assets/bg-image.png';
import Login from '@/components/auth/Login';

const SignInPage = () => {
    return (
        <div className='relative h-screen w-full'>
            <Image
                src={bgImage}
                alt="bg"
                layout='fill'
                objectFit='cover'
                quality={100}
                className='z-0 bg-[#E3E3E3]'
            />
            <div className='absolute inset-0 flex items-center justify-center z-10'>
            
                <Login />
            </div>
        </div>
    );
};

export default SignInPage;
