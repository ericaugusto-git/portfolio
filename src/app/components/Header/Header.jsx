// components/Header.js
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
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
    if(!refBtn?.current?.contains(event.target) && window.innerWidth <= 639){
      refMenu.current.classList.add('sm:hidden');
    }
  }

  const handleMenu = () => {
    const classList = refMenu.current.classList;
    if(classList.contains('sm:hidden')){
      classList.remove('sm:hidden')
    }else{
      classList.add('sm:hidden')
    }
  }

  useOnClickOutside(refMenu, handleClickOutside)
  
  return (
    // <header className="fixed top-0 w-[calc(100%-280px)] xl:w-[calc(100%-60px)] z-10  bg-black/80 md:rounded-b-md md:px-1">
      <header className="fixed top-0 w-full mx-[-130px] z-50  bg-black/80 px-1 xl:mx-[-30px] xs:-mx-2">
      <nav>
        <ul className="flex justify-between text-2xl lowercase items-center">
          <li className='contents'>
            <a href="#" className="font-bold sm:text-xs text-lg outline-none font-code">
              eric<span className="text-[#5BB3A3]">_</span>augusto
            </a>
          </li>
          <li className='hidden sm:block'>
          <button ref={refBtn} onClick={handleMenu} style={{maskImage: `url("${menu.src}")`}} className="block w-6 h-6 fill-white bg-white svgMask hover:bg-slate-200 cursor-pointer"></button>
          </li>
          <li ref={refMenu} className="sm:fixed sm:top-9 sm:right-2 sm:hidden">
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

        </ul>
      </nav>
    </header>
  );
};

export default Header;