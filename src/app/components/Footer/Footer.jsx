import { useTranslations } from 'next-intl';


export default function Footer(){
    const t = useTranslations('Footer');

    return <footer  className="text-comment-grey">
        <div className="flex justify-between mb-8">
            <div className='sm:text-xs'>
                <span>
                {'//'} {t('developed')} Next.js, Tailwind, and Figma.
                </span>
                <br/>
                <span className="text-function animate-pulse">
                {t('thanks')}();
                </span>
            </div>
            <div onClick={() => {window.scrollTo(0, 0)}} className="bg-white hover:bg-gray-100 rounded-full w-fit px-1 cursor-pointer shadow-lg shadow-white/10">
                ^
            </div>
        </div>
        <p className="mb-[-30px] flex items-center gap-2 sm:text-xs"><span className='leading-[1px]'>&copy;</span> 2024 Eric Augusto. {t('rights')}.</p>
    </footer>
}