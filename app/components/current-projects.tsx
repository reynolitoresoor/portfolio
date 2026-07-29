import { currentProjects } from "../lib/placeholder-data";
export function CurrentProjects() {
    return (
       <>
        {currentProjects.map((project, index) => (
        <div className="flex flex-col" key={index}>
            <h3 className="text-lg font-semibold tracking-tight text-balance text-gray-900">{project.name}</h3>
            <p className="text-gray-500">{project.description}</p>
            <a href={project.sourceCode}><img src={project.img} width="200" title={project.name} alt={project.name} className="mt-2"/></a>
        </div>
        ))}
       </>
    );
}