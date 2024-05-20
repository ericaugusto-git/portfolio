/* eslint-disable react/no-unescaped-entities */
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useLocale, useTranslations } from "next-intl";
import Code from "./Code";

gsap.registerPlugin(TextPlugin);

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("Hero");
  
  const buzzwords =
    locale == "pt-BR"
      ? ["inovadoras", "criativas", "modernas"]
      : ["innovative", "creative", "modern"];
  useGSAP(() => {
    // gsap code here...
    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeatDelay: 0.2,
      repeat: -1,
    });
    let masterTl = gsap.timeline({ repeat: -1 });
    buzzwords.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
      tl.to(".text", { duration: 1, text: word });
      masterTl.add(tl);
    });
  });

  const openResume = () => {
    window.open(locale == "pt-BR"
    ? "https://pub-23b2bdccea9b4dd0aa82eeba1d9c6805.r2.dev/curriculo%2FEric%20Augusto%20curr%C3%ADculo.pdf"
    : "https://pub-23b2bdccea9b4dd0aa82eeba1d9c6805.r2.dev/curriculo%2FEric%20Augusto%20resume.pdf")
  }

  return (
    <>
      {/* <code className="font-bold lg:text-xs block md:text-[8px] xs:hidden w-fit" title="not the actual code lol">
        <span className="whitespace-pre">
        {`buzzwords = ["innovative", "creative", "awesome"];
generateBuzzwords = () => setInterval(() => buzzword = buzzwords[++index % buzzwords.length], 2000);`}
        </span>
        <br/>
<span className="animate-pulse text-[#4CE470]">generateBuzzwords(), index = 0;</span>
      </code> */}
      <div className="mb-3 text-center flex justify-center items-center flex-col">
        <h1
          className={
            "text-5xl lg:text-3xl sm:text-2xl xs:text-[15px] xs:leading-6 xxs:text-xs font-bold flex flex-col justify-center items-center  leading-[84px] text-nowrap"
          }
        >
              <span className="pr-[120px] lg:pr-[40px] xs:pr-0 xs:ml-7">
                <span className="inline-block">{t("building")} {locale == 'pt-BR' && t("webSolutions")}</span>
                <span
                  id="buzzword"
                  className="text-[#4CE470] inline-block text-left w-[120px] ml-6 xs:ml-2"
                >
                  <span className="text"></span>
                  <span className="cursor">_</span>
                </span>
              </span>
              <span>
              {locale != 'pt-BR' && t("webSolutions")}
                {t("yourBusiness")}
              </span>
        </h1>
        {/* <img src="/images/man.png" style={{display: 'flex', marginLeft: 'auto'}}></img> */}
        {/* <Image src="/images/man.png" width={200} height={200} alt="man" className="ml-auto"/> */}
        <div className="flex gap-4 mt-3 lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px] xs:flex-col xs:justify-center xs:items-center xs:gap-0">
          <a href="#contact" className="bg-black p-2 xxs:p-1 rounded-md hover:opacity-80 w-fit h-full align-middle shadow-inner shadow-white/20">
            {t('idea')}
          </a>
          <a onClick={openResume} className="h-full  p-2 rounded-md hover:border-zinc-700 w-fit shadow-inner transition-all hover:scale-105">
            {t('cv')}
          </a>
        </div>
      </div>
      <Code />
    </>
  );
};

export default Header;
