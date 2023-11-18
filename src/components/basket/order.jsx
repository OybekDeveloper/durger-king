import React from 'react'
import OrderItem from './order-item'
import { useNavigate } from 'react-router';

const Order = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='container p-5 text-zinc-50'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl'>YOUR ORDER</h1>
                    <button onClick={() => navigate('/')} className='text-green-400'>edit</button>
                </div>
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>
            <div className='mt-4 flex justify-center fixed bottom-0 w-full z-10 text-zinc-50 h-16'>
                <button
                    style={{ width: '100%' }}
                    className='bg-green-600 py-2 px-4 '
                    onClick={() => navigate('/backet')}
                >
                    Pay $32.21
                </button>
            </div>
            </>
    )
}

export default Order