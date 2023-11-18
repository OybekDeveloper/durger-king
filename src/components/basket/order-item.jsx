import React from 'react'

const OrderItem = () => {
  return (
    <div>

      <div className='flex justify-between items-center mt-5'>
        <div className='flex justify-between items-center'>
          <img className='mr-2' width={'80px'} src='https://truegis-webview.firebaseapp.com/img/cafe/Burger_148.png' alt='img' />
          <div>
            <span>Pizza </span>
            <span className='text-yellow-600'>8x</span>
            <p className='bg font-light py-1 text-gray-400'>That's amore </p>
          </div>
        </div>
        <div>$34.32</div>
      </div>
    </div>
  )
}

export default OrderItem