/* eslint-disable react/no-unescaped-entities */
import { useLocale, useTranslations } from "next-intl";
import Code from "./Code"; 
import Pill from "./Pill"; 
import { useScramble } from "use-scramble";
import { delay, motion } from "framer-motion";
import { resumes } from "@/app/constants/resume";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Header = () => {
  const locale = useLocale();
  const t = useTranslations("Hero");

  const openResume = () => {
    window.open(resumes[locale])
  }
  const scrambleSpeed = 0.5;
  const { ref: jp, replay: replayJp } = useScramble({ 
    text: "フロントエンドデベロッパー",
    speed: scrambleSpeed
  });
  const { ref: latin, replay: replayLatin } = useScramble({ 
    text: t('front'),
    speed: scrambleSpeed
  });

  return (
    <section id="hero">
      <div className="text-nowrap font-thin uppercase text-lg font-martian text-comment-grey-darker lg:text-sm xs:text-xs sm:hidden">
      <span style={{textOrientation: 'upright', writingMode: 'vertical-rl'}} ref={latin}   onMouseOver={replayLatin} onFocus={replayLatin}  className="absolute left-3  xl:-left-1   bottom-5 "></span>
      <span style={{textOrientation: 'upright', writingMode: 'vertical-rl'}} ref={jp}  onMouseOver={replayJp} onFocus={replayJp}  className="absolute right-3 xs:-right-2 lg:-right-1   top-14 tracking-[0.4rem]"></span>
      </div>
      <motion.div initial="hidden" animate={"visible"}  variants={container}  className="mb-3 text-center flex justify-center items-center flex-col">
        <h1 className="text-5xl lg:text-3xl sm:text-2xl xs:text-[15px] xs:leading-6 xxs:text-xs font-bold flex flex-col justify-center items-center leading-[84px] text-nowrap text-comment-grey">
          <motion.div variants={item} className="flex items-center gap-6 lg:gap-4 xs:gap-3 relative">
            {t("iAm")} <span className="dark:text-white text-black">Eric Augusto</span>
            <Pill src={'/images/profile_pic.png'}/>
            <span className="absolute -right-7 xs:-right-3">,</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6 lg:gap-4 xs:gap-3">
            <span className="dark:text-white text-black">{t("frontend")}</span>
            <Pill/> {t("developer")}
          </motion.div>

         {locale != 'pt-BR' && <motion.div variants={item} className="flex items-center gap-6 lg:gap-4 xs:gap-3">
            {t("basedIn")} <span className="dark:text-white text-black">Brazil</span>
            <Pill src={'/images/tucano.jpg'}/>
          </motion.div>}

        </h1>
        <motion.h6  variants={item} className="text-comment-grey pt-3 pb-8 max-w-[53rem] lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px]">{t('hello')}</motion.h6>
        <motion.div  variants={item} className="flex gap-4 mt-3 lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px] xs:flex-col xs:justify-center xs:items-center xs:gap-0">
          <a href="#contact" className=" dark:bg-black bg-[#cccccc24] p-2 xxs:p-1 px-4 outline-1 outline-black/10 dark:outline-white/25 outline outline-offset-4 rounded-full hover:opacity-80 w-fit h-full align-middle shadow-inner shadow-black/20 dark:shadow-white/20">
            {t('idea')}
          </a>
          <a onClick={openResume} className="h-full  p-2 rounded-md hover:border-zinc-700 w-fit cursor-pointer transition-all hover:scale-105">
            {t('cv')}
          </a>
        </motion.div> 
      </motion.div>
      <motion.div className="size-full" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}}>
        <Code />
      </motion.div>
    </section>
  );
};

export default Header;
