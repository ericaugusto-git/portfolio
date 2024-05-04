"use client"

import { skills_imgs } from "@/app/constants/skills_imgs";
import { useEffect, useState } from "react";

export default function Stack() {
   const [stack, setStack] = useState();
   console.log(skills_imgs);
   let canHover;
    if(typeof window !== "undefined"){
        canHover = window.matchMedia('(hover: hover)').matches;
    }
   const handleStackHover = (stack) => {
    console.log(canHover)
    if(canHover){
        setStack(() => stack);
    }
   }
   return  <section  className="relative">
    <code className="whitespace-pre absolute top-[-200px] left-[-120px] xl:left-[-28px] xl:top-[-193px]">
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
{[1,2,3,5,6,7,8].map((i) => (
        <div key={i} className="rounded-full size-3 border-solid border-[#464646] border-[1px]"></div>
    ))}
</div> 
<div className="grid grid-rows-3  grid-cols-5 gap-5 md:grid-cols-3 md:grid-rows-4 sm:grid-cols-2 sm:grid-rows-6">
    <div className="col-span-2 text-4xl  font-light min-h-[149px] four:min-h-[200px] five:min-h-[250px]">
        <h2 className="inline-block leading-snug sm:text-center">
        Solving real problems<br/> with {!stack && <span className="animate-text-slide">an ever-growing <br/> tech stack</span>}
        {stack && <><span style={{color: stack.color}} className="animate-text-slide inline-block font-bold">{stack.name}</span></>}
        </h2>
    </div>
        { Object.keys(skills_imgs).map((skill) => (
        <div key={skill} style={{backgroundImage: `url(${skills_imgs[skill].image})`}} onMouseLeave={() => handleStackHover(null)} onMouseOver={() => handleStackHover(skills_imgs[skill])} className="bg-center bg-no-repeat bg-contain saturate-0 bg-origin-content transition-all betterhover:hover:saturate-100 md:saturate-100 border-solid border-[1px] rounded-xl flex-grow-0  border-[#464646] flex items-center justify-items-center p-6">
        </div>
        ))}
</div>
   </section>
}

