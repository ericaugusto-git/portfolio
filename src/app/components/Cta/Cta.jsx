"use client"

import Image from "next/image";
import { useState } from "react";
import {Contact} from './components/Contact';
import style from './Cta.module.css'

export default function Cta(){
    const contact = ["mailto:eric72001@hotmail.com", "tel:+55(71) 98188-6126", "https://github.com/ericaugusto-git", "https://www.linkedin.com/in/eric-augusto-775245a9/"];
    const [copiedLink, setCopiedLink] = useState();
    const [timeout, setTimeoutState] = useState();
    const copylink = (link, event) => {
        event.stopPropagation();
        navigator.clipboard.writeText(link.replace('mailto:', '').replace('tel:', ''));
        setCopiedLink(link);
        if(timeout)
        clearTimeout(timeout);
        const newTimeout = setTimeout(() => {
            setCopiedLink(null);
        }, 3000);
        setTimeoutState(() => newTimeout)

    }
    return <section id="contact">
    <div className="grid mt-24 xl:grid-cols-1 xl:grid-rows-1 justify-stretch grid-cols-7 grid-rows-2 gap-8  rounded-[64px]">
        <div className="row-span-2 xl:row-span-1 col-span-3 xl:col-span-1">

        <Contact/>
        </div>
        <div className="dark:bg-[#121212] bg-slate-200 xl:col-span-1 col-span-4 rounded-[40px] flex flex-col justify-between py-5 px-5 outline-1 outline outline-offset-4 outline-black/20 dark:outline-white/20 ">
            <span className="text-3xl sm:text-2xl xs:text-xl leading-snug xl:mb-8">
           You can also hit me up in <br/>any of this places 🤙🏾
            </span>
            <div className="flex gap-4">
                <a href="https://wa.me/5571981886126" target="_blank" className="bg-comment-grey size-9 w-20 transition-all duration-500 hover:bg-[#25d366] rounded-full p-1 group cursor-pointer">
                    <div style={{maskImage: `url("images/zap.svg")`, maskSize: 'auto'}} className="block size-full bg-white svgMask"></div>
                </a>
                <a href="tel:+55(71) 98188-6126" className="bg-comment-grey size-9 w-20 group rounded-full  duration-500 p-1 hover:bg-[#a64ca6]">
                    <div style={{maskImage: `url("images/phone.svg")`, maskSize: 'auto'}} className="block size-full bg-white svgMask"></div>
                </a>
                <a href="https://discord.com/users/368858792139423747" target="_blank" className="bg-comment-grey  duration-500 hover:bg-[#7289da] group size-9 w-20 rounded-full p-1">
                    <div style={{maskImage: `url("images/discord.svg")`, maskSize: 'auto'}} className="block size-full bg-white svgMask"></div>
                </a>
                <a href="mailto:eric72001@hotmail.com" target="_blank" className="bg-comment-grey size-9 group w-20 rounded-full  duration-500 p-1 hover:bg-[#54daff]">
                    <div style={{maskImage: `url("images/mail.svg")`, maskSize: 'auto'}} className="block size-full group-hover:opacity-80 bg-white svgMask"></div>
                </a>
            </div>
        </div>
        <div className="dark:bg-[#121212] bg-slate-200 text-2xl p-5 size-full col-span-3 xl:col-span-1 rounded-[40px] outline-1 outline outline-offset-4 outline-black/20 dark:outline-white/20 ">
            <span className="sm:text-2xl xs:text-xl">
            Find me at
            </span>
            <div className="flex gap-6 size-full py-4">
                <a href="https://www.linkedin.com/in/eric-augusto-775245a9/" target="_blank" className="size-[90%]  duration-500  bg-[rgba(10,102,194,0.4)] transition-all hover:betterhover:bg-[rgb(10,102,194)]  outline rounded-[30px] p-4">
                    <div style={{maskImage: `url("images/linkedin_cta.svg")`, maskSize: 'auto'}} className="block size-full group-hover:opacity-80 bg-white svgMask"></div>
                </a>
                <a href="https://github.com/ericaugusto-git" target="_blank" className="size-[90%]  bg-[rgba(1,4,9,0.70)]  duration-500 hover:betterhover:bg-[rgb(1,4,9)] transition-all outline rounded-[30px] p-4">
                    <div style={{maskImage: `url("images/github_cta.svg")`, maskSize: 'auto'}} className="block size-full group-hover:opacity-80 bg-white svgMask"></div>
                </a>
            </div>
        </div>
        <div style={{backgroundImage: `url("images/AdobeStock_528222303.jpeg")`}} className={`${style.neon_effect} xl:hidden`}></div>
    </div>
        
    </section>
}
{/* 
<div className="flex flex-col gap-5">
    {contact.map((info) => (
    <div key={info} className="p-2 sm:p-1 border-solid rounded-md  shadow-inner shadow-black/10 dark:shadow-white/5 outline-black/20 dark:outline-white/10  outline outline-[1px]  flex justify-between items-center">
        <a className="hover:text-sky-500 sm:text-xs xs:text-[8px] xs:leading-[8px] break-all w-full" href={info} target="_blank">{info}</a><a onClick={(event) => copylink(info, event)} className='svgMask cursor-pointer size-4 xs:size-2 bg-black dark:bg-white'  style={{maskImage: `url("${copiedLink == info ? "images/happy.svg" : "images/copy.svg"}")`}}  ></a>
    </div>
    ))}
</div> */}