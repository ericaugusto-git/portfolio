export default function Experience(){
    const experiences = [  
        { 
         value: "4+",     
         label: "years of coding experience",
         hex: '#2ECB76'
        },  
        {     
         value: "2+",     
         label: "years building awesome projects as an professional front-end developer"  ,
         hex: '#FFFF80' 
        },  
        {     
         value: "9",    
         label: "webapps deployed",
         hex: '#FE80BF' 
        } 
       ]
    return <section className="my-[100px] flex flex-col items-center">
        <h2 className="text-5xl sm:text-3xl font-light text-wrap leading-tight text-center">
        With the experience<br/>
to back it up.
        </h2>
        <div className="flex gap-28 mt-24 xl:gap-0 lg:gap-10 xl:mt-10 lg:grid lg:grid-cols-1">
            {experiences.map((exp,i) => (
            <div key={i} className="flex flex-col items-center">
                <h3 style={{color: exp.hex}} className={`text-7xl font-bold`}>
                    {exp.value}
                </h3>
                <span className="w-96 xs:w-fit text-center xs:text-sm">{exp.label}</span>
            </div>
            ))}
        </div>
    </section>
}