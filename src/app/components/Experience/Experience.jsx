import { useTranslations } from 'next-intl';

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
          "hex": "#FFFF80"
        },
        {
          "value": "9",
          "labelKey": "webappsDeployed",
          "hex": "#FE80BF"
        }
      ];
    return <section className="my-[100px] flex flex-col items-center">
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