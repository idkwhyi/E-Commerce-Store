import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegularButton = ({ buttonText, navigateTo }) => {
  const navigate = useNavigate()

  const buttonClicked = () => {
    navigate(navigateTo)
  }

  return (
    <button 
      className='roboto-slab-bold p-1 rounded-sm bg-softWhite text-deepCharcoal text-2xl hover:bg-deepCharcoal hover:text-softWhite transition-colors duration-300 ease-in-out'
      onClick={buttonClicked}
    >{buttonText}
    </button>
  )
}

export default RegularButton