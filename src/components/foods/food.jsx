import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, selectCart } from '../../redux/slices/cardSlice';


const Food = ({ setOpenBacket, foodsData }) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const {items}=useSelector(selectCart)

    const quantity=items.find(c=>c.id===foodsData.id);
    console.log(quantity)

    const handleInc = () => {
        setCount(count + 1);
        dispatch(addItem(foodsData));
    }

    const handleDec = () => {
        if (count > 0) {
            setCount(count - 1);
        } else if (count <= 0) {
            setCount(0);
        }
        if (count === 1) setOpenBacket(false);
       dispatch(minusItem(foodsData.id));
    }


    return (
        <div className='container'>
            <div>
                <div className='flex justify-center'>
                    <div className=' mx-auto flex  relative justify-between'>
                        <img width={'100px'} src={foodsData.img} alt='img' />
                        {quantity?.quantity>0 && (
                            <span style={{ width: '25px', height: '25px' }} className=' flex justify-center items-center absolute text-zinc-50 bg-yellow-400 p-1  rounded-full'>{quantity.quantity}</span>
                        )}
                    </div>
                </div>
                <div className=' flex justify-center py-2 text-zinc-50 '>
                    <span className='font-ligth'>{foodsData.name}-</span>
                    <span className='font-bold'>${foodsData.price}</span>
                </div>
                <div className='flex justify-center'>
                    {quantity?.quantity ? (
                        <>
                            <button
                                type='button'
                                onClick={handleDec}
                                className='cursor-auto text-3xl flex justify-center items-center h-8 w-12 bg-red-500 text-zinc-50 px-2 py-1 rounded-md mr-1 transform transition-transform duration-300 group-hover:scale-105 '
                            >
                                -
                            </button>

                            <button
                                type='button'
                                onClick={handleInc}
                                className=' animate-spin cursor-auto text-3xl flex justify-center items-center h-8 w-12 bg-yellow-400 text-zinc-50 px-2 py-1 rounded-md mr-1 transform transition-transform duration-300 group group-hover:scale-105 '
                            >
                                +
                            </button>

                        </>
                    ) : (
                        <button type='button' onClick={handleInc} className=' cursor-auto  w-24 bg-yellow-400  text-white px-2 py-1 rounded-md mr-2 font-bold transform transition-transform duration-300 group-hover:scale-105'> Add</button>

                    )}

                </div>
            </div>
        </div>
    )
}

export default Food