
import React from 'react';
import Image from 'next/image';
import bgImage from '../../../assets/bg-image.png';
import SignUp from '@/components/auth/SignUp';

const SignUpPage = () => {
    return (
        <div className='relative h-screen w-full'>
            <Image
                src={bgImage}
                alt="bg"
                style={{ objectFit: "cover", height:"100%" }}
                quality={100}
                className='z-0 bg-[#E3E3E3]'
            />
            <div className='absolute inset-0 flex items-center justify-center z-10'>
                <SignUp />
            </div>
        </div>
    );
};

export default SignUpPage;
