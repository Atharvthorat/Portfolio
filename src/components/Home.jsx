import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import Photo2 from '..//images/photo2.jpg'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      <div className='max-w-[1000px] mx-auto px-8 flex-col justify-center h-full'>
      <img src={Photo2} className='h-[250px] shadow-sm shadow-[#333333] ml-80 w-[250px] rounded-full' alt="" />
        <p className='text-pink-600 mt-3 '>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' >Atharv Thorat</h1>
        <h2 className=' text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a Front-end Developer</h2>
        <p className=' text-[#8892b0] py-4 max-w-[700px]'>I'm a front-end developer specializing in building and designing exceptional digital experience. Currently, I'm focused on building responsive front-end web application.</p>
        <div>
          <Link to="work" smooth={true}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
             View Work
             <span className='group:hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className=' ml-3'/>
            </span>
            </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
