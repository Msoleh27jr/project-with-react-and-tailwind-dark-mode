import React from 'react'

const Boxs = ({text , name , img , price}) => {
  return (
    <div>
        <div className='md:h-[540px] md:w-[400px] w-[300px] bg-white md:text-start text-center p-3 rounded-2xl'>
            <img className='w-[100%] rounded-2xl' src={img} alt="" />
            <h2 className='text-[25px] font-bold dark:text-black'>{name}</h2>
            <p className='text-[20px] h-[100px] dark:text-gray-600'>{text}</p>
            <p className='text-[24px] dark:text-black'>{price}</p>
        </div>
    </div>
  )
}

export default Boxs