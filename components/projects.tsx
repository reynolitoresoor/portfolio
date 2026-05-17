import { projects } from "@/lib/placehoder-data";

export function Projects() {
    return (
      <>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col">
            <a href={project.sourceCode} target="_blank">
            <img src={project.img} title={project.name} alt={project.name} width="200" className="mt-2"/>
            <h3 className="text-lg font-semibold tracking-tight text-balance text-gray-900">{project.name}</h3>
            <p className="text-gray-500">{project.description}</p>
            </a>
        </div>
      ))}
      </>  
    );
}