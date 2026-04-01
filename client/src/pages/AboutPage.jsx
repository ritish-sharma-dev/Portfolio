import React from "react";

const AboutPage = () => {
    return (
        <>
            {/* ABOUT PAGE START  */}
            <main className="flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-background-dark">
                <div className="max-w-3xl px-4 md:px-12 py-12">
                    {/* HEADER START*/}
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400  mb-4">
                        <span>Docs</span>
                        <span className="material-symbols-outlined text-sm">
                            chevron_right
                        </span>
                        <span className="text-primary">About</span>
                    </nav>
                    {/* HEADER END */}
                    {/* ABOUT SECTION START */}
                    <section id="about-me">
                        {/* HEADING START - ABOUT ME */}
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            About Me
                        </h1>
                        {/* HEADING END - ABOUT ME */}
                        {/* HEADING DESCRIPTION START */}
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                            I am a passionate Software Engineer with a strong
                            foundation in computer science and a keen interest
                            in building innovative and user-centric
                            applications. My goal is to leverage my technical
                            skills to solve real-world problems and contribute
                            to meaningful projects.
                        </p>
                        {/* HEADING DESCRIPTION END */}
                        <hr className="border-slate-200 dark:border-primary/10 mb-10" />
                        {/* HEADING START - PERSONAL STORY */}
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">
                                history
                            </span>
                            Personal Story
                        </h2>
                        {/* HEADING END -  PERSONAL STORY */}
                        {/* HEADING DESCRIPTION START */}
                        <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 space-y-4">
                            <p>
                                My journey into software development began with
                                a curious fascination for how things work under
                                the hood. It all began with learning the
                                language of the web through blog templates,
                                After somedays I found myself less interested in
                                the colors on the page and more obsessed with
                                the logic in the machine. That curiosity
                                transformed a hobby into a career dedicated to
                                under-the-hood optimization.
                            </p>
                            <p>
                                Today, my focus has shifted from the individual
                                lines of code to the grander map of system
                                architecture. I believe that true software
                                craftsmanship lies at the intersection of robust
                                design and flawless execution, ensuring that
                                every component serves a larger, more powerful
                                purpose."
                            </p>
                        </div>
                        {/* HEADING DESCRIPTION END */}
                        {/* HEADING START - CORE VALUES */}
                        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">
                                verified
                            </span>
                            Core Values
                        </h2>
                        {/* HEADING END - CORE VALUES */}
                        {/* CORE VALUES START */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 rounded-xl border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-primary/5">
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    Simplicity First
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    I believe that the best solutions are often
                                    the simplest. I strive for code that is
                                    readable, maintainable, and elegant.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-primary/5">
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    User-Centricity
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Technology serves people. I always keep the
                                    end-user's experience at the forefront of
                                    every technical decision.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-primary/5">
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    Continuous Learning
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    The landscape of tech is ever-changing. I
                                    dedicate time every day to mastering new
                                    tools and methodologies.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-primary/5">
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    Radical Transparency
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Open communication is the bedrock of
                                    successful teams. I value honest feedback
                                    and clear documentation.
                                </p>
                            </div>
                        </div>
                        {/* CORE VALUES END */}
                        {/* HEADING START - PROFESSIONAL PHILOSOPHY */}
                        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">
                                psychology
                            </span>
                            Professional Philosophy
                        </h2>
                        {/* HEADING END - PROFESSIONAL PHILOSOPHY */}
                        {/* HEADING DESCRIPTION START */}
                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                            <p className="italic text-slate-700 dark:text-slate-300">
                                "I don't just write code; I design systems that
                                empower growth. My philosophy is rooted in the
                                belief that software should be an invisible
                                enabler, allowing users to achieve their goals
                                without friction. Every line of code is an
                                opportunity to make someone's life slightly
                                easier."
                            </p>
                        </div>
                        {/* HEADING DESCRIPTION END */}
                    </section>
                    {/* ABOUT SECTION END */}
                </div>
            </main>
            {/* ABOUT PAGE END */}
        </>
    );
};

export default AboutPage;
