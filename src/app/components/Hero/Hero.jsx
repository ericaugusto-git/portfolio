"use client"
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
gsap.registerPlugin(TextPlugin);

const Header = () => {
  const buzzwords = ["innovative", "creative", "awesome"];
  useGSAP(() => {
    // gsap code here...
    gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeatDelay: 0.2, repeat:-1})
    let masterTl = gsap.timeline({repeat: -1});
    buzzwords.forEach(word => { 
      let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:2})
      tl.to('.text', {duration: 1, text: word})
      masterTl.add(tl)
    })
  });

  return (
    <>
      <code className="font-bold lg:text-xs block md:text-[8px] xs:hidden" title="not the actual code lol">
        <span className="whitespace-pre">
        {`buzzwords = ["innovative", "creative", "awesome"];
generateBuzzwords = () => setInterval(() => buzzword = buzzwords[++index % buzzwords.length], 2000);`}
        </span>
        <br/>
<span className="animate-pulse text-[#4CE470]">generateBuzzwords(), index = 0;</span>
      </code>
      <div className="flex">
      <h1 className={"text-7xl lg:text-5xl font-bold my-2 max-w-[920px] leading-[84px] text-nowrap sm:text-4xl xs:text-2xl xxs:text-xl"}>
  Building <span id="buzzword" className="text-[#4CE470]"><span className="text"></span><span className="cursor">_</span> </span><br/> <span>Web Solutions for<br/> Your Business.</span>
</h1>
        {/* <img src="/images/man.png" style={{display: 'flex', marginLeft: 'auto'}}></img> */}
        {/* <Image src="/images/man.png" width={200} height={200} alt="man" className="ml-auto"/> */}
      </div>
    </>
  );
};

export default Header;
