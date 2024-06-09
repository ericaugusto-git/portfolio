import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Experience(){
    const t = useTranslations('Experience');
    const experiences = [
        {
          "value": "4+",
          "labelKey": "yearsCoding",
          "hex": "#2ECB76"
        },
        {
          "value": "2+",
          "labelKey": "yearsProfessional",
          "hex": "#8bc7d5"
        },
        {
          "value": "9",
          "labelKey": "webappsDeployed",
          "hex": "#FE80BF"
        }
      ];
    return <section  className="relative my-[100px] flex flex-col items-center" id='experience'>
      {/* radial-gradient(circle at center, white -20%, transparent 80%) */}
      {/* <Image width={1400} height={500} className='absolute inset-0' src={'images/bbblurry (11).svg' } alt={''}></Image> */}
      {/* <div  style={{ backgroundImage: `url('images/bbblurry (11).svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', maskImage: 'radial-gradient(circle at center, white -20%, transparent 100%)'}} className='absolute inset-0'></div> */}
        <h2   className="text-4xl lg:text-3xl sm:text-2xl font-light text-wrap leading-tight text-center whitespace-pre-line">
        {t('title')}
        </h2>
        <div className="flex gap-28 mt-24 xl:gap-0 lg:gap-10 xl:mt-10 lg:grid lg:grid-cols-1 ">
            {experiences.map((exp,i) => (
            <div key={i} className="flex flex-col items-center ">
                <h3 style={{color: exp.hex}} className={`text-7xl lg:text-6xl font-bold`}>
                    {exp.value}
                </h3>
                <span className="w-96 xs:w-fit text-center lg:text-xs ">{t(exp.labelKey)}</span>
            </div>
            ))}
        </div>
    </section>
}