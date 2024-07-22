import React from 'react'
import ProductItem from '../products/ProductItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store';

const FavoriteItems = () => {

  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  return (
    <div>
      <div className='py-6 text-center bg-[#F7F8FB]'>
        <h1 className='font-bold text-xl'>Saved PRoducts</h1>
        <h4 className='text-gray-400'>{favorites.length} Saved</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {favorites.map((item, index) => (
          <div key={index}>
            <ProductItem
              index={index}
              productName={item.productName}
              thumbnail={item.thumbnail}
              unitPrice={item.price}
              productId={item.productId}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoriteItems