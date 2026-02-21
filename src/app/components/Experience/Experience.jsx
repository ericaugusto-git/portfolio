import { useTranslations } from "next-intl";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const t = useTranslations("Experience");

  const current = {
    title: t("Front.title"),
    company: t("Front.company"),
    date: t('date.current'),
    obligations: [
      t("Responsibilities.point1"),
      t("Responsibilities.point2"),
      t("Responsibilities.point3"),
      t("Responsibilities.point4"),
    ],
    achievements: [
      t("Achievements.point1"),
      t("Achievements.point2"),
      t("Achievements.point3"),
      t("Achievements.point4"),
    ],
    skills: [
      { img: "/images/skills/angular.png", name: "Angular" },
      { img: "/images/skills/ts.png", name: "TypeScript" },
      { img: "/images/skills/nx.png", name: "NX Monorepo" },
      { img: "/images/skills/git.png", name: "Git" },
      { img: "/images/skills/figma.png", name: "Figma" },
      { img: "/images/skills/rxjs.png", name: "RxJS" },
      { img: "/images/skills/wio.png", name: "WebdriverIO" },
      { img: "/images/skills/jest.png", name: "Jest" },
    ]
  };


  
  const secondary = {
    title: t("Secondary.title"),
    company: t("Secondary.company"),
    date: t('date.secondary'),
    obligations: [
      t("Responsibilities.point5"),
      t("Responsibilities.point6"),
      t("Responsibilities.point7"),
    ],
    achievements: [
      t("Achievements.point5"),
      t("Achievements.point6"),
      t("Achievements.point7"),
    ],
    skills: [
      { img: "/images/skills/angular.png", name: "Angular" },
      { img: "/images/skills/ts.png", name: "TypeScript" },
      { img: "/images/skills/scss.png", name: "SCSS" },
      { img: "/images/skills/git.png", name: "Git" },
      { img: "/images/skills/figma.png", name: "Figma" },
    ]
  };
  

  return (
    <section className="relative scroll-mt-16 " id="experience">
      {/* radial-gradient(circle at center, white -20%, transparent 80%) */}
      {/* <Image width={1400} height={500} className='absolute inset-0' src={'images/bbblurry (11).svg' } alt={''}></Image> */}
      {/* <div  style={{ backgroundImage: `url('images/bbblurry (11).svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', maskImage: 'radial-gradient(circle at center, white -20%, transparent 100%)'}} className='absolute inset-0'></div> */}
      <div className="mb-7 flex gap-2 flex-col">

      <h2 className="text-4xl lg:text-3xl text-center  sm:text-2xl font-light text-wrap leading-tight">
        {t("title")}
      </h2>
      {/* <label className='dark:bg-white/95 w-fit  bg-accent-orange text-white dark:text-black/90 h-min flex-grow-0 lg:text-[10px] sm:text-[8px]'>{t('description')}</label> */}
      </div>
      <div className="flex flex-col divide-y-[1px] gap-6">
      <ExperienceCard {...current} />
      <ExperienceCard {...secondary} />
      </div>
      {/* <div className="flex gap-28 mt-24 xl:gap-0 lg:gap-10 xl:mt-10 lg:grid lg:grid-cols-1 ">
            {experiences.map((exp,i) => (
            <div key={i} className="flex flex-col items-center ">
                <h3 style={{color: exp.hex}} className={`text-7xl lg:text-6xl font-bold`}>
                    {exp.value}
                </h3>
                <span className="w-96 xs:w-fit text-center lg:text-xs ">{t(exp.labelKey)}</span>
            </div>
            ))}
        </div> */}
    </section>
  );
}
