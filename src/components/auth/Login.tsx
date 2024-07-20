"use client"

import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo/logo.png';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiLock } from "react-icons/fi";
import TextInput from '@/generic/components/searchInput/TextInput';
import Image from 'next/image';
import { BiLogInCircle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
  }

  return (
    <div className='md:w-2/5 lg:w-2/5 xl:w-2/5'>
      {/* card body */}
      <div className='w-full flex justify-between rounded-lg bg-[#F4F5F6] overflow-hidden'>
        {/* left */}
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/2 min-h-[27vh] p-5 flex flex-col justify-between'>
          <Image src={logo} width={40} height={40} alt='logo' quality={100} />
          <p className='text-xs text-slate-400 py-12'>By Awesomity Lab</p>
          <p className='text-xs text-slate-400'> &copy; 2024 Awesomity Lab</p>
        </div>
        {/* right */}
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white min-h-[27vh] p-5'>
          <h1 className='font-bold'>Login</h1>
          <form onSubmit={handleSubmit}>
            <label className='font-semibold text-sm '>Email</label>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={'text'}
              placeholder={'Enter Email'}
              background={'#eee'}
              icon={MdOutlineMailOutline}
              iconColor={'#C1CF16'}
            />
            <label className='font-semibold text-sm '>Password</label>
            <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={'password'}
              placeholder={'Enter Password'}
              background={'#eee'}
              icon={FiLock}
              iconColor={'#C1CF16'}
            />
            <div className='flex justify-between pt-4'>
              <Link href="/auth/forgot-password" className='font-semibold'>Forgot Password?</Link>
              <button type='submit' className='py-1 px-4 items-center flex space-x-2 rounded-lg bg-[#C1CF16]'>
                <span>Login</span> <BiLogInCircle />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* card footer */}
      <div className='bg-white flex justify-between p-5 my-4 rounded-lg'>
        <div>
          <h1 className='font-semibold text-sm'>New Here?</h1>
          <p className='text-sm font-thin text-slate-400'>Create an account</p>
        </div>
        <Link href="/auth/signup" className='px-4 rounded-lg font-bold text-sm border flex space-x-2 items-center'>
          <span>Register Here</span>
          <FaArrowRightLong size={20} color='#C1CF16' />
        </Link>
      </div>
    </div>
  );
}

export default Login;
