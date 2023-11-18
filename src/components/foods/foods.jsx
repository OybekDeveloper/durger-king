import React, { useState } from 'react'
import Food from './food'
import { useNavigate } from 'react-router';

const Foods = () => {
  const [openBacket, setOpenBacket] = useState(false);
  const navigate =useNavigate()
  return (
    <>
      <div className=' grid grid-cols-3 gap-4 m-3 '>
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
        <Food openBacket={openBacket} setOpenBacket={setOpenBacket} />
      </div>
      {openBacket ? (
        <div className='mt-4 flex justify-center fixed bottom-0 w-full z-10'>
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