import React, { useState } from 'react'
import Food from './food'
import {  useNavigate } from 'react-router';
import foodsData from '../../data/food.data';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cardSlice';
const Foods = () => {
  const [openBacket, setOpenBacket] = useState(false);
  const navigate = useNavigate()
  const {items} = useSelector(selectCart)
  return (
    <>
      <div className='mx-auto grid grid-cols-3 md:grid-cols-4 gap-4 mb-20 '>
        {foodsData.map((item, idx) => (
          <Food key={item.id} foodsData={item} openBacket={openBacket} setOpenBacket={setOpenBacket}/>
        ))}
      </div>
      {items.length>0 ? (
        <div className=' h-16 mt-4 flex justify-center fixed bottom-0 w-full z-10 text-zinc-50'>
          <button
            style={{ width: '100%' }}
            className='bg-green-600 py-2 px-4 '
            onClick={() => navigate('/backet')}
          >
            View Order
          </button>
        </div>
      ) : ('')
      }
    </>
  )
}

export default Foods