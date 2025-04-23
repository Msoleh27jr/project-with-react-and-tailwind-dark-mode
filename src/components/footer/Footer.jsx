import React from 'react'

const Footer = ({logo}) => {
  return (
    <div>
        <footer className='max-w-[1600px] m-auto md:h-[500px] flex md:flex-row flex-col justify-between items-center'>
            <div className='w-[370px] md:h-[350px] pr-10 md:my-0 my-5'>
                <img src={logo} alt="" />
                <p className='text-[19px] my-4'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
            </div>
            <div className='w-[300px] md:h-[350px]'>
                <p className='text-[25px] font-bold my-4'>All products</p>
                <p className='text-[20px] my-4'>Phones</p>
                <p className='text-[20px] my-4'>Watch</p>
                <p className='text-[20px] my-4'>Tablet</p>
                <p className='text-[20px] my-4'>Laptops</p>
            </div>
            <div className='w-[300px] md:h-[350px]'>
                <p className='text-[25px] font-bold my-4'>Company</p>
                <p className='text-[20px] my-4'>About</p>
                <p className='text-[20px] my-4'>Support</p>
            </div>
            <div className='w-[300px] md:h-[350px]'>
                <p className='text-[25px] font-bold my-4'>Support</p>
                <p className='text-[20px] my-4'>Style Guide</p>
                <p className='text-[20px] my-4'>Licensing</p>
                <p className='text-[20px] my-4'>Change Log</p>
                <p className='text-[20px] my-4'>Contact</p>
            </div>
            <div className='w-[300px] md:h-[350px]'>
                <p className='text-[25px] font-bold my-4'>Follow Us</p>
                <p className='text-[20px] my-4'>Instagram</p>
                <p className='text-[20px] my-4'>Facebook</p>
                <p className='text-[20px] my-4'>LinkedIn</p>
                <p className='text-[20px] my-4'>Youtube</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer