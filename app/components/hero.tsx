import { TechnicalSkills } from "./technical-skills";
import { Projects } from "./projects";
export function Hero() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 items-center">
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="flex flex-col md:fixed lg:fixed top-20 md:mt-5 lg:mt-5 md:pt-5 md:pt-5 items-center">
            <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            rel="noreferrer"
          >
            <img src={'./assets/images/profile.png'} width="200" title="Reynolito Reso-or" alt="Reynolito Reso-or" />
          </a>
          <p className="flex items-center text-lg mt-2"><svg className="text-red-500 mr-1" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLineJoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"></path></svg><span>Philippines</span></p>
          <p className="flex items-center text-lg mt-2"><svg className="text-red-500 mr-1" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 0 0 1.5-1.5v-2.742a1.5 1.5 0 0 0-1.11-1.448l-2.91-.727a1.5 1.5 0 0 0-1.548.527l-.638.85a1.5 1.5 0 0 1-1.607.548 12.035 12.035 0 0 1-7.44-7.44 1.5 1.5 0 0 1 .548-1.607l.85-.638a1.5 1.5 0 0 0 .527-1.548L6.69 3.36A1.5 1.5 0 0 0 5.242 2.25H2.5A1.5 1.5 0 0 0 1 3.75v3z"/></svg><span>+639087894288</span></p>
          <div className="flex">
            <a className="rounded-3xl mt-2 mx-1 border px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center">English</a>
            <a className="rounded-3xl mt-2 mx-1 border px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center">Tagalog</a>
            <a className="rounded-3xl mt-2 mx-1 border px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center">Visaya</a>
          </div>
        </div>
      </div>
      <div className="flex-col col-span-2">
        <div id="about">
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Reynolito J. Reso-or</h1>
          <p className="text-lg md:text-2xl lg:text-2xl mt-2 text-gray-500 max-w-xl">
            FullStack Developer
          </p>
        </div>
        <div className="flex overflow-auto overflow-hidden">
          <a href="https://github.com/reynolitoresoor" className="rounded-3xl mr-1 mt-5 border px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"><span aria-hidden="true" className="mx-1"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></span><div>Github</div></a>
          <a href="https://www.linkedin.com/in/reynolito-reso-or-67a1b9108/" className="rounded-3xl mx-3 mt-5 border px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"><span area-hidden="true" className="mx-1"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></span><div>LinkedIn</div></a>
          <a href="mailto:reynolitoresoor123.com" className="rounded-3xl mx-1 mt-5 border px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"><span area-hidden="true" className="mx-1"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path></svg></span><div>Email</div></a>
        </div>
        <p className="text-lg mt-5">Full Stack Developer with experience building modern web applications using Next.js, React, ReactNative, Nuxt.js, Vue, Supabase, Prisma, Tailwind CSS, Wordpress, Woocommerce, Laravel, CodeIgniter, PostgreSQL, MDBootstrap, Bootstrap, Git. Skilled in developing responsive frontends, scalable backend systems, REST APIs, authentication, and database management. Passionate about creating clean, efficient, and user-friendly applications with modern technologies.</p>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        <h2 id="work-experience" className="text-lg font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Work Experience</h2>
        <div className="flex flex-col mt-3">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-lg font-semibold tracking-tight text-balance text-gray-900">Xtar Media Solutions</h3>
            <p>June 2017 - August 2024</p>
          </div>
          <h4 className="text-blue-500">FullStack Developer</h4>
          <ul className="list-disc mx-10">
            <li>Customize and develop custom themes and plugins</li>
            <li>Backend Development (Laravel & CodeIgniter)</li>
            <li>Develop RESTful APIs for frontend</li>
            <li>Frontend Development (Vue.js & React.js)</li>
            <li>Database & API Handling</li>
          </ul>
        </div>
        <div className="flex flex-col mt-3">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-lg font-semibold tracking-tight text-balance text-gray-900">Archintel</h3>
            <p>August 2024 - Present</p>
          </div>
          <h4 className="text-blue-500">Backend Developer </h4>
          <ul className="list-disc mx-10">
            <li>Customize and develop Wordpress and Laravel sites</li>
            <li>Create custom themes and plugins</li>
            <li>Handle MailChimp for email campaign</li>
            <li>Frontend Development (Vue.js)</li>
            <li>Database & API Handling</li>
          </ul>
        </div>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        <div className="w-full flex flex-col">
          <h2 id="studies" className="text-lg font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Studies</h2>
          <h3 className="text-lg font-semibold tracking-tight text-balance text-gray-900">Foundation University</h3>
          <p>Bachelor of Science in Information Technology</p>
        </div>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        <h2 id="technical-skills" className="text-lg font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-3 mt-3 md:grid-cols-3 lg:grid-cols-3">
          <TechnicalSkills />
        </div>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        <h2 id="projects" className="text-lg font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">Projects</h2>
        <div className="grid grid-cols-2 gap-5 mt-3 md:grid-cols-3 lg:grid-cols-3">
          <Projects />
        </div>
        
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      </div>
    </div>
  );
}
