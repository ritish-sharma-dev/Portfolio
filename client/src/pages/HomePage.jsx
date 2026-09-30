import React from "react";
import { NavLink } from "react-router";
import Card2 from "../components/cards/HomePageCards/Card2";
import Card3 from "../components/cards/HomePageCards/Card3";
import Card4 from "../components/cards/HomePageCards/Card4";
import PremiumIntro from "../components/PremiumIntro";
import TechText from "../components/TechText";
import {
    ArrowRight,
    ChevronRight,
    Code2,
    Download,
    ExternalLink,
    MessageCircle,
} from "lucide-react";

const HomePage = () => {
    return (
        <>
            {/* HOME PAGE START */}
            <main className="flex-1 flex flex-col lg:flex-row">
                <div className="flex-1 max-w-3xl border-r border-primary/5">
                    {/* HEADER START */}
                    <header className="relative top-0 z-10 bg-background-dark/80 backdrop-blur-md px-8 py-4 border-b border-primary/5 flex items-center">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                            <span>Docs</span>
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                            <span className="text-primary">Introduction</span>
                        </div>
                    </header>
                    {/* HEADER END */}
                    <Card3 />
                    <div className="px-4 lg:px-12 py-12 space-y-24">
                        {/* INTRODUCTION SECTION START */}
                        <section className="scroll-mt-24" id="introduction">
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6">
                                <TechText text="Introduction" />
                            </h2>
                            <div className="prose prose-invert max-w-none">
                                <PremiumIntro />
                                <p className="text-base sm:text-lg leading-relaxed text-slate-400 mb-6">
                                    I am a passionate software engineer with a
                                    strong foundation in computer science and a
                                    keen interest in building innovative and
                                    user-centric applications. My goal is to
                                    leverage my technical skills to solve
                                    real-world problems and contribute to
                                    meaningful projects.
                                </p>
                                <p className="lg:text-md leading-relaxed text-slate-400">
                                    Specialized in building high-performance
                                    distributed systems with a focus on
                                    technical rigor and scalability. A strong
                                    advocate for clean architecture, type
                                    safety, and the belief that great software
                                    begins with comprehensive documentation.
                                    Currently engineering robust, backend-driven
                                    solutions with a product-first mindset.{" "}
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-1 gap-4">
                                <a
                                    href="/Ritish_Sharma_Resume.pdf"
                                    download
                                    className="mt-auto pt-6  border-primary/10"
                                >
                                    <button className="w-full flex items-center justify-center gap-2 bg-primary text-background-dark px-4 py-2.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
                                        <Download className="h-4.5 w-4.5" aria-hidden="true" />
                                        Resume
                                    </button>
                                </a>
                            </div>
                        </section>
                        {/* INTRODUCTION SECTION END */}
                        {/* PROJECTS SECTION START */}
                        <section className="scroll-mt-24" id="projects">
                            <div className="flex items-center gap-3 mb-8">
                                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                                    Projects
                                </h2>
                                <div className="h-px flex-1 bg-primary/10"></div>
                            </div>
                            <div className="grid gap-6">
                                <div className="p-6 rounded-xl border border-primary/10 bg-background-dark shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <MessageCircle aria-hidden="true" />
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                title="View Demo"
                                                className="text-slate-400 hover:text-primary"
                                                href="https://chat-sigma-one-26.vercel.app/login"
                                            >
                                                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                                            </a>
                                            <a
                                                title="Code"
                                                className="text-slate-400 hover:text-primary"
                                                href="https://github.com/Ritish-Sharma-Dev/Chat-App"
                                            >
                                                    <Code2 className="h-5 w-5" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
                                        MERN Stack Chat App
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                                        A Full-Stack real-time chat application
                                        using the MERN stack (MongoDB, Express,
                                        React, Node.js) and Socket.io.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 pt-2 px-2 border-primary/10">
                                <NavLink
                                    to="/projects"
                                    className="inline-flex items-center justify-start gap-1 text-slate-500 hover:text-primary group"
                                >
                                    <span className="font-medium">
                                        View More
                                    </span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </NavLink>
                            </div>
                        </section>
                        {/* PROJECTS SECTION END */}
                    </div>
                </div>
                {/* RIGHT SIDE CODE START*/}
                <div className="flex-1  min-h-96 rounded-xl overflow-hidden font-sans">
                    <Card4 />
                    <Card2 />
                </div>
                {/* RIGHT SIDE CODE END */}
            </main>
            {/* HOME PAGE END */}
        </>
    );
};

export default HomePage;
