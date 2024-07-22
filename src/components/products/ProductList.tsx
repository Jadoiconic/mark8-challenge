"use client"

import React, { useState, useEffect } from 'react';
import TopStore from './TopStore';
import ProductItem from './ProductItem';
import Button from '@/generic/components/button/Button';
import useFetch from '@/generic/hooks/fetch/useFetch';

import { LuFilter, LuSettings2 } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { retrieveUserAuth } from '@/generic/services/LocalStorage';
import Skeleton from '@/generic/components/skeleton/Skeleton';

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [totalNumber, setTotalNumber] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage] = useState(12);
  const [categories, setCategories] = useState<any[]>([]);
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const [categorySearchQuery, setCategorySearchQuery] = useState('');
  const { accessToken } = retrieveUserAuth();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const fetchProducts = async (pageNumber: number, recordsPerPage: number, searchQuery: string) => {
    const url = `https://api.mark8.awesomity.rw/products?pageNumber=${pageNumber}&recordsPerPage=${recordsPerPage}&searchQuery=${searchQuery}`;

    const headers = new Headers();
    headers.append("accept", "application/json");
    headers.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: headers,
    };

    try {
      setLoading(true)
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        setError(`Error: ${response.status}`);
      }

      const data = await response.json();
      setLoading(false)
      return data;
    } catch (error) {
      setError('Internal server Error check your network');
      setLoading(false)
      return null;
    }
  };

  const fetchCategories = async (pageNumber: number, recordsPerPage: number) => {

    const url = `https://api.mark8.awesomity.rw/categories?pageNumber=${pageNumber}&recordsPerPage=${recordsPerPage}`;

    const headers = new Headers();
    headers.append("accept", "application/json");
    headers.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: headers,
    };

    try {
      setLoading(true)
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        setError(`Error: ${response.status}`);
      }

      const data = await response.json();
      setLoading(false)
      return data;
    } catch (error) {
      setError('Fetch error, check your internet connection');
      setLoading(false)
      return null;
    }
  };

  useEffect(() => {
    fetchProducts(pageNumber, recordsPerPage, productSearchQuery).then(data => {
      if (data) {
        setTotalNumber(data.data.pagination.totalRecords);
        setProducts(prevProducts => [...prevProducts, ...data.data.products]);
      }
    });

    fetchCategories(1, 10).then(data => {
      if (data) {
        setCategories(data.data.categories);
      }
    });
  }, [pageNumber, productSearchQuery]);

  const handleLoadMore = async () => {
    if (!loading) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  const handleProductSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductSearchQuery(e.target.value);
    setProducts([]);
    setPageNumber(1);
  };

  const handleCategorySearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategorySearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(categorySearchQuery.toLowerCase())
  );
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(productSearchQuery.toLowerCase())
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <main className="py-6">
      <header className="bg-[#1a1f2b] text-white py-10 rounded">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome to <span className="text-[#a3d900]">Mark8</span>
          </h1>
          <p className="mt-2">12,932 Products</p>
          <div className="relative mt-6 mx-auto w-full max-w-2xl">
            <input
              value={productSearchQuery}
              onChange={handleProductSearchChange}
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <LuPackage size={30} className="mr-2 h-6 w-6 text-[#a3d9a5]" />
          Recent Products ({totalNumber})
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
        <div className='lg:w-3/4 md:w-3/4'>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductItem
                key={index}
                index={index}
                productName={product.name}
                thumbnail={product.thumbnail[0]}
                unitPrice={product.unitPrice}
                productId={product.id}
              />
            ))}
          </div>
          <div className='flex w-full py-4 justify-center items-center font-bold'>
            <Button label={'Load More'} onClick={handleLoadMore}>
              <FaChevronDown color='#C1CF16' />
            </Button>
          </div>
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
                value={categorySearchQuery}
                onChange={handleCategorySearchChange}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
              />
              <LuFilter size={30} className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {filteredCategories.map((category, index) => (
                <div key={index}>
                  <TopStore index={index} categoryName={category.name} />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ProductList;
