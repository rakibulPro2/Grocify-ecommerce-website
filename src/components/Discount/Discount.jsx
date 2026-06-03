import React from 'react'
import HeadinLine from '../HeadinLine/HeadinLine'
import Button from '../Button/Button'
import FreshFruitsImg from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-contain bg-no-repeat bg-right' style={{backgroundImage: `url(${FreshFruitsImg})`}}>
        <div className="flex max-w-[1300px] mx-auto px-10 py-10">
            <span className='md:text-9xl text-5xl text-orange-500 font-bold transform -rotate-90 h-fit self-center'>20%</span>
            <div className='md:max-w-[700px]'>
                <h3 className='md:text-7xl text-3xl text-zinc-800 font-bold mb-5'>First Order Discount!</h3>
                <p className='md:text-md text-sm mb-3 hidden md:flex'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>

                <Button content="Get a Discount" />
            </div>
        </div>
    </section>
  )
}

export default Discount