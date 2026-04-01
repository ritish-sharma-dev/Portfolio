import React from "react";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const SkillsPage = () => {
    const { skills } = useContext(PortfolioContext);

    return (
        <>
            {/* SKILLS PAGE START */}
            <main className="flex-1 overflow-y-auto bg-background-dark lg:bg-background-dark scroll-smooth">
                <div className="max-w-4xl  px-4 lg:px-12 py-12">
                    {/* HEADER START */}
                    <div className="mb-10">
                        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400  mb-4">
                            <span>Docs</span>
                            <span className="material-symbols-outlined text-sm">
                                chevron_right
                            </span>
                            <span className="text-primary">Skills</span>
                        </nav>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Skills
                        </h1>
                        <p className="max-md:text-md  text-lg  text-slate-600 dark:text-slate-400  leading-relaxed">
                            These Skills of mine defines the technical expertise
                            and the level of proficiency in various
                            technologies. It provides structured information
                            about programming languages, frameworks, tools, and
                            platforms.
                        </p>
                    </div>
                    {/* HEADER END */}
                    {/* SKILLS CARDS  START */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* SKILLS CARD START */}
                        {skills.map((skill, index) => (
                            <article
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#ffffff05] p-8 transition-all duration-500 hover:border-primary/30 hover:bg-[#ffffff0d]"
                            >
                                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100" />
                                <div className="relative z-10 mb-8 flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                                            Expertise / 0{index + 1}
                                        </p>
                                        <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </h2>
                                    </div>
                                </div>
                                <div className="relative z-10 flex flex-wrap gap-2">
                                    {skill.examples.map((example, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:text-primary"
                                        >
                                            <span className="mr-1.5 h-1 w-1 rounded-full bg-primary/40" />
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                        {/* SKILLS CARD END */}
                    </section>
                    {/* SKILLS CARDS END */}
                </div>
            </main>
            {/* SKILLS PAGE END */}
        </>
    );
};

export default SkillsPage;
