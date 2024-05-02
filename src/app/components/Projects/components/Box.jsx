import { skills_imgs } from "@/app/constants/skills_imgs";
import Image from "next/image";

export default function Box({img, name, description, skills}){

    return <div className="p-4  border-solid border-[1px] border-white rounded-[30px] overflow-hidden h-[500px]] flex flex-col">
        <div style={{backgroundImage: `url(${img})`}} className="bg-white rounded-t-3xl overflow-hidden rounded-b-xl h-[300px]  w-full bg-cover bg-no-repeat">
        </div>
            <div className="mt-6 font-code">
                <span className="text-3xl font-bold">{name}</span>
                <br/>
                <label className="text-xs text-[#C9C9C9] font-light">{description}</label>
                <div className="flex gap-4 mt-6">
                    {skills.map((skill) => {
                        const imageUrl = skills_imgs[skill];
                        if(!imageUrl){
                            console.log(skill);
                        }
                                                // bg-[url('/images/skills/angular.png')] 
                    return <div key={skill} style={{backgroundImage: `url(${imageUrl})`}} className={`saturate-0 w-6 h-6 bg-center bg-no-repeat bg-contain`}  alt=""></div>
                    })}
                </div>
            </div>
    </div>
}