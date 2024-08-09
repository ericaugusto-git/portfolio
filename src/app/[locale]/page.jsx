"use client"

import { useTranslations } from "next-intl";
import Cta from "../components/Cta/Cta";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from "../components/Projects/Projects";
import Stack from "../components/Stack/Stack";
import "../globals.css";
import { useEffect } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { WavyBackground } from "@/components/ui/wavy-background";


export default function Home() {

  return (
    <>
        {/* <AuroraBackground>
        </AuroraBackground> */}
        {/* <WavyBackground/> */}
      <div  className="min-h-full min-w-full px-[130px] py-[40px] xl:px-[30px] xs:px-2 overflow-x-hidden" id="home">
      <div 
        style={{ 
          backgroundImage: `url("images/bbblurry.svg")`,
          backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1
        }}
        className="dark:hidden"
    ></div>
          <Header/>
          <main className="my-32 lg:my-10">
      
            <Hero/>
            <Projects/>
            <Stack/>
            <Experience/>
            <Cta/>
          </main>
          <Footer/>
      </div>
    </>
  );
}
