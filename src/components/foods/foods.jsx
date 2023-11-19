import React, { useState } from 'react'
import Food from './food'
import { useNavigate } from 'react-router';
import foodsData from '../../data/food.data';

const Foods = () => {
  const [openBacket, setOpenBacket] = useState(false);
  const navigate =useNavigate()
  return (
    <>
      <div className='mx-auto grid grid-cols-3 md:grid-cols-4 gap-4 m-3 '>
        {foodsData.map((item,idx)=>(
          <Food key={item.id} foodsData={item} openBacket={openBacket} setOpenBacket={setOpenBacket} />
        ))}
      </div>
      {openBacket ? (
        <div className=' h-16 mt-4 flex justify-center fixed bottom-0 w-full z-10 text-zinc-50'>
          <button
            style={{ width: '100%' }}
            className='bg-green-600 py-2 px-4 '
            onClick={()=>navigate('/backet')}
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