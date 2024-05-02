"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import  Header  from './components/Header/Header'
import  Hero  from './components/Hero/Hero'
import Projects from "./components/Projects/Projects";
import Stack from "./components/Stack/Stack";
import Experience from "./components/Experience/Experience";

export default function Home() {
  // const [buzzword, setBuzzword] = useState("innovative");
  // useEffect(() => {
  //   let interval: NodeJS.Timeout;
  //   const generateBuzzwords = () => {
  //     const buzzwords = ["innovative", "creative", "awesome"];
  //     let index = 0;
  //     console.log(buzzwords)
  //    interval = setInterval(() => {
  //       setBuzzword(buzzwords[index++ % buzzwords.length]);
  //       console.log(buzzword)
  //     }, 2000);
  //   };
  //   generateBuzzwords();
  //   return () => clearInterval(interval)
  // }, [])
  return (
    <>
      <div className="h-full px-[130px] py-[40px] bg-[#0E0E0E]">
          <Header/>
          <main className="my-32">
            <Hero/>
            <Projects/>
            <Stack/>
            <Experience/>
          </main>
      </div>
    </>
  );
}
