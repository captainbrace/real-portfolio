export default function Home() {
  return (
    <div className="min-h-screen">
      
      <header className="sticky top-0 bg-red-950/90 backdrop-blur-md border-b border-red-800/60 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-red-300 transition-colors">
            Ethan.Dev
          </a>
          <nav class="flex space-x-6 text-sm sm:text-base font-medium text-red-200">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section id="about" className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-block bg-red-900/60 border border-red-700 text-red-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
          Junior Web Developer
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Hi, I{"'"}m <span className="underline decoration-red-500 decoration-wavy underline-offset-8">Ethan Andoh</span>
        </h1>
        <p className="text-lg sm:text-xl text-red-200/90 font-light leading-relaxed">
          Welcome to my one-page corner of the internet! I am an aspiring software engineering specialist building interactive, user-focused web designs. I love taking complex coding structures and translating them into simple, clean interfaces.
        </p>
        <div className="pt-4">
          <a href="#projects" className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-red-900/40 transition-all transform hover:-translate-y-0.5">
            Check Out My Projects
          </a>
        </div>
      </section>

      <section id="education" className="py-20 bg-red-900/30 border-y border-red-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Educational Path</h2>
          
          <div className="relative border-l-2 border-red-700 ml-4 md:ml-32 space-y-10">
            {/* University */}
            <div className="relative pl-8">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-red-500 border-4 border-red-950"></div>
              <span className="text-xs font-semibold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">Present</span>
              <h3 className="text-xl font-bold text-white mt-1">B.Sc. in Computer Science</h3>
              <p class="text-sm font-medium text-red-200">Academic City University</p>
              <p className="text-sm text-red-300/80 mt-1">Focusing on object-oriented software engineering, algorithmic data models, systems analysis, and client-side web application layout paradigms.</p>
            </div>

            {/* High School */}
            <div className="relative pl-8">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-red-700 border-4 border-red-950"></div>
              <span className="text-xs font-semibold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">Graduated 2024</span>
              <h3 className="text-xl font-bold text-white mt-1">High School Diploma</h3>
              <p className="text-sm font-medium text-red-200">DPS International Ghana</p>
              <p className="text-sm text-red-300/80 mt-1">Graduated with honors. Developed foundational knowledge in mathematics, introductory logic, physics, and computing science tracks.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Completed Projects</h2>
        <p className="text-center text-red-300 max-w-md mx-auto mb-12 text-sm">A display of 4 operational digital systems built during my academic and independent programming journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PROJECT CARD 1 */}
          <div className="bg-red-900/20 border border-red-800/60 rounded-xl p-6 space-y-3 hover:border-red-500/50 transition-colors">
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">Project 01</span>
            <h3 className="text-xl font-bold text-white">Interactive Todo Ledger</h3>
            <p className="text-sm text-red-200/80">A nostalgic notebook-styled browser list program allowing dynamic list serialization, cross-out checklist functions, and local file storage state capabilities.</p>
            <div className="flex gap-2 text-xs font-mono text-red-300 pt-2">
              <span className="bg-red-950 px-2 py-1 rounded">HTML5</span>
              <span className="bg-red-950 px-2 py-1 rounded">Vanilla JS</span>
              <span className="bg-red-950 px-2 py-1 rounded">CSS Grid</span>
            </div>
          </div>

          {/* PROJECT CARD 2 */}
          <div className="bg-red-900/20 border border-red-800/60 rounded-xl p-6 space-y-3 hover:border-red-500/50 transition-colors">
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">Project 02</span>
            <h3 className="text-xl font-bold text-white">E-Commerce Storefront Prototype</h3>
            <p className="text-sm text-red-200/80">A digital product interface tracking cart states, item increments, and price aggregation checkout components natively with script engines.</p>
            <div className="flex gap-2 text-xs font-mono text-red-300 pt-2">
              <span className="bg-red-950 px-2 py-1 rounded">Tailwind</span>
              <span className="bg-red-950 px-2 py-1 rounded">DOM Manipulation</span>
            </div>
          </div>

          {/* PROJECT CARD 3 */}
          <div className="bg-red-900/20 border border-red-800/60 rounded-xl p-6 space-y-3 hover:border-red-500/50 transition-colors">
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">Project 03</span>
            <h3 className="text-xl font-bold text-white">Weather Forecast Terminal</h3>
            <p className="text-sm text-red-200/80">A live responsive weather widget parsing operational live geolocation metrics from public API endpoints via network request models seamlessly.</p>
            <div className="flex gap-2 text-xs font-mono text-red-300 pt-2">
              <span className="bg-red-950 px-2 py-1 rounded">JSON Fetch</span>
              <span className="bg-red-950 px-2 py-1 rounded">REST Endpoints</span>
            </div>
          </div>

          {/* PROJECT CARD 4 */}
          <div className="bg-red-900/20 border border-red-800/60 rounded-xl p-6 space-y-3 hover:border-red-500/50 transition-colors">
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">Project 04</span>
            <h3 className="text-xl font-bold text-white">Personal Utility Dashboard</h3>
            <p className="text-sm text-red-200/80">An elegant, personalized student analytics dashboard rendering custom study schedule timelines, timers, and modular text block tools.</p>
            <div className="flex gap-2 text-xs font-mono text-red-300 pt-2">
              <span className="bg-red-950 px-2 py-1 rounded">Local Storage</span>
              <span className="bg-red-950 px-2 py-1 rounded">CSS Animations</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-red-950 border-t border-red-900/60 text-center px-6">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Connect With Me</h2>
          <p className="text-red-300 text-sm">Have a collaborative project proposal, a recruitment opening, or just want to discuss code architectures? Shoot an inbox note!</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a href="mailto:kwekuandoh10@gmail.com" className="w-full sm:w-auto bg-red-900/40 hover:bg-red-900/70 text-white font-medium border border-red-800 px-6 py-3 rounded-lg transition-colors">
              ✉️ kwekuandoh10@gmail.com
            </a>
            <a href="https://linkedin.com/in/kweku-andoh-ethan" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-red-900/40 hover:bg-red-900/70 text-white font-medium border border-red-800 px-6 py-3 rounded-lg transition-colors">
              💼 linkedin.com/in/kweku-andoh-ethan
            </a>
            <a href="https://github.com/captainbrace" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-colors w-full md:w-auto">
                <span>🐙</span>
                <span>github.com/captainbrace</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-red-400/60 border-t border-red-900/40 bg-red-950">
        <p>&copy; {new Date().getFullYear()} Ethan.Dev. All rights reserved.</p>
      </footer>

    </div>
  );
}