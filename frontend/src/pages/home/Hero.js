import React from 'react'
import '../../Font.css'
import HeroList from '../../components/list/HeroList'
import HoldingPlantSvg from '../../components/svg/HoldingPlantSvg'
import ArrowTop from '../../components/svg/ArrowTop'
import RegularButton from '../../components/buttons/RegularButton'

const Hero = () => {
  return (
    <section style={{ height: '180vh' }} className='roboto-slab-regular bg-hero-image bg-cover bg-center text-softWhite flex flex-col gap-32'>
      <div className='w-100 flex justify-between '>
        <h1 style={{ fontSize: '15rem', lineHeight: '1' }} className='roboto-slab-bold w-2/3 h-fit pl-12'>Choose Green, Live Clean.</h1>
        <div className='w-auto h-auto flex flex-col justify-end items-start gap-10 bg-transparent'>
          <h3 className='roboto-slab-bold text-xl w-3/4 h-fit'>EMBRACE EVERY MOMENT WITH OUR THOUGHTFULLY CRAFTED ECO-FRIENDLY PRODUCTS, DESIGNED TO ENCHANCE YOUR LIFESTYLE AND CARE FOR THE PLANET.</h3>
          <RegularButton buttonText={'SHOP NOW'} navigateTo={'#'}/>
        </div>
      </div>
      <div className='w-full h-full bg-transparent px-12 pb-12 flex text-white'>
        <div className='roboto-slab-semibold w-2/5 h-full border border-softWhite rounded-xl flex flex-col items-center justify-center p-12 text-2xl text-center'>
          <p>A JAKARTA</p>
          <p>SPECIALITY</p>
          <p>ECO-FRIENDLY</p>
          <p className='mb-5'>PRODUCTS</p>
          <HoldingPlantSvg />
        </div>
        <div className='flex flex-col w-full'>
          <ul className='flex h-full'>
            <HeroList />
            <HeroList />
            <HeroList />
          </ul>
          <div className='roboto-slab-bold text-xl p-5 px-10 border border-softWhite rounded-xl flex items-center justify-center'>
            <ArrowTop/>
            <ArrowTop/>
            <ArrowTop/>
            <ArrowTop/>
            <ArrowTop/>
            <span className='mx-4'>NEW ** CHECK OUT OUR NEW PRODUCTS ** NEW</span>
            <ArrowTop/>
            <ArrowTop/>
            <ArrowTop/>
            <ArrowTop/>
            <ArrowTop/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero