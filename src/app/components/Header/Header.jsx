// components/Header.js
import { useTranslations } from 'next-intl';
import git from '../../../../public/images/github.svg';
import linkedin from '../../../../public/images/linkedin.svg';
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";


const Header = () => {
  const t = useTranslations('Header');

  return (
    // <header className="fixed top-0 w-[calc(100%-280px)] xl:w-[calc(100%-60px)] z-10  bg-black/80 md:rounded-b-md md:px-1">
      <header className="fixed top-0 w-full mx-[-130px] z-50  bg-black/80 px-1 xl:mx-[-30px] xs:-mx-2">
      <nav>
        <ul className="flex justify-between text-2xl lowercase items-center">
          <li>
            <a href="#" className="font-bold outline-none font-code">
              eric<span className="text-[#5BB3A3]">_</span>augusto
            </a>
          </li>
          <li className="sm:hidden">
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <a href="#contact" className="outline-none">{t('contact')}</a>
              </li>
              <li className="cursor-pointer border-l-[1px] border-[#181818] pl-2">
                <LocaleSwitcher />
              </li>
              <li>
                <a href="https://github.com/ericaugusto-git" target="_blank" style={{maskImage: `url("${git.src}")`}} className="block w-4 h-4 fill-white bg-white svgMask hover:bg-slate-200 cursor-pointer"></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/eric-augusto-775245a9/" target="_blank" style={{maskImage: `url("${linkedin.src}")`}} className="block w-4 h-4 fill-white bg-white svgMask hover:bg-slate-200 cursor-pointer"></a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
