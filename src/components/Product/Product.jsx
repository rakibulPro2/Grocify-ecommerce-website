import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Product = ({name, image, price}) => {
  return (
    <div className='bg-zinc-100 md:p-4 p-2 rounded-lg'>
        {/* card icon  */}
        <div className='flex justify-between'>
            <span className='md:text-3xl text-xl text-zinc-300 hover:text-zinc-400'><FaHeart /></span>
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white md:px-2 md:py-1 p-1 md:text-xl text-sm cursor-pointer rounded-sm'><FaPlus /></button>
        </div>
        
        {/* card image  */}
        <div className='w-full md:h-50 h-25'>
            <img src={image} className='w-full h-full object-contain' />
        </div>

        {/* card content  */}
        <div className='text-center md:mt-5 mt-1'>
            <h3 className='md:text-2xl text-xl'>{name}</h3>
            <h5 className='md:text-xl text-md font-bold mb-4'>AED {price.toFixed(2)}</h5>
            {/* <Button content= "Buy" /> */}
            <button className='md:w-fit w-full bg-gradient-to-b from-orange-400 to-orange-500 text-white md:px-8 px-3 py-1 rounded-sm hover:scale-105 hover:from-orange-600 transition-all duration-300 cursor-pointer md:text-lg text-sm'>Buy</button>
        </div>
    </div>
  )
}

export default Product