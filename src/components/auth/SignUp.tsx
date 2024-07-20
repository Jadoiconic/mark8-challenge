"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiLock } from "react-icons/fi";
import TextInput from '@/generic/components/searchInput/TextInput';
import { BiLogInCircle, BiPhone, BiUser } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import useAuth from '@/generic/hooks/auth/useAuth';
import { UserSignUp } from '@/generic/types';
import cn from '@/generic/utils/cn';

const SignUp = () => {

    const {signUp,loading,error:serverError} = useAuth()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("250");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const router = useRouter()

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if(password.length < 8){
            setError("Password less than 8 characters")
            return
        }

        const user: UserSignUp =  {
            email,
            password,
            firstName,
            lastName,
            phoneNumber: phone
        }

     const response =  await  signUp(user)

    };

    const hasErrors = serverError !== null

    return (
        <div className='md:w-2/5 lg:w-2/5 xl:w-2/5'>
            <form className='w-full bg-white overflow-hidden rounded-lg p-5' onSubmit={handleSignUp}>
                <h1 className='font-bold'>Register</h1>
                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-green-500">{success}</div>}
                <div className='w-full flex justify-between'>
                    {/* left */}
                    <div className='md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white'>
                        <label className='font-semibold text-sm'>First Name</label>
                        <TextInput
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type={'text'}
                            placeholder={'Enter First Name'}
                            background={'#eee'}
                            icon={BiUser}
                            iconColor={'#C1CF16'}
                        />
                        <label className='font-semibold text-sm'>Email</label>
                        <TextInput
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type={'text'}
                            placeholder={'Enter Email'}
                            background={'#eee'}
                            icon={MdOutlineMailOutline}
                            iconColor={'#C1CF16'}
                        />
                        <label className='font-semibold text-sm'>Password</label>
                        <TextInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={'password'}
                            placeholder={'Enter Password'}
                            background={'#eee'}
                            icon={FiLock}
                            iconColor={'#C1CF16'}
                        />
                    </div>
                    {/* right */}
                    <div className='md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white pl-5'>
                        <label className='font-semibold text-sm'>Last Name</label>
                        <TextInput
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type={'text'}
                            placeholder={'Enter Last Name'}
                            background={'#eee'}
                            icon={BiUser}
                            iconColor={'#C1CF16'}
                        />
                        <label className='font-semibold text-sm'>Phone Number</label>
                        <TextInput
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type={'tel'}
                            placeholder={'Enter Phone Number'}
                            background={'#eee'}
                            icon={BiPhone}
                            iconColor={'#C1CF16'}
                        />
                        <label className='font-semibold text-sm'>Confirm Password</label>
                        <TextInput
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type={'password'}
                            placeholder={'Enter Password'}
                            background={'#eee'}
                            icon={FiLock}
                            iconColor={'#C1CF16'}
                        />
                    </div>
                </div>

                {hasErrors && 
                
                serverError.message.map((error,index)=>  <div key={index} className="text-red-500"> {index + 1}. {error}</div> )}
                <div className='flex justify-between px-5 pt-8'>
                    <div className='text-sm'>
                        <input type="checkbox"  className='border-[#C1CF16] border' /> I agree to the <span className='underlined'>Terms and conditions</span></div>
                    
                   
                    
                    <button disabled={loading} type='submit' className= {cn('py-1 px-4 items-center flex space-x-2 rounded-lg bg-[#C1CF16]',{"bg-gray-300":loading})}>
                        <span>Register</span> <BiLogInCircle />
                    </button>
                </div>
            </form>

            {/* card footer */}
            <div className='bg-white flex justify-between p-5 my-4 rounded-lg'>
                <div>
                    <h1 className='font-semibold text-sm'>Already have account?</h1>
                    <p className='text-sm font-thin text-slate-400'>Go to Login</p>
                </div>
                <Link href="/auth/login" className='px-4 rounded-lg font-bold text-sm border border-[#C1CF16] text-[#C1CF16] flex space-x-2 items-center'>
                    <span>Login Here</span>
                    <BiLogInCircle size={20} color='#C1CF16' />
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
