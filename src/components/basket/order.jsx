import React from 'react'
import OrderItem from './order-item'
import { useNavigate } from 'react-router';

const Order = () => {
    const navigate = useNavigate();

    return (
        <div className='container p-5 text-zinc-50'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>YOUR ORDER</h1>
                <button onClick={() => navigate('/')} className='text-green-400'>edit</button>
            </div>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
    )
}

export default Order