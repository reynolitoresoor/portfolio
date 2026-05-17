import { technicalSkills
    
 } from "../lib/placeholder-data";
export function TechnicalSkills() {
    return (
       <>
        {technicalSkills.map((skill, index) => (
        <div className="flex flex-col" key={index}>
            <h3 className="text-lg font-semibold tracking-tight text-balance text-gray-900">{skill.name}</h3>
            <p className="text-gray-500">{skill.description}</p>
            <img src={skill.img} width="200" title={skill.name} alt={skill.name} className="mt-2"/>
        </div>
        ))}
       </>
    );
}