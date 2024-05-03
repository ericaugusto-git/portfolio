"use client"

import Image from "next/image";
import { useState } from "react";

export default function Cta(){
    const contact = ["mailto:eric72001@hotmail.com", "tel:(71) 98188-6126", "https://github.com/ericaugusto-git", "https://www.linkedin.com/in/eric-augusto-775245a9/"];
    const [copiedLink, setCopiedLink] = useState();
    const copylink = (link) => {
        console.log(link)
        navigator.clipboard.writeText(link.replace('mailto:', '').replace('tel:', ''));
        setCopiedLink(link);
        setTimeout(() => {
            setCopiedLink(null);
        }, 3000);
    }
    return <section>
        <div className="grid mt-24 grid-cols-2">
            <form className="flex flex-col gap-7 pr-40">
        <h5 className="text-5xl">
        Let’s build an awesome
        project together
        </h5>
                <fieldset className="flex gap-[26px]">
                    <span className="text-nowrap">const email = </span>
                    <input className="bg-white/5 border-none outline-none w-full rounded-sm"/>
                </fieldset>
                <fieldset className="flex gap-2">
                    <span className="text-nowrap">const message =</span>
                    <textarea className="bg-white/5 border-none outline-none textarea resize-none w-full rounded-sm" rows={5}></textarea>
                </fieldset>
                <button className="bg-[#0B0B0B] flex relative self-end p-1 pr-8 group rounded-sm mt-[-20px]">
                    <span className="uppercase italic font-light">send</span>
                    <Image className="absolute top-[2px] right-[2px] group-hover:top-0 group-hover:right-0 transition-all rotate-[140deg]" src="images/arrow.svg" height={20} width={20} alt="send arrow"/>
                </button>
            </form>
            <div className="flex flex-col gap-5">
                {contact.map((info) => (
                <div key={info} className="p-2 border-solid border-white border-[1px] rounded-md flex justify-between">
                    <a className="hover:text-blue-300" href={info} target="_blank">{info}</a>
                    <Image  onClick={() => copylink(info)} className="cursor-pointer" src={copiedLink == info ? "images/happy.svg" : "images/copy.svg"} height={15} width={15} alt="copy icon"/>
                </div>
                ))}
            </div>
        </div>
    </section>
}