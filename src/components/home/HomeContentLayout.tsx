import React from 'react';
import DefaultLayOut from '../layout/DefaultLayOut';
import ProductList from '../products/ProductList';
import OpenYourStore from '../store/OpenYourStore';

const HomeContentLayout = () => {
  return (
    <DefaultLayOut>
      <div className='w-full bg-white'>
        {/* <div>
          <SearchBox />
        </div> */}
        <div>
          <ProductList />
        </div>
        <div>
          <OpenYourStore />
        </div>
        <div className='py-6' />
      </div>
    </DefaultLayOut>
  );
}

export default HomeContentLayout;
