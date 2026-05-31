import React from 'react'
import { GoHeartFill } from 'react-icons/go'
import { HiShoppingBag } from 'react-icons/hi2'
import { IoSearch } from 'react-icons/io5'


const Navbar = () => {
  return (
    <header className='bg-white'>
        <nav className='max-w-[1300px] h-[14vh] mx-auto flex justify-between items-center px-10'>
            {/* logo */}
            <a href="" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

            {/* desktop menu */}
            <ul className='flex items-center gap-x-12'>
                <li><a href="" className='font-semibold text-orange-500'>Home</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>About</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>Shop</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>Contact</a></li>
            </ul>

            {/* nav Action */}
            <div className='flex items-center space-x-5'>
                <div className="flex items-center p-1 border border-orange-500 rounded-full">
                    <input type="text" name='text' id='text' placeholder='Search...' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                    <button className='w-7 h-7 bg-orange-500 text-white flex justify-center items-center rounded-full text-xl '>
                        <IoSearch />
                    </button>
                </div>
                <a href="#" className='text-xl text-zinc-800'>
                    <GoHeartFill />
                </a>
                <a href="#" className='text-xl text-zinc-800'>
                    <HiShoppingBag />
                </a>
            </div>


            
        </nav>
    </header>
  )
}

export default Navbar