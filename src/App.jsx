import React from 'react'
import BoxSale from './components/forFourthSectionSale/BoxSale'
import Header from './components/header/Header'
import Logo from './assets/IMAGE (38).png'
import Boxs from './components/forThirdSecBox/Boxs'
import HeroFirstSection from './assets/IMAGE (39).png'
import imgForSecondSec from './assets/IMAGE (40).png'
import imgForSecondSec2 from './assets/IMAGE (41).png'
import imgForSecondSec3 from './assets/IMAGE (42).png'
import imgForSecondSec4 from './assets/IMAGE (43).png'
import boxSaleImg from './assets/IMAGE (44).png'
import boxSaleImg2 from './assets/IMAGE (45).png'
import boxSaleImg3 from './assets/IMAGE (46).png'
import boxsImg from './assets/Frame (27).png'
import boxsImg2 from './assets/Frame (28).png'
import boxsImg3 from './assets/Frame (29).png'
import boxsImg4 from './assets/Frame (30).png'
import Button from './components/button/Button'
import image47 from './assets/IMAGE (47).png'
import imgForFifthS from './assets/Frame (31).png'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className=''>
      <Header logo={Logo} button={<Button text={"Explore"}/>} Hero={HeroFirstSection}/>
      {/* //////////////////////////////////////////// Second Section */}
      <section className='max-w-[90%] md:max-w-[1800px] m-auto mt-[50px]'>
        <div className='max-w-[850px] m-auto text-center'>
        <h2 className='text-5xl font-bold'>Shop our latest offers and categories</h2>
        <p className='text-[20px] my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
           <div className='md:max-w-[1800px] max-w-[100%] m-auto md:h-[800px] h-[100%] my-10 flex md:flex-row md:gap-0 gap-5 flex-col justify-between'>
            <div className='md:w-[47%] max-w-[100%] flex flex-col justify-between h-[100%] gap-5 md:gap-6'>
              <div className='w-[100%] shadow-[10px_10px_40px_gray] md:h-[500px] h-[400px]'>
                <img className='md:ml-14' src={imgForSecondSec} alt="" />
                <h2 className='text-end md:mr-3.5 text-[40px] font-bold'>True Laptop <br /> Solution</h2>
              </div>
              <div className='w-[100%] h-[400px] flex md:flex-row flex-col justify-evenly shadow-[10px_10px_40px_gray]'>
                <img src={imgForSecondSec2} alt="" />
                <h2 className='text-[40px] font-bold md:my-10'>Not just <br /> stylisht</h2>
              </div>
            </div>
            {/* ////////////////////////////////// */}
            <div className='md:w-[47%] w-[100%] md:h-[800px] h-[500px] flex justify-between'>
              <div className='w-[47%] h-[100%] flex flex-col justify-center pl-2.5 shadow-[10px_10px_40px_gray]'>
                <img src={imgForSecondSec3} alt="" />
                <h2 className='w-[100%] text-center md:text-[40px] text-[30px] font-bold'>Your day to day <br /> life</h2>
              </div>
              <div className='w-[47%] h-[100%] flex flex-col justify-center shadow-[10px_10px_40px_gray]'>
                <h2 className='w-[100%] text-center md:text-[40px] text-[30px] font-bold'>Empower your <br /> work</h2>
                <img src={imgForSecondSec4} alt="" />
              </div>
            </div>
           </div>
      </section>
      {/* /////////////////////////////////////////// Third Section */}
      <section className=''>
        <div className='max-w-[850px] m-auto text-center my-[60px]'>
        <h2 className='text-5xl font-bold'>Save on our most selled items.</h2>
        <p className='text-[20px] my-3'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className='md:max-w-[1800px] m-auto md:h-[540px] my-10 flex justify-between items-center md:gap-0 gap-5 md:flex-row flex-col max-w-[100%]'>
          <Boxs text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'} name={'MacBook Pro 13'} img={boxsImg} price={'$ 1,200.00 USD'}/>
          <Boxs text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'} name={'Smart Galaxy Watch 3'} img={boxsImg2} price={'$ 199.00 USD'}/>
          <Boxs text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'} name={'MacBook Air M1'} img={boxsImg3} price={'$ 1,009.00 USD'}/>
          <Boxs text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'} name={'iPad'} img={boxsImg4} price={'$ 610.00 USD'}/>
        </div>
      </section>
      {/* /////////////////////////////////////////// fourth Section */}
      <section>
      <div className='max-w-[850px] m-auto text-center my-[60px]'>
        <h2 className='text-5xl font-bold'>See the best around here</h2>
        <p className='text-[20px] my-3'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className='md:max-w-[1800px] m-auto md:h-[540px] my-10 flex justify-between items-center md:gap-0 gap-5 md:flex-row flex-col max-w-[100%]'>
          <BoxSale text={'Smart light bulb pack'} name={'Latest and gratest'} img={boxSaleImg} btn={< Button text={"Explore"}/>}/>
          <BoxSale text={'Smart light bulb pack'} name={'Best selling'} img={boxSaleImg2} btn={< Button text={"Explore"}/>}/>
          <BoxSale text={'Smart light bulb pack'} name={'Every product'} img={boxSaleImg3} btn={< Button text={"Explore"}/>}/>
        </div>
      </section>
      {/* /////////////////////////////////////////// fifth Section */}
      <section className='max-w-[1800px] m-auto h-[900px]'>
      <div className='max-w-[850px] m-auto text-center my-[60px]'>
        <h2 className='text-5xl font-bold'>Ideas have a place here</h2>
        <p className='text-[20px] my-3'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className='flex max-w-[1800px] m-autof justify-between flex-col md:flex-row items-center md:items-start'>
          <img className='md:w-[50%] w-[90%]' src={imgForFifthS} alt="" />
          <aside className='md:w-[45%] w-[90%] flex flex-col gap-10'>
            <h2 className='md:text-4xl text-2xl'>We Make It Easy To Find The Great Design Talent, Easier...</h2>
            <h2 className='md:text-4xl text-2xl'>Road Design Handbook For The International Road...</h2>
            <h2 className='md:text-4xl text-2xl'>The Best Kept Secrets About Creative People</h2>
            <h2 className='md:text-4xl text-2xl'>We Make It Easy To Find The Great Design Talent, Easier...</h2>
          </aside>
        </div>
      </section>
      {/* /////////////////////////////////////////// sixth Section */}
      <section className='max-w-[1800px] m-auto md:h-[300px] my-[50px] flex items-center flex-col gap-5 text-center'>
        <h2 className='text-4xl font-bold'>Looking for anything else?</h2>
        <input className='text-[16px] border-1 dark:bg-[#292929] bg-[#f3f3f3] py-3 md:w-[670px] px-7 rounded-3xl' type="text" placeholder='Search Keyword' />
        <div className='md:w-[650px] w-[90%] flex flex-wrap gap-2.5 items-center justify-center'>
          <Button text={'iPhone'}/>
          <Button text={'Charger'}/>
          <Button text={'Gift'}/>
          <Button text={'Google Pixel 3'}/>
          <Button text={'Keyboard'}/>
          <Button text={'13 Pro Max'}/>
          <Button text={'iPhone 12'}/>
          <Button text={'Laptop'}/>
          <Button text={'Mobile'}/>
        </div>
      </section>
      {/* ////////////////////////////////////////// seventh Section */}
      <section className='md:max-w-[1200px] max-w-[95%] m-auto h-[500px] bg-[#DCE5E2] dark:bg-blue-950 rounded-2xl mb-10 flex flex-col items-center justify-evenly'>
        <div className='text-center'>
        <h2 className='text-5xl font-bold'>Never miss a thing</h2>
        <p className='text-[20px] my-2'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </div>
        <img src={image47} alt="" />
        <div className='border-1 rounded-2xl md:w-[400px] flex justify-between'>
          <input type="text"  placeholder='Your email' className='md:w-[80.5%] px-5'/>
          <button className='h-[40px] px-3 rounded-r-2xl text-white bg-black'>Sign up</button>
        </div>
      </section>
      {/* /////////////////////////////////////////// footer */}
      <section className='max-w-[1900px] m-auto md:h-[500.1px] bg-[#F8F9FA] dark:bg-blue-950'>
        <Footer logo={Logo}/>
      </section>
    </div>
  )
}

export default App