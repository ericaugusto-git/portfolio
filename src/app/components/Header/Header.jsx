// components/Header.js
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import git from '../../../../public/images/github.svg';
import linkedin from '../../../../public/images/linkedin.svg';
import menu from '../../../../public/images/menu.svg';
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Header = () => {
  const t = useTranslations('Header');
  const refMenu = useRef()
  const refBtn = useRef()
  const handleClickOutside = (event) => {
    
    if(!refBtn?.current?.contains(event.target) && window.innerWidth <= 767){
      
      refMenu.current.classList.add('md:hidden');
    }
  }

  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      refMenu.current.classList.add('md:hidden');
    });
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleMenu = () => {
    const classList = refMenu.current.classList;
    if(classList.contains('md:hidden')){
      classList.remove('md:hidden')
    }else{
      classList.add('md:hidden')
    }
  }

  useOnClickOutside(refMenu, handleClickOutside);
  const rotas = ['projects', 'stack', 'experience', 'contact'];
  
  return (
    // <header className="fixed top-0 w-[calc(100%-280px)] xl:w-[calc(100%-60px)] z-10  bg-black/80 md:rounded-b-md md:px-1">
      <header className="fixed top-0 w-full mx-[-130px] z-50  p-2 xl:mx-[-30px] xs:-mx-2 backdrop-blur-sm">
      <nav className='flex items-center justify-between'>
      <ul className='font-martian uppercase bg-[#D9D9D9] dark:bg-[#1D1D1D] text-[#1D1D1D] dark:text-[#D9D9D9] p-[4px] rounded w-fit flex gap-4 pr-3 md:pr-1 text-sm lg:text-xs'>
        <li className='dark:bg-[#D9D9D9] bg-[#1D1D1D] text-[#D9D9D9] dark:text-black w-fit px-7 rounded'>
          <a href="#home" className="hover:opacity-90">eric augusto</a>
        </li>
        
        <li ref={refMenu} className='md:absolute md:hidden md:right-2 md:top-12'>
          <ul className='flex gap-4 md:flex-col  md:bg-black md:py-4 md:rounded-md md:outline md:outline-1 md:outline-comment-grey md:gap-4 items-center'>
          {rotas.map((rota) => 
            <li  key={rota} className='w-full text-center'>
              <a onClick={handleClickOutside} href={`#${rota}`} className='hover:opacity-80 w-full block md:px-4'>{rota}</a>
            </li>
          )}
              <li  className='hidden md:block w-full text-center'>
              <a onClick={handleClickOutside} href="https://github.com/ericaugusto-git" target="_blank" className='group'><span style={{maskImage: `url("${git.src}")`}} className="block mx-auto w-4 h-4 bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
              </li>
              <li className='hidden md:block w-full text-center'>
              <a onClick={handleClickOutside} href="https://www.linkedin.com/in/eric-augusto-775245a9/"  target="_blank" className='group'><span style={{maskImage: `url("${linkedin.src}")`}} className="block mx-auto w-4 h-4 bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
              </li>

          </ul>
        </li>
</ul>

          <ul className="flex  items-center gap-2 text-sm">
                <li className="cursor-pointer pl-2">
                  <LocaleSwitcher />
                </li>
                <ul className='flex gap-2 md:hidden'>
                  <li onClick={handleClickOutside}>
                    <a href="https://github.com/ericaugusto-git" target="_blank" style={{maskImage: `url("${git.src}")`}} className="block w-4 h-4 bg-black  dark:bg-white svgMask hover:opacity-80 cursor-pointer"></a>
                  </li>
                  <li onClick={handleClickOutside}>
                    <a href="https://www.linkedin.com/in/eric-augusto-775245a9/" target="_blank" style={{maskImage: `url("${linkedin.src}")`}} className="block w-4 h-4  dark:bg-white bg-black svgMask hover:opacity-80 cursor-pointer"></a>
                  </li>
                </ul>
                <button ref={refBtn} onClick={handleMenu} style={{maskImage: `url("${menu.src}")`}} className="w-6 h-6 bg-black dark:bg-white hover:opacity-60 svgMask cursor-pointer hidden md:block"></button>
              </ul>
        {/* <div className='flex gap-4'>
        </div>

        <ul className="flex justify-between text-2xl lowercase items-center">
          <li className='hidden lg:block'>
          <button ref={refBtn} onClick={handleMenu} style={{maskImage: `url("${menu.src}")`}} className="block w-6 h-6 fill-white bg-white svgMask hover:bg-slate-200 cursor-pointer"></button>
          </li>
          <li ref={refMenu} className="lg:fixed lg:top-9 lg:right-2 lg:hidden">
            <ul className="flex sm:flex-col sm:bg-black sm:p-4 sm:rounded-md sm:outline sm:outline-1 sm:outline-comment-grey sm:gap-4 items-center gap-2 text-sm">
              <li onClick={handleClickOutside}>
                <a href="#contact" className="outline-none">{t('contact')}</a>
              </li>
              <li className="cursor-pointer border-l-[1px] border-[#181818] pl-2 sm:border-none sm:hidden">
                <LocaleSwitcher />
              </li>
              <li onClick={handleClickOutside}>
                <a href="https://github.com/ericaugusto-git" target="_blank" style={{maskImage: `url("${git.src}")`}} className="block w-4 h-4 fill-white bg-white svgMask hover:bg-slate-200 cursor-pointer"></a>
              </li>
              <li onClick={handleClickOutside}>
                <a href="https://www.linkedin.com/in/eric-augusto-775245a9/" target="_blank" style={{maskImage: `url("${linkedin.src}")`}} className="block w-4 h-4 fill-white bg-white svgMask hover:bg-slate-200 cursor-pointer"></a>
              </li>
              <li className="cursor-pointer border-l-[1px] border-[#181818] pl-2 sm:border-none hidden sm:block">
                <LocaleSwitcher />
              </li>
            </ul>
          </li>

        </ul> */}
      </nav>
    </header>
  );
};

export default Header;