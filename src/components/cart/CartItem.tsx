import { decrement, increment } from '@/redux/features/counterSlice'
import { useAppDispatch } from '@/redux/hooks'
import { RootState } from '@/redux/store/store'
import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { useSelector } from 'react-redux'

export type CartItemProps = {
    index: number
}

const CartItem = ({ index }: CartItemProps) => {
    const counter = useSelector((state:RootState)=>state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <div className='py-4 border rounded-lg px-4 my-2'>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-4'>
                    <div> {index + 1}</div>
                    <div className='h-10 w-10 bg-[#F7F8FB] rounded-lg' />
                    <div>
                        <h1 className='font-semibold text-sm'>Product 1</h1>
                        <h4 className='text-slate-400 text-sm'>9000 Rwf</h4>
                    </div>
                </div>
                <div className='flex justify-center space-x-3'>
                    <button className='px-4 py-1 border rounded' onClick={()=>dispatch(decrement())}>-</button>
                    <div className='bg-[#0C0C0D0A] px-8 py-1'>{counter}</div>
                    <button className='px-4 py-1 border rounded' onClick={()=>dispatch(increment())}>+</button>
                    <button className='px-4 py-1 border rounded'><BiTrash color='red' size={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem