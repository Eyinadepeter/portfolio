import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import {Styles} from '../styles'
import { NavLink } from 'react-router-dom'
import {logo,menu,close} from '../assets'



const Navbar = () => {
  const [active ,setActive]= useState("")
  return (
    <nav className={'${Styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to='/' className='flex items-center gap-2'
          onClick={()=>{setActive("");
          window.scrollTo(0,0)}}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Peter |<span className='sm:block hidden'>| Developer</span></p>
          </Link>
            <ul >
            {NavLink.map((link)=>(
              <li>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
              
            )}

            </ul>

        </div>
    </nav>
  )
}

export default Navbar