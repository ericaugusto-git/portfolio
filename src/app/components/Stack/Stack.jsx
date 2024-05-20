"use client"

import { skills_imgs } from "@/app/constants/skills_imgs";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import Image from "next/image";

export default function Stack() {
   const [stack, setStack] = useState();
   const t = useTranslations('Stack');
   const locale = useLocale();

   let canHover;
    if(typeof window !== "undefined"){
        canHover = window.matchMedia('(hover: hover)').matches;
    }
   const handleStackHover = (stack) => {  
    if(canHover){
        setStack(() => stack);
    }
   }
   const [stackTimeout, setStackTimeout] = useState();
   const handleStackLeave = () => {
    const timmeout = setTimeout(() => {
    }, 500);
    setStack(() => null);

    setStackTimeout(timmeout);
   }
   useEffect(() => {
    // This function will be called every time `hovered` state changes
    const handleAnimation = () => {
      const element = document.querySelector(`.${'animate-text-slide'}`);
      if (element) {
        element.classList.remove('animate-text-slide'); // Remove existing animation class
        void element.offsetWidth; // Trigger reflow to restart the animation
        element.classList.add('animate-text-slide'); // Add animation class back to trigger animation
      }
    };

    handleAnimation(); // Call the animation function initially to apply the animation
  }, [stack]);
   return  <section  className="relative">
    <code className="whitespace-pre absolute top-[-200px] left-[-120px] xl:left-[-22px] xl:top-[-203px]">
{`
/**
 * Microfrontend
 * Responsive Design
 * Progressive Web App (PWA)
 * Single Page Application (SPA)
 * SEO optimization
 * UI/UX
**/`}
    </code>
    <div className="flex flex-col gap-1 absolute right-7 top-[-145px] circles:hidden">
{Array.from({ length: 8 }).map((_,i) => (
        <div key={i} className="rounded-full size-3 border-solid border-[#464646] border-[1px]"></div>
    ))}
</div> 
<div className="grid grid-rows-2 gap-[15px]  grid-cols-7 lg:grid-cols-5 lg:grid-rows-3 lg:px-2">
    <div className="col-span-3 lg:col-span-5 font-light text-2xl 2xl:text-xl xs:text-sm  px-3 py-2 min-h-24 xs:min-h-14 relative">
        <h2 className=" leading-snug lg:text-center text-nowrap xs:text-wrap">
        { t('solving')}<br/>{!stack && <span className="animate-text-slide">{t('stack')}</span>}
        {stack && <><span style={{color: stack.color}} className="animate-text-slide inline-block font-bold">{stack.name}</span></>}
        </h2>
        <div className="absolute svgMask -right-3 -bottom-5 h-[115px] w-[115px] bg-[#222222] -z-10"  style={{maskImage: `url("/images/saturn.svg")`}}></div>
        {/* <Image
          className=""
          src="/images/saturn.svg"
          height={160}
          width={160}
          alt="send arrow"
        /> */}
        
    </div>
        { Object.keys(skills_imgs).map((skill) => (
        <div key={skill} style={{backgroundImage: `url(${skills_imgs[skill].image})`}} onMouseLeave={() => handleStackLeave()} onMouseOver={() => handleStackHover(skills_imgs[skill])} 
        className="rounded-lg bg-center bg-no-repeat bg-contain saturate-0 bg-origin-content transition-all betterhover:hover:saturate-100 md:saturate-100 outline-1 flex-grow-0 outline-[#4646463a] outline  flex items-center justify-items-center p-6 sm:p-3">
        </div>
        ))}
</div>
   </section>
}

