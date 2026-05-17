export function Nav() {
    return (
        <nav className="w-full flex justify-center h-16">
            <div className="w-full max-w-5xl flex justify-center items-center border-b border-b-foreground/10 p-3 px-5 text-sm">
            <div className="flex justify-center gap-2 md:gap-10 lg:gap-x-12">
                <a href="#about" className="text-sm/6 font-semibold text-gray-900">About</a>
                <a href="#work-experience" className="text-sm/6 font-semibold text-gray-900">Work Experience</a>
                <a href="#studies" className="text-sm/6 font-semibold text-gray-900">Studies</a>
                <a href="#technical-skills" className="text-sm/6 font-semibold text-gray-900">Technical Skills</a>
                <a href="#projects" className="text-sm/6 font-semibold text-gray-900">Projects</a>
            </div>
            </div>
        </nav>
    );
}