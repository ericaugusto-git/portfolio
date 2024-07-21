import { skills_imgs } from "@/app/constants/skills_imgs";

export default function Box({img, name, description, skills, link, subtitle, isOnline}){
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
                <div className="flex gap-4 mt-6">
                    {skills.map((skill) => {
                        const imageUrl = skills_imgs[skill].image;
                        if(!imageUrl){
                            
                        }
                                                // bg-[url('/images/skills/angular.png')] 
                    return <div key={skill} style={{backgroundImage: `url(${imageUrl})`}} className={`saturate-0 w-6 h-6 bg-center bg-no-repeat bg-contain`}  alt=""></div>
                    })}
                </div>
            </div>
            <div className="bg-black px-1 text-[10px] gap-2 flex items-center rounded-full absolute bottom-1 right-5">
                    Deploy Status: {isOnline ? 'online' : 'offline'} <div style={{backgroundColor: isOnline ? '#34d399' : ' #6b7280' }} className="size-2 rounded-full animate-pulse"></div>
            </div>
    </a>
}