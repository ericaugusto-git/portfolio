import Box from './components/Box'
import { useTranslations } from "next-intl";
import {motion} from 'framer-motion';
const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

export default function Projects() {
    const t = useTranslations("Projects");

    const projects = [
        {name: 'ericaugusto-os', isOnline: true, link: 'https://ericaugusto-os.pages.dev', img: '/images/ericaugusto-os.png', description: t('os'), skills: ['react', 'ts', 'scss', 'figma']},
        {name: 'Discord Clone',img: '/images/discord_clone.png', link: 'https://github.com/ericaugusto-git/discord-clone', description:t('disc'), skills: ['next', 'tailwind', 'ts']},
        {name: 'JDM Store', subtitle: 'under development', img: '/images/hero_section.png', link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjpjNX650FS4XtJrolls9RW%2FJDM%3Fpage-id%3D%26type%3Ddesign%26node-id%3D1-6%26viewport%3D741%252C598%252C0.23%26t%3DfBBVvALWC6PAzlv0-1%26scaling%3Dscale-down-width%26mode%3Ddesign', description: t('jdm'), skills: ['angular', 'ts', 'html', 'scss', 'figma']}
];
    
    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="mb-[180px] scroll-mt-16" id='projects'>
        <h2 className="text-4xl lg:text-3xl sm:text-2xl  mb-3 lg:mb-1 sm:mb-0">{t('title')}</h2>
        <label className='dark:bg-white/95 bg-accent-orange text-white dark:text-black/90 h-min flex-grow-0 lg:text-[10px] sm:text-[8px]'>{t('description')}</label>
        <motion.ul variants={container} initial="hidden" whileInView="visible" viewport={{once: true}} className='grid grid-cols-3 gap-[60px] my-[30px] dots lg:grid-cols-1'>
            {projects.map((project) => {
               return <motion.li variants={item} key={project.name}>
                    <Box  {...project}/>
                </motion.li>
            })}
        </motion.ul>
    </motion.section>
}
