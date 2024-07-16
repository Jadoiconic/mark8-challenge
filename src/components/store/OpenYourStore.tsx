"use client"
import React, { useState } from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";

const OpenYourStore = () => {
  const [email, setEmail] = useState("")
  return (
    <div id="OpenStore" className='md:flex lg:flex w-full justify-between items-center bg-[#F7F8FB] py-12 px-8 rounded'>
      <h1 className='font-bold'><span className='text-[#C1CF16]'>Open</span> Your Store</h1>
      <div className='flex space-x-1'>
        <input
          value={email}
          type={'text'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
          placeholder={'Enter your Email'}
          className='py-2 px-8 md:w-[50vh] rounded bg-[#eee]'
        />
        <button  className='py-2 px-8 bg-[#C1CF16] rounded flex items-center space-x-2'><span>Submit</span> <FaLongArrowAltRight size={20} /></button>
      </div>
    </div>
  )
}

export default OpenYourStore