// components/Header.js
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-between text-2xl lowercase">
          <li>
            <a href="#" className="font-bold text-">
              eric<span className="text-[#5BB3A3]">_</span>augusto
            </a>
          </li>
          <li>
            <a href="#contact">let’s get in touch</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
