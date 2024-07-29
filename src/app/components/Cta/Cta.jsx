"use client"

import Image from "next/image";
import { useState } from "react";
import {Contact} from './components/Contact';

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
        <div className="grid mt-24 xl:grid-cols-1 xl:gap-3 grid-cols-2 gap-20">
            <Contact/>
            <div className="flex flex-col gap-5">
                {contact.map((info) => (
                <div key={info} className="p-2 sm:p-1 border-solid rounded-md   shadow-inner shadow-black/10 dark:shadow-white/5 outline-black/20 dark:outline-white/10  outline outline-[1px]  flex justify-between items-center">
                    <a className="hover:text-sky-500 sm:text-xs xs:text-[8px] xs:leading-[8px] break-all w-full" href={info} target="_blank">{info}</a><a onClick={(event) => copylink(info, event)} className='svgMask cursor-pointer size-4 xs:size-2 bg-black dark:bg-white'  style={{maskImage: `url("${copiedLink == info ? "images/happy.svg" : "images/copy.svg"}")`}}  ></a>
                </div>
                ))}
            </div>
        </div>
    </section>
}