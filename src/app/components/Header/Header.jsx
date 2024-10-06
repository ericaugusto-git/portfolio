"use client"

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ThemeSwitcher from "../Hero/ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { useTranslations } from 'next-intl';
import { useOnClickOutside } from 'usehooks-ts';

const Header = () => {
  const refMenu = useRef();
  const refBtn = useRef();
  const t = useTranslations('Header');
  const handleClickOutside = (event) => {
    
    if(!refBtn?.current?.contains(event.target) && window.innerWidth <= 767){
      
      refMenu.current.classList.add('hidden');
    }
  }

  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      if(refMenu.current)
        refMenu.current.classList.add('hidden');
    });
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleMenu = () => {
    const classList = refMenu.current.classList;
    if(classList.contains('hidden')){
      classList.remove('hidden')
    }else{
      classList.add('hidden')
    }
  }

  useOnClickOutside(refMenu, handleClickOutside);
  const rotas = ['home', 'projects', 'stack', 'experience', 'contact'];

  return (<motion.header initial={{y: -50}} animate={{y: 0}} className="fixed top-0 w-full p-2 px-5 z-50  backdrop-blur-sm mx-[-130px] xl:mx-[-30px] xs:-mx-2">
      <nav className="flex justify-between  items-center">
      {/* <div className="absolute backdrop-blur-3xl size-full top-0"></div> */}
        <a  href="#home" className="hover:opacity-80 transform scale-x-[-1] text-xl bg-black text-white dark:bg-white dark:text-black px-3 rounded-full">
        Æ
        </a>
        <motion.div className="md:hidden">
          <SlideTabs/>
        </motion.div>
        <ul className='flex gap-3 items-center'>
        <li className="cursor-pointer">
                  <LocaleSwitcher />
            </li>
              <li>
                <ThemeSwitcher/>
              </li>
              <li>
                <a href="https://github.com/ericaugusto-git" target="_blank" className='group'><span style={{maskImage: `url("/images/github.svg")`}} className="block mx-auto size-[18px] bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/eric-augusto-775245a9/"  target="_blank" className='group'><span style={{maskImage: `url("/images/linkedin.svg")`}} className="block mx-auto size-[18px] bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
              </li>
            <button ref={refBtn} onClick={handleMenu} style={{maskImage: `url("/images/menu.svg")`}} className="w-6 h-6 bg-black dark:bg-white hover:opacity-60 svgMask cursor-pointer hidden md:block"></button>


        </ul>
        <li ref={refMenu} className='absolute hidden right-2 top-12 list-none'>
          <ul className='flex flex-col dark:bg-black bg-white py-4 rounded-md outline outline-1 outline-comment-grey gap-3 items-center'>
            {rotas.map((rota) => 
              <li key={rota} className='w-full text-center'>
                <a onClick={handleClickOutside} href={`#${rota}`} className='hover:opacity-80 w-full block px-4'>{t(rota)}</a>
              </li>
            )}
          </ul>
        </li>

      </nav>
  </motion.header>
  );
};

const SlideTabs = () => {
  const t = useTranslations('Header');
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="z-20 mx-auto flex w-fit rounded-full relative outline-[1px] outline outline-offset-2 bg-black/5 outline-black/20 dark:bg-white/5 p-1 dark:outline-white/20"
    >
  <Tab setPosition={setPosition}>home</Tab>
      <Tab setPosition={setPosition}>projects</Tab>
      <Tab setPosition={setPosition}>experience</Tab>
      <Tab setPosition={setPosition}>stack</Tab>
      <Tab setPosition={setPosition}>contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);
  const t = useTranslations('Header');

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer text-xs uppercase"
    >
      <a className="px-3 py-1.5 block " href={`#${children}`}>
        {t(children)}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white dark:bg-black"
    />
  );
};

export default Header;
