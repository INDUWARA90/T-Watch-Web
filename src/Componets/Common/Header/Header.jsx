import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import image01 from "../../../assets/Logo.png";

function Header() {
  const [isOpen, setIsopen] = useState(false);

  const menuOpen = () => {
    setIsopen(!isOpen);
  }

  return (

    <nav className='fixed top-0 z-10 flex w-full items-center 
    justify-between px-16 py-6 text-white
    backdrop-blur-md md:justify-evenly'>
      <a href="" className='bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
        bg-clip-text text-transparent opacity-70 text-3xl font-semibold 
        transition-all duration-300 hover:opacity-100 
        flex items-center
        '>
        <p>Thilani Watch Center</p>
      </a>

      <ul className='hidden md:flex gap-10'>
        <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>Home</li> </a>
        <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>Product</li> </a>
        <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>About</li> </a>
        <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>Contact Us</li> </a>
      </ul>

      <ul className='hidden md:flex gap-10'>
        <a href="" target='_blank'> <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100'> <BsFacebook /> </li></a>
        <a href="" target='_blank'> <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'> <BsInstagram /> </li></a>
      </ul>

      {/* To handel menu icon active or not */}
      {
        isOpen ? (
          <BiX onClick={menuOpen} className='block md:hidden text-4xl cursor-pointer' />
        ) : (
          <BiMenu onClick={menuOpen} className='block md:hidden text-4xl cursor-pointer' />
        )
      }

      {/* to handel side navigation Bar */}
      {
        isOpen && (
          <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 
                    flex-col items-start justify-start gap-10 border-l
                     border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>

            <ul className='flex flex-col gap-8'>
              <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>Home</li> </a>
              <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>Product</li> </a>
              <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>About</li> </a>
              <a href="" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'> <li>Contact Us</li> </a>
            </ul>

            <ul className='flex flex-wrap gap-5'>
            <a href="" target='_blank'> <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100'> <BsFacebook /> </li></a>
            <a href="" target='_blank'> <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'> <BsInstagram /> </li></a>
            </ul>

          </div>
        )
      }


    </nav>
  )
}

export default Header