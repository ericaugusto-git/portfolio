import { skills_imgs } from "@/app/constants/skills_imgs";
import Image from "next/image";

export default function Stack() {

   return  <section  className="grid grid-rows-3  grid-cols-5 gap-5 relative">
    <code className="whitespace-pre absolute top-[-200px] left-[-120px]">
{`
/**
 * Microfrontend
 * Responsive Design
 * Progressive Web App (PWA)
 * Single Page Application (SPA)
 * SEO optimization
 * UI/UX
**/`}
    </code>
    <div className="flex flex-col gap-1 absolute right-7 top-[-145px]">
{[1,2,3,5,6,7,8].map((i) => (
        <div key={i} className="rounded-full size-3 border-solid border-[#464646] border-[1px]"></div>
    ))}
</div> 
    <h2 className="text-5xl col-span-2 font-light">
    Solving real problems 
with an ever-growing 
tech stack
    </h2>
        { Object.keys(skills_imgs).map((skill) => (
        <div key={skill} style={{backgroundImage: `url(${skills_imgs[skill]})`}} className="bg-center bg-no-repeat bg-contain saturate-0 bg-origin-content transition-all hover:saturate-100 border-solid border-[1px] rounded-xl flex-grow-0  border-[#464646] flex items-center justify-items-center p-6">
        </div>
        ))}
   </section>
}

