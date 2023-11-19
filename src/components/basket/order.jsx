import React from 'react'
import OrderItem from './order-item'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cardSlice';

const Order = () => {
    const navigate = useNavigate();
    const { items, totlaPrice } = useSelector(selectCart)
    console.log(items, 'items')

    return (
        <>
            <div className='container p-5 text-zinc-50 mb-20'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl'>YOUR ORDER</h1>
                    <button onClick={() => navigate('/')} className='text-green-400'>edit</button>
                </div>
                {items.map(item=>{
                    return item.quantity !== 0 && ( 
                    <OrderItem key={item.id} foodsData={item} totlaPrice={totlaPrice} />
                    )
                })}
            </div>
            <div className='mt-4 flex justify-center fixed bottom-0 w-full z-10 text-zinc-50 h-16'>
                <button
                    style={{ width: '100%' }}
                    className='bg-green-600 py-2 px-4  active:bg-yellow-200'
                    onClick={() => navigate('/backet')}
                >
                    Pay $32.21
                </button>
            </div>
        </>
    )
}

export default Order