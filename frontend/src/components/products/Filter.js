import React from 'react'

const Filter = ({ handleSelectOption, urlValue, textValue }) => {
  return (
    <li
      className="w-full h-auto text-md min-w-[400px] max-h-[65px] text-softBlack cursor-pointer hover:bg-gray-100 text-sm rounded-md"
    >
      <button
        onClick={() => handleSelectOption(urlValue, textValue)}
        className='w-full h-full px-4 py-3 rounded-md text-left'
      >{textValue}</button>
    </li>
  )
}

export default Filter