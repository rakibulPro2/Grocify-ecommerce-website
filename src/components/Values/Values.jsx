import React from 'react'
import HeadinLine from '../HeadinLine/HeadinLine'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    
    const leftValues = valuesData.slice(0, 2).map((value, index) =>{
        return (
            <div key={index} className='flex flex-row-reverse gap-8'>
                <div>
                    <span className='flex items-center justify-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{value.icon}</span>
                </div>
                <div className='text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{value.title}</h3>
                    <p className='text-zinc-600'>{value.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = valuesData.slice(2, 4).map((value, index) =>{
        return (
            <div key={index} className='flex flex-row-reverse gap-8'>
                <div>
                    <span className='flex items-center justify-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{value.icon}</span>
                </div>
                <div className='text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{value.title}</h3>
                    <p className='text-zinc-600'>{value.para}</p>
                </div>
            </div>
        )
    })



  return (
    <section>
        <div className="max-w-[1300px] px-10 mx-auto py-20">
            <HeadinLine highlight = "Our" heading = "Value" />
            <div className="flex flex-col md:flex">
                {/* left side value  */}
                <div className="flex flex-col justify-between">
                    {leftValues}
                </div>
                {/* image middle */}
                <div className="w-1/2">
                    <img src={Basket} />
                </div>
                {/* right side value */}
                <div className="flex flex-col justify-between">
                    {rightValues}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values


const valuesData = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    }

]