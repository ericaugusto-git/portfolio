"use client"

import { skills_imgs } from "@/app/constants/skills_imgs";
import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";
import { useEffect, useState } from "react";

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
   return  <section  className="relative" id="stack">
          {/* <div 
        style={{ 
            backgroundImage: `url("images/bbblurry.svg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '99%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            top: '50%',
            transform: 'translateY(-50%)'
        }}
        className="opacity-35 gradient-mask-b-80 hidden dark:block"
    ></div> */}
              {/* <div className='rising-stars hidden dark:block'>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
    <code className="whitespace-pre absolute top-[-200px] left-[-120px] xl:left-[-22px] xl:top-[-203px] xs:text-xs xs:top-[-190px] xs:-left-1">
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
    <div className="flex flex-col gap-1 absolute right-7 top-[-145px] xs:top-[-127px] circles:hidden">
{Array.from({ length: 8 }).map((_,i) => (
        <div key={i} className="rounded-full size-3 border-solid border-[#464646] border-[1px]"></div>
    ))}
</div> 
<div className="grid grid-rows-2 gap-1  grid-cols-7 lg:grid-cols-4 xs:grid-cols-3 xs:grid-rows-5 lg:grid-rows-4 lg:px-2">
    <div className="col-span-3 p-4 lg:col-span-4 xs:col-span-3 font-light text-2xl 2xl:text-xl xs:text-sm   min-h-24 xs:min-h-14 bg-[#0b0b0b65] border-[#131313] border-[1px] rounded-xl relative">
        <div className="absolute top-[7px] left-[7px] flex items-center gap-1">
            <div className="size-2 px-6 lg:px-9 xs:px-6 bg-white rounded-full"></div>
            <div className="size-2 px-3 lg:px-6 xs:px-3 bg-white/50 rounded-full"></div>
            <div className="size-2 px-1 bg-white/20 rounded-full"></div>
        </div>
        <span style={{outlineColor: stack && stack?.color}} className="xs:text-[8px] xs:leading-[8px] xs:px-2  md:text-[11px]  absolute transition-all top-[7px] right-[7px] text-xs outline-[1px] outline-white outline bg-white text-black outline-offset-2 rounded-full px-5  leading-[10px]">{stack?.exp ?? '4+'} years <span style={{color: stack?.color}}>{stack?.name ?? 'coding'} exp.</span></span>
        <h2 className="mt-3 leading-snug lg:text-center xs:text-wrap text-nowrap dark:mix-blend-difference relative">
        { t('solving')}<br/>{!stack && <span className="animate-text-slide">{t('stack')}</span>}
        {stack && <><span style={{color: stack.color}} className="animate-text-slide inline-block font-bold">{stack.name}</span></>}
        </h2>
    </div>
        <div className="rounded-2xl bg-galaxy-gradient xxs:hidden saturate-0 betterhover:hover:saturate-100 transition-all flex items-center px-3 md:saturate-100"><Image className="xs:size-16" src={'/images/milky_way.png'} width={96} height={96} alt="milky way emoji"/></div>
        { Object.keys(skills_imgs).map((skill) => (
        <div key={skill} style={{backgroundImage: `url(${skills_imgs[skill].image})`}} onMouseLeave={() => handleStackLeave()} onMouseOver={() => handleStackHover(skills_imgs[skill])} 
        className="bg-center bg-no-repeat bg-contain rounded-xl  border-black/40  dark:border-[#131313] border-[1px]  saturate-0 bg-origin-content transition-all  betterhover:hover:saturate-100 md:saturate-100 flex-grow-0  flex items-center justify-items-center p-6 sm:p-3">
        </div>
        ))}
</div>
   </section>
}

