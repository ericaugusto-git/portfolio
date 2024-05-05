import Box from './components/Box'


export default function Projects() {
     
    const projects = [{name: 'JDM Store', img: '/images/hero_section.png', description: 'Dealership specialized in japanese cars', skills: ['angular', 'ts', 'html', 'scss', 'figma']},
    {name: 'ericaugusto-os', link: 'https://ericaugusto-os.pages.dev', img: '/images/ericaugusto-os.png', description: 'linux rice inspired portfolio website', skills: ['react', 'ts', 'scss', 'figma']},
    {name: 'Discord Clone',img: '/images/discord_clone.png', description: 'Just a discord clone :)', skills: ['next', 'tailwind', 'ts']}];
    
    return <section className="my-[180px] lg:mt-24 xs:mt-10">
        <h2 className="text-5xl lg:text-3xl font-bold mb-3 lg:mb-1">{'// Projects'}</h2>
        <label className='bg-comment-grey h-min flex-grow-0 lg:text-sm'>{`Take a look on what i've being cooking`}</label>
        <ul className='grid grid-cols-3 gap-[60px] my-[30px] dots lg:grid-cols-1'>
            {projects.map((project) => {
               return <li key={project.name}>
                    <Box  {...project}/>
                </li>
            })}
        </ul>
    </section>
}