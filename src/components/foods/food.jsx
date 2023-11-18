import React, { useState } from 'react'

const Food = ({setOpenBacket,openBacket}) => {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count + 1);
    }
    const handleDec = () => {
        if(count>0){
            setCount(count - 1);
        }else if(count<=0){
            setCount(0);
            setOpenBacket(false);
        }
    }

    const handleActive = () => {
        setCount(1);
        setOpenBacket(true)
    }

    return (
        <div className='container'>
            <div>
                <div className='flex  relative justify-between'>
                    <img width={'100px'} src='https://truegis-webview.firebaseapp.com/img/cafe/Burger_148.png' alt='img' />
                    {count <= 0 ? null : (
                        <span style={{ width: '25px', height: '25px' }} className=' flex justify-center items-center absolute text-zinc-50 bg-yellow-400 p-1  rounded-full'>{count}</span>
                    )}
                </div>
                <div className='py-2 text-zinc-50'>
                    <span className='font-ligth'>Burger-</span>
                    <span className='font-bold'>$4.99</span>
                </div>
                <div className='flex justify-center'>
                    {count!==0 ? (
                        <>
                            <button  onClick={handleDec} className=' flex justify-center , items-center h-8 w-12 bg-red-500 text-zinc-50 px-2 py-1 rounded-md mr-1'>
                                <p style={{fontSize:'35px'}}>-</p>    
                            </button>
                            <button  onClick={handleInc} className=' flex justify-center , items-center h-8 w-12 bg-yellow-400 text-zinc-50 px-2 py-1 rounded-md mr-1'>
                                <p  style={{fontSize:'35px'}}>+</p>    
                            </button>
                            </>
                    ) : (
                        <button onClick={handleActive} className='w-24 bg-yellow-400  text-white px-2 py-1 rounded-md mr-2 font-bold'> Add</button>

                    )}

                </div>
            </div>
        </div>
    )
}

export default Food