import React from 'react'

const BoxSale = ({text , name , btn , img}) => {
  return (
    <div>
        <div className='md:w-[500px] w-[350px] h-[540px] dark:bg-gray-400 bg-[#F8F9FA] rounded-2xl flex flex-col items-center justify-center gap-7'>
            <div className='text-center'> 
            <h3 className='text-[20px]'>{text}</h3>
            <h2 className='text-[30px] font-bold'>{name}</h2>
            </div>
            {btn}
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default BoxSale