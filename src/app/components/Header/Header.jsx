// components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-[calc(100%-280px)] xl:w-[calc(100%-60px)] z-10  bg-black/80 md:rounded-b-md md:px-1">
    {/* <header className="fixed top-0 w-full mx-[-130px] z-10  bg-black/80 px-[30px] py-[5px]"> */}
      <nav>
        <ul className="flex justify-between md:justify-center text-2xl lowercase">
          <li>
            <a href="#" className="font-bold text-">
              eric<span className="text-[#5BB3A3]">_</span>augusto
            </a>
          </li>
          <li className="md:hidden">
            <a href="#contact">let’s get in touch</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
