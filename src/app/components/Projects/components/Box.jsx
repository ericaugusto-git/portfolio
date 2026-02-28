import { skills_imgs } from "@/app/constants/skills_imgs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Box.module.scss"

export default function Box({img, gif, name, description, skills, link, subtitle}){
    const t = useTranslations('Projects');
    return <a href={link} target="_blank"  
    style={{'--img-project':  `url('${img}')`, '--gif-project': `url('${gif ?? img}')`}} 
    className={`shadow-[0_0_10px_#00000040] dark:shadow-[0_0_20px_#ffffff30] relative z-10 transition-all overflow-visible p-4 cursor-pointer border-solid border-[1px] rounded-[30px] h-[500px] lg:h-[350px] flex flex-col gradient group ${styles.box}`}
    >
      <span className="absolute inset-0 bg-box-gradient opacity-0 -z-10 transition-opacity duration-300 ease-in-out rounded-[30px] group-hover:opacity-100"></span>
        <div className={`bg-white rounded-t-3xl overflow-hidden rounded-b-xl h-[300px] lg:h-[150px]  w-full bg-cover bg-no-repeat ${styles.box_img}`}>
        </div>
            <div className="mt-6">
                <span className="text-3xl font-code lg:text-2xl sm:text-xl font-bold">{name}</span>
                {subtitle && <span className="text-xs"> ({subtitle})</span>}
                <br/>
                <label className="text-sm font-code sm:text-[10px] bg-white dark:bg-black text-[#7a7a7a] dark:text-[#C9C9C9]">{description}</label>
                <div className="flex items-center absolute bottom-3 ">
      {skills.map((skill, index) => (
        <div
          key={index}
          className=" border-2 border-black/80 dark:border-white rounded-full black-gradient lg:w-7 lg:h-7 w-8 h-8 flex justify-center items-center bg-gradient-to-r from-[#f6f6f6] to-[#d4d4d4] dark:from-[#070707] dark:to-[#232425]"
          style={{ transform: `translateX(-${2 + index * 5}px)`}}
        >
          <Image width={32} height={32} src={skills_imgs[skill].image} alt={`icon${index + 1}`} className="p-2" />
        </div>
      ))}
    </div>
                {/* <div className="flex gap-4 mt-6">
                    {skills.map((skill) => <div key={skill} style={{backgroundImage: `url(${skills_imgs[skill].image})`}} className={`saturate-0 w-6 h-6 bg-center bg-no-repeat bg-contain`}  alt=""></div>
                    )}
                </div> */}
            </div>
            {/* <div className="dark:bg-black lg:invisible bg-white px-1 text-[10px] gap-2 flex items-center rounded-full absolute bottom-3 right-5 font-code">
                    {t('status')}: {isOnline ? 'online' : 'offline'} <div style={{backgroundColor: isOnline ? '#34d399' : ' #6b7280' }} className="size-2 rounded-full animate-pulse"></div>
            </div> */}
    </a>
}