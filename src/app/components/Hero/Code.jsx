
/* eslint-disable react/no-unescaped-entities */
export default function Code(){
       return    <div  className="relative size-full">
        {/* <Rnd> */}
          <div className="dark:gradient-mask-b-0 gradient-mask-b-60 p-2 pb-0 border rounded-2xl border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 ">
          <div className="relative overflow-hidden shadow-xl flex bg-white dark:bg-black    sm:max-h-[none] rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem]  ring-1 ring-inset  ring-black/20 dark:ring-white/10 !h-auto max-h-[none]">
              <div className="relative w-full flex flex-col">
                <div className="flex-none border-b border-slate-500/30">
                  <div className="flex items-center  h-8 space-x-2 px-3">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-emerald-300 rounded-full"></div>
                  </div>
                </div>
                <div className="relative min-h-0 flex-auto flex flex-col">
                  <div className="w-full flex-auto flex min-h-0 overflow-auto">
                    <div className="w-full relative flex-auto">
                      <pre className="flex min-h-full text-sm leading-6 xs:leading-3 xs:text-[10px] xxs:text-[8px]">
                        <div
                          aria-hidden="true"
                          className="block text-slate-300 dark:text-slate-600 flex-none py-4 pr-4 text-right select-none"
                          style={{ width: '50px' }}
                        >
                          {Array.from({ length: 9 }, (_, i) => (
                            <div key={i}>{i + 1}</div>
                          ))}
                        </div>
                        <code className="flex-auto relative block text-slate-200 dark:text-comment-grey-darker pt-4 pb-4 px-4 overflow-hidden ">
      {`import Box from './components/Box'

      export default function Projects() {     
          const projects = [
              {name: 'ericaugusto-os', link: 'https://ericaugusto-os.pages.dev', img: '/images/ericaugusto-os.png', description: 'My personal website with an linux rice inspired interface', skills: ['react', 'ts', 'scss', 'figma']},
              {name: 'Discord Clone',img: '/images/discord_clone.png', link: 'https://github.com/ericaugusto-git/discord-clone', description: 'Just a discord clone :)', skills: ['next', 'tailwind', 'ts']},
              {name: 'JDM Store', subtitle: 'under development', img: '/images/hero_section.png', link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjpjNX650FS4XtJrolls9RW%2FJDM%3Fpage-id%3D%26type%3Ddesign%26node-id%3D1-6%26viewport%3D741%252C598%252C0.23%26t%3DfBBVvALWC6PAzlv0-1%26scaling%3Dscale-down-width%26mode%3Ddesign', description: 'Dealership specialized in japanese cars', skills: ['angular', 'ts', 'html', 'scss', 'figma']}
      ];  
      return <section className="my-[180px] lg:mt-24 xs:mt-10">`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        {/* </Rnd> */}
  </div>
}