"use client"

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher(){
    const [mounted, setMounted] = useState(false)
    useEffect(() =>  setMounted(true), [])
    const { setTheme, resolvedTheme } = useTheme()
    
    const t  = useTranslations("Hero");

    return <div className="flex gap-12 xs:gap-2 absolute right-3 lg:right-1">
    <span className="font-martian font-thin uppercase lg:text-xs sm:text-[11px]">{t('theme')}: </span>
    <div onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}  style={{background: mounted ? (resolvedTheme === 'dark' ? 'white' : 'black') : 'white'}} className='size-6 lg:size-4 cursor-pointer'></div>
  </div>
}