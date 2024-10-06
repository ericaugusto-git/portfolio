"use client";

import { useTranslations } from "next-intl";
import Cta from "../components/Cta/Cta";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Stack from "../components/Stack/Stack";
import "../globals.css";
import { useEffect } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  
  return (
    <>
      {/* <AuroraBackground/>         */}
      {/* <Spotlight
        className="-top-60 left-52 md:left-60 md:-top-20"
        fill="#808080"
      /> */}
      {/* <WavyBackground/> */}
      {/* <HeroHighlight/> */}
      {/* <BackgroundBeamsWithCollision/> */}
      {/* <div className="absolute top-0 h-[50rem] w-full -z-10">
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div> */}
      <div
        className="min-h-full min-w-full px-[130px] py-[40px] xl:px-[30px] xs:px-2 overflow-x-hidden"
        id="home"
      >
        {/* <div
          style={{
            backgroundImage: `url("images/bbblurry.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
          className="dark:hidden"
        ></div> */}
        <Header />
        <main className="my-32 lg:my-10">
          <Hero/>
          <Projects />
          <Stack />
          <Experience />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
}
