import VerticalSlideshow from './Slider';

export default function Pill({src}){
    return (
          <div
            style={src ? { backgroundImage: `url("${src}")` } : {}}
            className="size-20 border-4 xs:border-2 border-black dark:border-white rounded-full bg-white  min-w-[104px] bg-center bg-cover relative overflow-hidden
            lg:size-14 lg:min-w-[80px] sm:size-12 sm:min-w-16 xs:size-7 xs:min-w-11"
          >
            {!src &&  <VerticalSlideshow/>}
          </div>
    )
}