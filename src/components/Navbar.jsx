import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import { navLinks } from '../constant'
import {logo,menu,close} from '../assets'



const Navbar = () => {
  const [active ,setActive]= useState("")
  const [toggle ,setToggle] =useState(false)



  return (
    // ----------------- Deskstop Navbar ------------------------------------------------
    
    <nav className={'${Styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to='/' className='flex items-center gap-2'
          onClick={()=>{setActive("");
          window.scrollTo(0,0)}}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Peter |<span className='sm:block hidden text-violet-500'>| Portfolio</span></p>
          </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=>(
              <li key={link.id}
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
            )}

            </ul>


            {/* ----------------- Mobile Navbar ---------------------------------------------- */}



            <div className='sm:hidden flex flex-1 justify-end items-center '>
                <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>(setToggle(!toggle))} />
                <div className={` ${toggle ? 'flex' : 'hidden'} p-[60px] black-gradient absolutek top-20 right-0 mx-2 my-2 min-w-[140px] rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-[40px]'>
            {navLinks.map((link)=>(
              <li key={link.id}
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              }font-poppins font-medium text-[16px]  cursor-pointer`}
              onClick={() =>{
              setToggle(!toggle);
              setActive(link.title)}}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
            )}

            </ul>
                </div>
            </div>
            

        </div>
    </nav>
  )
}

export default Navbar