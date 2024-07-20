import { incrementQuantity, decrementQuantity, removeProduct } from '@/redux/features/cartSlice'
import { useAppDispatch } from '@/redux/hooks'
import React from 'react'
import { BiTrash } from 'react-icons/bi'

export type CartItemProps = {
    productName:string
    index: number
    quantity:number
    price:number

}

const CartItem = ({ index , productName, quantity, price}: CartItemProps) => {
    const dispatch = useAppDispatch()
    return (
        <div key={index} className='py-4 border rounded-lg px-4 my-2'>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-4'>
                    <div> {index + 1}</div>
                    <div className='h-10 w-10 bg-[#F7F8FB] rounded-lg' />
                    <div>
                        <h1 className='font-semibold text-sm'>{productName}</h1>
                        <h4 className='text-slate-400 text-sm'>{price} Rwf</h4>
                    </div>
                </div>
                <div className='flex justify-center space-x-3'>
                    <button className='px-4 py-1 border rounded' onClick={()=>dispatch(decrementQuantity(productName))}>-</button>
                    <div className='bg-[#0C0C0D0A] px-8 py-1'>{quantity}</div>
                    <button className='px-4 py-1 border rounded' onClick={()=>dispatch(incrementQuantity(productName))}>+</button>
                    <button className='px-4 py-1 border rounded'><BiTrash onClick={()=>dispatch(removeProduct(productName))} color='red' size={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem