import React, { useState } from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'
import { GoHeartFill } from 'react-icons/go'
import { HiMenu } from 'react-icons/hi'
import { HiShoppingBag } from 'react-icons/hi2'
import { IoSearch } from 'react-icons/io5'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const togleMenu = () =>{
        setShowMenu(!showMenu)
    }
  return (
    <header className=' bg-white fixed top-0 left-0 right-0 z-50 shadow-xl'>
        <nav className='max-w-[1300px] md:h-[14vh] h-[12vh] mx-auto flex justify-between items-center px-10'>
            {/* logo */}
            <a href="" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

            {/* desktop menu */}
            <ul className='md:flex items-center gap-x-12 hidden'>
                <li><a href="" className='font-semibold text-orange-500'>Home</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>About</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>Shop</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>Contact</a></li>
            </ul>

            {/* nav Action */}
            <div className='flex items-center space-x-5'>
                <div className="md:flex items-center p-1 border border-orange-500 rounded-full hidden">
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
                <a href="#" className='text-xl text-zinc-800 md:hidden' onClick={togleMenu}>
                    {showMenu ? <CgMenuRightAlt /> : <HiMenu />}
                    
                </a>
            </div>

            {/* Mobile menu */}
            <ul className={`flex flex-col gap-y-10 p-10 bg-orange-500/20 backdrop-blur-md items-center gap-x-12  md:hidden absolute top-30 -left-full transform -translate-x-1/2 rounded-md transition-all duration-500 ${showMenu ? 'left-1/2' : ''}` }>
                <li><a href="" className='font-semibold text-orange-500'>Home</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>About</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>Shop</a></li>
                <li><a href="" className='font-semibold text-zinc-800 hover:text-orange-500'>Contact</a></li>
                <div className="flex items-center p-1 border border-orange-500 rounded-full md:hidden">
                    <input type="text" name='text' id='text' placeholder='Search...' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                    <button className='w-7 h-7 bg-orange-500 text-white flex justify-center items-center rounded-full text-xl '>
                        <IoSearch />
                    </button>
                </div>
            </ul>
            
        </nav>
    </header>
  )
}

export default Navbar