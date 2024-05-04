"use client"

import Cta from "./components/Cta/Cta";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from "./components/Projects/Projects";
import Stack from "./components/Stack/Stack";

export default function Home() {
  return (
    <>
      <div className="min-h-full min-w-full px-[130px] py-[40px] xl:px-[30px]">
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
