import { skills_imgs } from "@/app/constants/skills_imgs";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Box({img, name, description, skills, link, subtitle, isOnline}){
    const t = useTranslations('Projects')
    return <a href={link} target="_blank"   
    className="shadow-[0_0_10px_#00000040] dark:shadow-[0_0_20px_#ffffff30] relative z-10 transition-all overflow-visible p-4 cursor-pointer border-solid border-[1px] rounded-[30px] h-[500px] flex flex-col gradient group"
    >
      <span className="absolute inset-0 bg-box-gradient opacity-0 -z-10 transition-opacity duration-300 ease-in-out rounded-[30px] group-hover:opacity-100"></span>
        <div style={{backgroundImage: `url(${img})`}} className="bg-white rounded-t-3xl overflow-hidden rounded-b-xl h-[300px]  w-full bg-cover bg-no-repeat">
        </div>
            <div className="mt-6 font-code">
                <span className="text-3xl lg:text-2xl sm:text-xl font-bold">{name}</span>
                {subtitle && <span className="text-xs"> ({subtitle})</span>}
                <br/>
                <label className="text-xs sm:text-[10px] bg-white dark:bg-black text-[#7a7a7a] dark:text-[#C9C9C9]">{description}</label>
                <div className="flex items-center absolute bottom-3 ">
      {skills.map((skill, index) => (
        <div
          key={index}
          className=" border-2 rounded-full black-gradient lg:w-7 lg:h-7 w-8 h-8 flex justify-center items-center"
          style={{ transform: `translateX(-${2 + index * 5}px)`, background: 'linear-gradient(90deg, rgb(7 7 7), rgb(35 36 37))'  }}
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
            <div className="dark:bg-black bg-white px-1 text-[10px] gap-2 flex items-center rounded-full absolute bottom-3 right-5">
                    {t('status')}: {isOnline ? 'online' : 'offline'} <div style={{backgroundColor: isOnline ? '#34d399' : ' #6b7280' }} className="size-2 rounded-full animate-pulse"></div>
            </div>
    </a>
}