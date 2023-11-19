import React from 'react'

const OrderItem = ({foodsData,totalPrice}) => {
  const {desc,name,quantity,img}=foodsData
  return (
    
    <div>
      <div className='flex justify-between items-center mt-5'>
        <div className='flex justify-between items-center'>
          <img className='mr-2' width={'80px'} src={img} alt='img' />
          <div>
            <span>{name} </span>
            <span className='text-yellow-600'>{quantity}x</span>
            <p className='bg font-light py-1 text-gray-400'>{desc}</p>
          </div>
        </div>
        <div>$34.32</div>
      </div>
    </div>
  )
}

export default OrderItem