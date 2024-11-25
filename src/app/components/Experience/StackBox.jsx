import Image from "next/image";

export default function StackBox({img, skill}){
    return <div className="bg-comment-grey/10 outline outline-1  text-comment-grey rounded-[9px] w-fit gap-3 capitalize  flex items-center  font-semibold px-3 py-1 dark:shadow-white/5 shadow-inner">
        <Image src={img} width={12} height={12} alt={skill}></Image>
        {skill}
    </div>
}