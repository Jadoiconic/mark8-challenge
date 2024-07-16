
import React from "react";
import DefaultLayOut from "@/components/layout/DefaultLayOut";
import ProductDetails from "@/components/products/ProductDetails";
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";

const DetailPage = () => {
    return (
        <DefaultLayOut>
            <nav className="flex items-center text-gray-600 text-sm space-x-2 py-4">
                <Link href="/" className="flex items-center space-x-2 hover:text-primary">
                    <FaArrowLeftLong color="#C1CF16" className="w-4 h-4" />
                    <span>Home</span>
                </Link>
                <span>/</span>
                <Link href="#" className="hover:text-primary">
                    Product
                </Link>
                <span>/</span>
                <Link href="#" className="hover:text-primary">
                    Vectors
                </Link>
                <span>/</span>
                <span className="text-gray-400">Product 1</span>
            </nav>
                <ProductDetails />
           
        </DefaultLayOut>
    );
}

export default DetailPage;
