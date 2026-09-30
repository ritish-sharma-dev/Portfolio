import React from "react";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { ChevronRight } from "lucide-react";
import LogoLoop from "../components/LogoLoop";
import TechText from "../components/TechText";

const SkillsPage = () => {
    const { skills } = useContext(PortfolioContext);

    return (
        <>
            {/* SKILLS PAGE START */}
            <main className="flex-1 overflow-y-auto bg-transparent lg:bg-transparent scroll-smooth">
                <div className="max-w-4xl  px-4 lg:px-12 py-12">
                    {/* HEADER START */}
                    <div className="mb-10">
                        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400  mb-4">
                            <span>Docs</span>
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <span className="text-primary">Skills</span>
                        </nav>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            <TechText text="Skills" />
                        </h1>
                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                            These Skills of mine defines the technical expertise
                            and the level of proficiency in various
                            technologies. It provides structured information
                            about programming languages, frameworks, tools, and
                            platforms.
                        </p>
                    </div>
                    {/* HEADER END */}
                    <LogoLoop
                        logos={[
                            {
                                name: "C",
                                icon: "https://cdn.simpleicons.org/c",
                            },
                            {
                                name: "C++",
                                icon: "https://cdn.simpleicons.org/cplusplus",
                            },
                            {
                                name: "JavaScript",
                                icon: "https://cdn.simpleicons.org/javascript",
                            },
                            {
                                name: "SQL",
                                icon: "https://cdn.simpleicons.org/sqlite",
                            },
                            {
                                name: "HTML5",
                                icon: "https://cdn.simpleicons.org/html5",
                            },
                            {
                                name: "React",
                                icon: "https://cdn.simpleicons.org/react",
                            },
                            {
                                name: "Express",
                                icon: "https://cdn.simpleicons.org/express/d1fae5",
                            },
                            {
                                name: "Node.js",
                                icon: "https://cdn.simpleicons.org/nodedotjs",
                            },
                            {
                                name: "MongoDB",
                                icon: "https://cdn.simpleicons.org/mongodb",
                            },
                            {
                                name: "Tailwind CSS",
                                icon: "https://cdn.simpleicons.org/tailwindcss",
                            },
                            {
                                name: "MySQL",
                                icon: "https://cdn.simpleicons.org/mysql",
                            },
                            {
                                name: "Git",
                                icon: "https://cdn.simpleicons.org/git",
                            },
                            {
                                name: "GitHub",
                                icon: "https://cdn.simpleicons.org/github/f0f6fc",
                            },
                            {
                                name: "Postman",
                                icon: "https://cdn.simpleicons.org/postman",
                            },
                        ]}
                    />
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
                                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
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
