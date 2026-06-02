import React from 'react'

const Button = ({content}) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white md:px-6 px-4 py-2 rounded-sm hover:scale-105 hover:from-orange-600 transition-all duration-300 cursor-pointer'>
        {content}
    </button>
  )
}

export default Button