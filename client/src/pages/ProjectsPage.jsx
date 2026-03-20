import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const ProjectsPage = () => {
    const { projects } = useContext(PortfolioContext);

    return (
        <>
            <Navbar />

            {/*  PROJECTS PAGE START */}
            <main className="flex-1 overflow-y-auto bg-background-dark lg:bg-background-dark scroll-smooth">
                <div className="max-w-4xl  px-4 lg:px-12 py-12">
                    <div className="mb-10">
                        {/* HEADER START */}
                        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400  mb-4">
                            <span>Docs</span>
                            <span className="material-symbols-outlined text-sm">
                                chevron_right
                            </span>
                            <span className="text-primary">Projects</span>
                        </nav>
                        {/* HEADER END */}
                        {/* PAGE HEADING START */}
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Projects
                        </h1>
                        {/* PAGE HEADING END */}
                        {/* PAGE DESCRIPTION START  */}
                        <p className="text-lg text-slate-600 dark:text-slate-400  leading-relaxed">
                            The Projects object allows you to manage and
                            interact with technical implementations. Each
                            project contains architectural metadata, deployment
                            configurations, and source references.
                        </p>
                        {/* PAGE DESCRIPTION END */}
                    </div>

                    {/* PROJECTS SHOWCASE START  */}
                    <section className="flex flex-col gap-6 md:gap-10 max-w-5xl mx-auto py-8 md:py-15 ">
                        {/* PROJECT  */}
                        {projects.map((project, index) => (
                            <article
                                key={index}
                                className="group relative rounded-3xl md:rounded-[3rem] border border-white/5 bg-[#ffffff03] p- transition-all duration-500 hover:border-primary/20 hover:bg-[#ffffff08]"
                            >
                                {/* INTERACTIVE SPOTLIGHT */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl md:rounded-[3rem] pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(var(--primary-rgb),0.08),transparent_80%)]" />
                                <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                                    {/* PROJECT COUNTER START*/}
                                    <div className="hidden sm:flex flex-row md:flex-col items-center justify-center gap-4 md:gap-2">
                                        <span className="text-3xl md:text-5xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                        <div className="w-12 h-0.5px md:w-0.5px md:h-16 bg-linear-to-r md:bg-linear-to-b from-primary/40 to-transparent" />
                                    </div>
                                    {/* PROJECTS COUNTER END */}
                                    {/* MAIN INFO START */}
                                    <div className="flex-1 space-y-4 md:space-y-6">
                                        {/* PROJECT HEADING START */}
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h2>
                                            <div className="hidden sm:block h-px flex-1 bg-white/5 min-w-5" />
                                        </div>
                                        {/* PROJECT HEADING END */}
                                        {/* PROJECT DESCRIPTION START */}
                                        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                                            {project.description}
                                        </p>
                                        {/* PROJECT DESCRIPTION END */}
                                        {/* TECH STACKS START */}
                                        <div className="relative z-10 flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:text-primary"
                                                    >
                                                        <span className="mr-1.5 h-1 w-1 rounded-full bg-primary/40" />
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                        {/* TECH STACKS END */}
                                        {/* ACTION LINKS START*/}
                                        <div className="flex flex-row items-center gap-6 md:gap-5 pt-4 md:pt-6">
                                            <div className="flex gap-1">
                                                <span className="material-symbols-outlined text-primary text-lg">
                                                    link
                                                </span>
                                                <a
                                                    href={project.viewDemoLink}
                                                    className="flex items-center gap-1 text-xs lg:text-sm font-black uppercase tracking-widest text-white group/link"
                                                >
                                                    Live Demo
                                                </a>
                                            </div>

                                            <div>
                                                <a
                                                    href={
                                                        project.sourceCodeLink
                                                    }
                                                    className="flex items-center gap-1 text-xs lg:text-sm font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-lg">
                                                        code
                                                    </span>
                                                    Github
                                                </a>
                                            </div>
                                        </div>
                                        {/* ACTION LINKS END */}
                                    </div>
                                    {/* MAIN INFO END */}
                                </div>
                            </article>
                        ))}

                        {/* VIEW MORE PROJECTS BUTTON START */}
                        <div className="mt-2 pt-2 px-2 dark:border-primary/10">
                            <a
                                href="https://github.com/ritish-sharma-dev"
                                className="inline-flex items-center justify-start gap-1 text-slate-500 hover:text-primary group"
                            >
                                <span className="font-medium">View More</span>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </a>
                        </div>
                        {/* VIEW MORE PROJECTS BUTTON END */}
                    </section>
                    {/* PROJECTS SHOWCASE END */}
                </div>
            </main>
            {/* PROJECTS PAGE END */}
            
            <Footer />
        </>
    );
};

export default ProjectsPage;
