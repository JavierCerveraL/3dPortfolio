import React, { useState } from 'react'
import {styles} from '../styles'
import { Link } from 'react-router-dom'
import {navLinks} from '../constants'
import {logo,menu,close} from '../assets'

const Navbar = () => {

  const [active, setActive]  = useState("")

  return (
    
   <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
    <Link to={`/`} className='gap-2 items-center flex' onClick={()=>{
      setActive("")
      window.scrollTo(0,0)
    }}>
      <img src={logo} alt="" className='w-20  h-20   object-contain' />
      <p className='text-white font-bold text-[18px] cursor-pointer'>Javier Cervera <span className='sm:block hidden'> | Front End Developer</span></p>
    </Link>
    <ul className='list-none hidden sm:flex flex-row gap-10'>
      {navLinks.map((link)=>(
        <li key={link.id} className={`${
          active === link.title ?
           "text-white" :
            "text-secondary"
        } hover:text-white text-[18px] font-medium cursor-pointer`}>
          <a href={`#${link.id}`}>{link.title} </a>
        </li>
      ))}
    </ul>
    <div className='sm:hidden flex-flex-1 justify-end items-center' >
      <img src={menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer '/>
    </div>
    </div>
   </nav>
  )
}

export default Navbar