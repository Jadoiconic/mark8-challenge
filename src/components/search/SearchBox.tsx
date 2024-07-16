"use client"

// import SearchInput from '@/generic/components/searchInput/SearchInput'
import React, { useState } from 'react'

import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";



const SearchBox = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <header className="bg-[#1a1f2b] text-white py-10 rounded">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome to <span className="text-[#a3d900]">Mark8</span>
          </h1>
          <p className="mt-2">12,932 Products</p>
          <div className="relative mt-6 mx-auto w-full max-w-2xl">
            <input
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-3 pl-10 pr-10 rounded bg-[#2b3240] text-white placeholder-gray-400"
            />
            
            <IoSearch
        size={20}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a3d900]"
      />
      <LuSettings2
        size={20}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90"
        style={{ color: "white" }}
      />
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="text-white border rounded-full px-4 py-1 border-white">
              All
            </button>
            <button className="text-gray-400 border rounded-full px-4 py-1 border-gray-400">
              Vectors
            </button>
            <button className="text-gray-400 border rounded-full px-4 py-1 border-gray-400">
              Icons
            </button>
            <button className="text-gray-400 border rounded-full px-4 py-1 border-gray-400">
              Backgrounds
            </button>
          </div>
        </div>
      </header>
  )
}

export default SearchBox