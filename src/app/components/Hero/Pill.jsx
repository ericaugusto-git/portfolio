import Image from "next/image";
import VerticalSlideshow from './Slider';

export default function Pill({src}){
    return (
          <div
            className="size-20 border-4 xs:border-2 border-black dark:border-white rounded-full bg-white min-w-[104px] relative overflow-hidden
            lg:size-14 lg:min-w-[80px] sm:size-12 sm:min-w-16 xs:size-7 xs:min-w-11"
          >
            {src ? (
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 44px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 104px"
                className="object-cover"
              />
            ) : (
              <VerticalSlideshow/>
            )}
          </div>
    )
}