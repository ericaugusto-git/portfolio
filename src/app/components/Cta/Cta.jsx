"use client"

import Image from "next/image";
import { useState } from "react";
import {Contact} from './components/Contact';

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
    return <section id="contact">
        <div className="grid mt-24 grid-cols-2">
            <Contact/>
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