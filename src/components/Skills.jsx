import React from 'react'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import JS from '../images/javascript.png'
import Reactjs from '../images/react.png'
import tailwind from '../images/tailwind.png'
import Git from '../images/github.png'
import Firebase from '../images/firebase.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-pink-600' >Skills</p>
                <p className='py-4'>These are technologies I've worked with</p>
                </div>   
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
             <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={HTML} alt="" />
                <p className='my-4 '>HTML</p>
             </div>

             <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={CSS} alt="" />
                <p className='my-4 '>CSS</p>
             </div>

             <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={JS} alt="" />
                <p className='my-4 '>Javascript</p>
             </div>

             <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={Reactjs} alt="" />
                <p className='my-4 '>React JS</p>
             </div>

             <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={tailwind} alt="" />
                <p className='my-4 '>Tailwind CSS</p>
             </div>

             <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={Firebase} alt="" />
                <p className='my-4 '>Firebase</p>
             </div>

             <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={Git} alt="" />
                <p className='my-4 '>GitHub</p>
             </div>
        </div>

        </div>       

      
    </div>
  )
}

export default Skills
