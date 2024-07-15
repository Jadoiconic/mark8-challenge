"use client"
import Button from '@/generic/components/button/Button'
import SearchInput from '@/generic/components/searchInput/SearchInput'
import React, { useState } from 'react'




const SearchBox = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <header className="bg-[#1a1f2b] text-white py-10" style={{borderRadius:10}}>
      <div className="text-center rounded">
        <h1 className="text-3xl font-bold">
          Welcome to <span className="text-[#a3d900]">Mark8</span>
        </h1>
        <p className="mt-2">12,932 Products</p>
        <SearchInput value={inputValue} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value)} placeholder={''} />
        <div className="mt-4 flex justify-center space-x-2">
          <button className='border px-4 py-1 rounded-full'>All</button>
          <button className='border px-4 py-1 rounded-full border-[#79878F] text-[#79878F]'>Vector</button>
          <button className='border px-4 py-1 rounded-full border-[#79878F] text-[#79878F]'>Icons</button>
          <button className='border px-4 py-1 rounded-full border-[#79878F] text-[#79878F]'>Backgrounds</button>
        </div>
      </div>
    </header>
  )
}

export default SearchBox