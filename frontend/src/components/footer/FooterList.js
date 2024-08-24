import React from 'react'
import { Link } from "react-router-dom"


const FooterList = ({ text, link }) => {
  return (
    <li className='poppins-regular text-softWhite max-w-72 hover:text-mutedBlue transition-colors duration-300 ease-in-out'><Link to={link}>{text}</Link></li>
  )
}

export default FooterList