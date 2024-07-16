"use client"

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher(){
    const [mounted, setMounted] = useState(false)
    useEffect(() =>  setMounted(true), [])
    const { setTheme, resolvedTheme } = useTheme()
    
    const t  = useTranslations("Hero");

    return <a className="group" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}><span style={{maskImage: `url(${mounted ? (resolvedTheme === 'dark' ? "/images/sun.svg" : "/images/moon.svg") : "/images/sun.svg"})`}} className="block mx-auto size-[18px] bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"></span> </a>
}