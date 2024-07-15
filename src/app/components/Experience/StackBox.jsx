import Image from "next/image";

export default function StackBox({img, skill}){
    return <div className="bg-comment-grey/10 text-comment-grey rounded-[4px] w-fit gap-3 capitalize  flex items-center  font-semibold px-2 py-1 dark:shadow-white/5 shadow-inner">
        <Image src={img} width={8} height={8} alt={skill}></Image>
        {skill}
    </div>
}