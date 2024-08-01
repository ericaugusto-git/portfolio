import { useTranslations } from "next-intl";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const t = useTranslations("Experience");

  const experienceData = {
    title: t("Front.title"),
    company: t("Front.company"),
    date: t('date.current'),
    obligations: [
      t("Responsibilities.point1"),
      t("Responsibilities.point2"),
      t("Responsibilities.point3")
    ],
    achievements: [
      t("Achievements.point1"),
      t("Achievements.point2"),
      t("Achievements.point3"),
    ],
    skills: [
      { img: "/images/skills/angular.png", name: "Angular" },
      { img: "/images/skills/ts.webp", name: "TypeScript" },
      { img: "/images/skills/scss.png", name: "SCSS" },
      { img: "/images/skills/git.png", name: "Git" },
      { img: "/images/skills/figma.png", name: "Figma" },
    ]
  };
  
  const internship = {
    title: t("Intern.title"),
    company: t("Intern.company"),
    date: t('date.intern'),
    obligations: [
      t("Responsibilities.point4"),
      t("Responsibilities.point5"),
      t("Responsibilities.point6")
    ],
    skills: [
      { img: "/images/skills/py.webp", name: "Python" },
      { img: "/images/skills/java.png", name: "Java" }
    ]
  };
  

  return (
    <section className="relative my-[100px] scroll-mt-16" id="experience">
      {/* radial-gradient(circle at center, white -20%, transparent 80%) */}
      {/* <Image width={1400} height={500} className='absolute inset-0' src={'images/bbblurry (11).svg' } alt={''}></Image> */}
      {/* <div  style={{ backgroundImage: `url('images/bbblurry (11).svg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', maskImage: 'radial-gradient(circle at center, white -20%, transparent 100%)'}} className='absolute inset-0'></div> */}
      <h2 className="mb-7 text-4xl lg:text-3xl sm:text-2xl font-light text-wrap leading-tight">
        {`//`} {t("title")}
      </h2>
      <div className="flex flex-col divide-y-[1px] divide-comment-grey gap-3">
      <ExperienceCard {...experienceData} />
      <ExperienceCard {...internship} />
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
