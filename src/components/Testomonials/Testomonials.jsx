import React from 'react'
import HeadinLine from '../HeadinLine/HeadinLine'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Testomonials = () => {
  return (
    <section>
        <div className="max-w-[1300px] px-10 py-20">
        <HeadinLine highlight="Customer" heading="Review" />
        <div className="flex justify-end gap-3">
            <button className='w-9 h-9 text-2xl flex justify-center items-center text-zinc-800 bg-zinc-200 hover:bg-orange-500 hover:text-white rounded-sm '  >
                <IoIosArrowBack />
            </button>
            <button className='w-9 h-9  text-2xl flex justify-center items-center text-zinc-800 bg-zinc-200 hover:bg-orange-500 hover:text-white rounded-sm '>
                <IoIosArrowForward />
            </button>

        </div>
        </div>
    </section>
  )
}

export default Testomonials