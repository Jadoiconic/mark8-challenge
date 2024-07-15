import React from 'react'
import TopStore from './TopStore'
import ProductItem from './ProductItem'

import { LuFilter } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";

const ProductList = () => {
  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <LuPackage size={30} className="mr-2 h-6 w-6 text-[#a3d9a5]" />
          Recent Products (100)
        </h2>
        <div className="flex space-x-2">
          <button className="p-2">
            <LuFilter size={30} className="h-5 w-5 font-bold" />
          </button>
          <button className="p-2">
            <LuLayoutGrid size={30} className="h-5 w-5 font-bold" />
          </button>
        </div>
      </div>
      <div className='md:flex lg:flex xl:flex w-full'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:w-3/4 md:w-3/4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <ProductItem index={index} />
            </div>
          ))}
        </div>
        <aside className="mt-6 lg:mt-0 lg:ml-6 md:1/4 lg:w-1/4">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Top 10 Stores</h3>
              <button className="p-2">
                <HiOutlineRefresh size={30} className="h-5 w-5 font-bold" />
              </button>
            </div>
            <div className="relative mb-4">
              <IoSearch size={30} className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search a store"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
              />
              <LuFilter size={30} className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                <TopStore index={index}/>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}




function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

export default ProductList