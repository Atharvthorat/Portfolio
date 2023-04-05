import React from 'react'
import logo from '../images/logo.png'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import { useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll' 


const NavBar = () => {

  const [nav,setNav]=useState(false);

  const handleclick=()=> setNav(!nav);


  return (
    <div className='w-full h-[80px] flex px-4 justify-between items-center bg-[#0a192f] text-gray-300 '>
      <div>
        <img src={logo} alt=""  className='w-[50px] pt-3 '/>
      </div>
 
        <ul className='hidden md:flex top-0'>
          <li>
            <Link to='home' smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>Skiils</Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>Work</Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
     

      <div onClick={ handleclick} className='md:hidden z-10'> 
       {!nav ? <FaBars/>: <FaTimes/>}
      </div>


      <ul className={!nav ? 'hidden' : 'absolute top-8 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center'}>
         <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
      </ul>



      <div className='flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center'>
          <a href="https://www.linkedin.com/in/theatharvthorat" className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            LinkedIn <FaLinkedin size={30} /></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center'>
          <a href="https://github.com/Atharvthorat" className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            GitHub <FaGithub size={30} /></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center'>
          <a href="atharvcompu@gmail.com" className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            Email <HiOutlineMail size={30} /></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center'>
          <a href="https://www.linkedin.com/in/theatharvthorat" className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            Resume <BsFillPersonLinesFill size={30} /></a>
        </li>
      </ul>
      </div>

    </div>
  )
}

export default NavBar
 