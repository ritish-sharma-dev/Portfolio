import Navbar from "../components/Navbar";
import { NavLink } from "react-router";
import Footer from "../components/Footer";
import Card2 from "../components/cards/HomePageCards/Card2";
import Card3 from "../components/cards/HomePageCards/Card3";
import Card4 from "../components/cards/HomePageCards/Card4";

const HomePage = () => {
    return (
        <>
            <Navbar />

            {/* HOME PAGE START */}
            <main className="flex-1 flex flex-col lg:flex-row">
                <div className="flex-1 max-w-3xl border-r border-slate-200 dark:border-primary/5">
                    {/* HEADER START */}
                    <header className="relative top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-8 py-4 border-b border-slate-200 dark:border-primary/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span>Docs</span>
                            <span className="material-symbols-outlined text-[14px]">
                                chevron_right
                            </span>
                            <span className="text-primary">Introduction</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-primary/20 text-[11px] font-mono text-primary bg-primary/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                Available for hire
                            </div>
                        </div>
                    </header>
                    {/* HEADER END */}
                    <Card3 />
                    <div className="px-4 lg:px-12 py-12 space-y-24">
                        {/* INTRODUCTION SECTION START */}
                        <section className="scroll-mt-24" id="introduction">
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                                Introduction
                            </h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="max-md:text-md text-lg leading-relaxed  mb-4 font-medium tracking-tight text-primary">
                                    Ritish Sharma | Software Engineer
                                </p>
                                <p className="lg:text-md leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                                    I am a passionate software engineer with a
                                    strong foundation in computer science and a
                                    keen interest in building innovative and
                                    user-centric applications. My goal is to
                                    leverage my technical skills to solve
                                    real-world problems and contribute to
                                    meaningful projects.
                                </p>
                                <p className="lg:text-md leading-relaxed text-slate-600 dark:text-slate-400">
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
                                    className="mt-auto pt-6  border-slate-200 dark:border-primary/10"
                                >
                                    <button className="w-full flex items-center justify-center gap-2 bg-primary text-background-dark px-4 py-2.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
                                        <span className="material-symbols-outlined text-[18px]">
                                            download
                                        </span>
                                        Resume
                                    </button>
                                </a>
                            </div>
                        </section>
                        {/* INTRODUCTION SECTION END */}
                        {/* PROJECTS SECTION START */}
                        <section className="scroll-mt-24" id="projects">
                            <div className="flex items-center gap-3 mb-8">
                                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    Projects
                                </h2>
                                <div className="h-px flex-1 bg-slate-200 dark:bg-primary/10"></div>
                            </div>
                            <div className="grid gap-6">
                                <div className="p-6 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded bg-slate-100 dark:bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">
                                                chat
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                title="View Demo"
                                                className="text-slate-400 hover:text-primary"
                                                href="https://chat-sigma-one-26.vercel.app/login"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">
                                                    link
                                                </span>
                                            </a>
                                            <a
                                                title="Code"
                                                className="text-slate-400 hover:text-primary"
                                                href="https://github.com/Ritish-Sharma-Dev/Chat-App"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">
                                                    code
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                        MERN Stack Chat App
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                        A Full-Stack real-time chat application
                                        using the MERN stack (MongoDB, Express,
                                        React, Node.js) and Socket.io.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 pt-2 px-2 dark:border-primary/10">
                                <NavLink
                                    to="/projects"
                                    className="inline-flex items-center justify-start gap-1 text-slate-500 hover:text-primary group"
                                >
                                    <span className="font-medium">
                                        View More
                                    </span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </NavLink>
                            </div>
                        </section>
                        {/* PROJECTS SECTION END */}
                    </div>
                </div>
                {/* RIGHT SIDE CODE START*/}
                <div className="flex-1 bg-[#0d1117] min-h-96 rounded-xl overflow-hidden font-sans">
                    <Card4 />
                    <Card2 />
                </div>
                {/* RIGHT SIDE CODE END */}
            </main>
            {/* HOME PAGE END */}
            
            <Footer />
        </>
    );
};

export default HomePage;
