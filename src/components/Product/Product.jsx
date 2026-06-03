import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Product = ({name, image, price}) => {
  return (
    <div className='bg-zinc-100 p-4 rounded-lg'>
        {/* card icon  */}
        <div className='flex justify-between'>
            <span className='text-3xl text-zinc-300 hover:text-zinc-400'><FaHeart /></span>
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-2 cursor-pointer rounded-sm'><FaPlus /></button>
        </div>
        
        {/* card image  */}
        <div className='w-full h-50'>
            <img src={image} className='w-full h-full object-contain' />
        </div>

        {/* card content  */}
        <div className='text-center mt-5'>
            <h3 className='text-2xl'>{name}</h3>
            <h5 className='text-xl font-bold mb-4'>AED {price.toFixed(2)}</h5>
            <Button content= "Add To cart" />
        </div>
    </div>
  )
}

export default Product