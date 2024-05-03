import Box from './components/Box'


export default function Projects() {
     
    const projects = [{name: 'JDM Store', img: '/images/hero_section.png', description: 'Dealership specialized in japanese cars', skills: ['angular', 'ts', 'html', 'scss', 'figma']},
    {name: 'ericaugusto-os', link: 'https://ericaugusto-os.pages.dev', img: '/images/ericaugusto-os.png', description: 'linux rice inspired portfolio website', skills: ['react', 'ts', 'scss', 'figma']},
    {name: 'Discord Clone',img: '/images/discord_clone.png', description: 'Just a discord clone :)', skills: ['next', 'tailwind', 'ts']}];
    console.log(projects)
    return <section className="my-[180px]">
        <h2 className="text-5xl font-bold">{'// Projects'}</h2>
        <ul className='grid grid-cols-3 gap-[60px] my-[30px]'>
            {projects.map((project) => {
               return <li key={project.name}>
                    <Box  {...project}/>
                </li>
            })}
        </ul>
    </section>
}