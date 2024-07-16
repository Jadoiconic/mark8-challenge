import React from 'react'
import ProductItem from '../products/ProductItem'

const FavoriteItems = () => {
  return (
    <div>
        <div className='py-6 text-center bg-[#F7F8FB]'>
            <h1 className='font-bold text-xl'>Saved PRoducts</h1>
            <h4 className='text-gray-400'>8 Saved</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <ProductItem index={index} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default FavoriteItems