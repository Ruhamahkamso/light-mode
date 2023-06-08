import React, {useState, useEffect} from 'react';
// import logo

import LogoDark from '../assets/img/logo-dark.svg';
import LogoWhite from  '../assets/img/logo-white.svg';
//import  react icons
import {BsFillSunFill, BsMoonFill, BsCheck} from 'react-icons/bs';
//import girl image
import GirlImg from '../assets/img/girl.png';

const Hero = () => {
// theme state
  const [theme, setTheme] = useState('light');


// if local storage is empty save theme as light
// useEffect(()=> {
// }, 
// []);

useEffect(()=> {
  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light');
  }
// select html elem
const html = document.querySelector('html');
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  setTheme('dark');
} else {
  html.classList.remove('dark');
  setTheme('light');
}
}, [theme])

  //handle theme swicth
  const handleThemeSwicth = ()=> {
    if (localStorage.getItem ('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem( 'theme','dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
  <section className='min-h-[740px] mx-[20px]  w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'>
    <div className='container mx-auto px-4 lg:px-0'>
        {/* header */}
        <header className='flex items-center justify-between py-8'>
          {/* logo */}
          <div>
            <a href="#">
              {theme === 'light' ? (
                <img src={LogoDark}/>
              ) : (
                <img src={LogoWhite} />
              ) }
            </a>
          </div>
            {/* button */}
    <button onClick={handleThemeSwicth}
     className='p-4 bg-amber-500 text-white rounded-full w-12 h-12 flex justify-center items-center'> 
    {
      theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />
    }
      
    
      </button>
        </header>

        {/* text & images wrapper */}

        <div className='flex flex-col items-center lg:flex-row min-h-[740] mx-20 '>
          {/* text */}
          <div className=' flex-1 flex flex-col justify-center items-start'>
            <h1 className='text-5xl text-primary font-bold mb-6  dark:text-white'>
              Online Accounting <br/> {''} <span className='text-amber-500'>Fast & Uncomplicated</span>
            </h1>
            <p className='font-light text-grey mb-12 max-w-[597px] dark:text-white'>We specialize in small business. Our goal is to eliminate bureaucracy, creating a modern relationship between your company and the accountant.</p>
            {/* checked items */}
            <div className='flex flex-col gap-y-10 mb-12'>
              {/* item  */}
              <div className='flex items-center gap-x-2 '>
                {/* item icon */}
               <div className='bg-accent/10 text-amber-400 w-[20px]  h-[20] rounded-full flex justify-center items-center dark:bg-amber-500 dark:text-white '>
                 <BsCheck />
               </div>
                {/* items  text*/}
                <p className='text-base font-light dark:text-white'>Have your accounting 100% online.</p>
              
              </div>
              {/* item  */}
              <div className='flex items-center gap-x-2 '>
                {/* item icon */}
               <div className='bg-accent/10 text-amber-400 w-[20px]  h-[20] rounded-full flex justify-center items-center dark:bg-amber-500 dark:text-white '>
                 <BsCheck />
               </div>
                {/* items  text*/}
                <p className='text-base font-light dark:text-white'>Save with plans starting at $10/Month. </p>
              
              </div> 
            </div>
            {/* button */}
            <button className='btn'>Discover our plans</button>
          </div>
          {/* image */}
          <div className='hidden lg:flex self-end '>
            <img src={GirlImg} alt='' />

          </div>
        </div>
        
    </div>
  
    </section>
  
  );
}
export default Hero;

