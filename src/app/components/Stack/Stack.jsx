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
   return  <section  className="relative  scroll-mt-52" id="stack">
      {/* <h2 className="mb-7 absolute top-[-100px] left-0 right-0 transformm text-4xl md:text-3xl sm:text-2xl font-light text-wrap leading-tight text-center">
        {t("title")}
      </h2> */}
    {/* <div className="flex flex-col gap-1 absolute right-7 top-[-145px] xs:top-[-127px] circles:hidden">
{Array.from({ length: 8 }).map((_,i) => (
        <div key={i} style={{borderColor:  i % 2 == 0 ? '#7a7a7a' : '#464646'}} className="rounded-full size-3 border-solid  border-[1px]"></div>
    ))}
</div>  */}
<div className="grid grid-rows-2 gap-2  grid-cols-7 md:grid-cols-4 xs:grid-cols-3 xs:grid-rows-5 md:grid-rows-4 md:px-2 my-[80px]">
    <div className="col-span-3 p-4 md:col-span-4 xs:col-span-3 font-light text-2xl 2xl:text-xl xs:text-sm   min-h-24 xs:min-h-14 bg-black/5 border-black/20 dark:bg-[#0b0b0b65] dark:border-[hsl(0,0%,9%)] border-[1px] rounded-3xl relative">
        <div className="absolute md:hidden top-[14px] left-[17px] flex items-center gap-1">
            <div className="size-2 px-6 md:px-9 xs:px-6 bg-black dark:bg-white rounded-full"></div>
            <div className="size-2 px-3 md:px-6 xs:px-3 bg-black/50 dark:bg-white/50 rounded-full"></div>
            <div className="size-2 px-1 bg-black/20 dark:bg-white/20 rounded-full"></div>
        </div>
{ stack && <span style={{outlineColor: stack && stack?.color}} className="xs:text-[8px] xs:leading-[8px] xs:px-2  md:text-[11px]  absolute transition-all top-[14px] right-[17px] text-xs outline-[1px] outline-black bg-black text-white dark:outline-white outline dark:bg-white dark:text-black outline-offset-2 rounded-full px-5  leading-[10px]">{stack?.exp} {Number(stack?.exp) > 1 ? t('years') : t('year')} <span>{!stack && t('coding')} {(locale !== 'pt-BR' || stack) && t('experience')}</span></span>}       
 <h2 className="mt-3 md:m-0 leading-snug md:text-center xs:text-wrap text-nowrap dark:mix-blend-difference relative">
        { t('solving')}<br/>{!stack && <span className="animate-text-slide">{t('stack')}</span>}
        {stack && <><span style={{color: stack.color}} className="animate-text-slide inline-block font-bold">{stack.name}</span></>}
        </h2>
    </div>
        <div className="rounded-3xl md:hidden bg-galaxy-gradient xxs:hidden transition-all flex items-center px-3 md:saturate-100"><Image className="xs:size-16" src={'/images/milky_way.png'} width={96} height={96} alt="milky way emoji"/></div>
        { Object.keys(skills_imgs).map((skill) => (
        <div key={skill} style={{backgroundImage: `url(${skills_imgs[skill].image})`}} onMouseLeave={() => handleStackLeave()} onMouseOver={() => handleStackHover(skills_imgs[skill])} 
        className="bg-center bg-no-repeat bg-contain rounded-3xl border-black/20  dark:border-[hsl(0,0%,9%)] border-[1px]  saturate-0 bg-origin-content transition-all  betterhover:hover:saturate-100 md:saturate-100 flex-grow-0  flex items-center justify-items-center p-6 sm:p-3">
        </div>
        ))}
</div>
   </section>
}

