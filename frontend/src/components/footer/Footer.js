import React from 'react'
import { Link } from 'react-router-dom'
import FooterListHeader from './FooterListHeader'
import FooterList from './FooterList'

const Footer = () => {
  return (
    <footer className='roboto-slab-regular w-full h-auto bg-softBlack text-softWhite p-10'>
      <div className='w-full flex justify-between py-20'>
        <div className='h-auto flex flex-col gap-5'>
          <h2 className='roboto-slab-medium text-4xl text-coolGray'>LET'S CONNECT</h2>
          <Link className='poppins-medium text-2xl hover:text-mutedBlue transition-colors duration-300 ease-in-out' to='mailto:company@example.com'>companyemail@gmail.com</Link>
        </div>
        <div className='w-max flex justify-end px-20 gap-24'>
          <ul>
            <FooterListHeader headerText="Address" />
            <FooterList text={"Address Street Number 1 Jakarta Indonesia"} link="#" />
          </ul>
          <ul className='w-auto flex flex-col '>
            <FooterListHeader headerText="OUR PRODUCTS" />
            <FooterList text={"Product 1"} link={'#'} />
            <FooterList text={"Product 2"} link={'#'} />
            <FooterList text={"Product 3"} link={'#'} />
            <FooterList text={"Product 4"} link={'#'} />
          </ul>
          <ul>
            <FooterListHeader headerText={"PAGES"} />
            <FooterList text={"Page 1"} link={'#'} />
            <FooterList text={"Page 2"} link={'#'} />
            <FooterList text={"Page 3"} link={'#'} />
          </ul>
        </div>
      </div>
      <div className='w-full flex items-end justify-between'>
        <h2 className='roboto-slab-bold text-7xl'>FOLLOW US</h2>
        <ul className='w-auto flex items-center justify-center gap-5'>
          {/* Instagram */}
          <li className='bg-blue-400 w-16 h-16 btn-circle'>
            <Link className='w-16 h-16 text-center flex items-center justify-center btn-circle '>
              <svg
                className="w-full h-full btn-circle fill-current bg-softWhite hover:bg-softBlack border border-softWhite text-softBlack hover:text-softWhite transition-colors duration-300 ease-in-out"
                viewBox="0 0 24 24"
              >
                <path
                  d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                  transform="translate(2.7, 2.7) scale(0.8)"
                ></path>
              </svg>
            </Link>
          </li>
          {/* TikTok */}
          <li className='bg-blue-400 w-16 h-16 btn-circle'>
            <Link className='w-16 h-16 text-center flex items-center justify-center btn-circle '>
              <svg
                className="w-full h-full btn-circle fill-current bg-softWhite hover:bg-softBlack border border-softWhite text-softBlack hover:text-softWhite transition-colors duration-300 ease-in-out"
                viewBox="0 0 24 24"
              >
                <path
                  d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z"
                  transform="translate(2.7, 2.7) scale(0.8)"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
        <h2 className='roboto-slab-bold text-7xl w-1/2'>WHERE ECO MEETS EVERYDAY</h2>
      </div>
    </footer>
  )
}

export default Footer