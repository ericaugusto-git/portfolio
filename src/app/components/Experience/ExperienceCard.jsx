import { useTranslations } from "next-intl";
import StackBox from './StackBox';

const ExperienceCard = ({ title, company, date, obligations, achievements, skills }) => {
  const t = useTranslations("Experience");
  return (
    <div className='outline outline-1 outline-black dark:outline-white p-[6px] rounded-[30px] bg-black/5 dark:bg-[#ffffff07]'>
      <div className="flex items-start justify-between rounded-t-3xl rounded-b-xl  pb-3 pt-1 px-4 bg-black/80 dark:bg-white/90 text-white dark:text-black">
        <span className="flex flex-col">
          <span className='text-xl lg:text-sm leading-5'>{title} <span className='invisible md:visible text-[10px]'>({date})</span></span>
          <span className="text-comment-grey text-xs">{company}</span>
        </span>
        <span className='md:hidden'>{date}</span>
      </div>
      <div className="text-sm lg:text-xs xxs:text-[10px] ">
        <span className="flex ml-[1px ] my-2 items-center gap-1 text-nowrap xs:flex-col xs:items-start xs:gap-2">
          {/* Working with: */}
          <div className="flex pl-[1.3px] items-center gap-2 flex-wrap">
            {skills.map((skill, index) => (
              <StackBox key={index} img={skill.img} skill={skill.name} />
            ))}
          </div>
        </span>
        <span>🌱 {t('Responsibilities.title')}</span>
        <ul className="list-disc pl-5 space-y-2 my-2">
          {obligations.map((obligation, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">◉</span>
              <span>{obligation}</span>
            </li>
          ))}
        </ul>
        {achievements && <><span>✨ {t('Achievements.title')}</span>
        <ul className="list-disc pl-5 space-y-2 my-2 ">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">◉</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul></>}
      </div>
    </div>
  );
};

export default ExperienceCard;
