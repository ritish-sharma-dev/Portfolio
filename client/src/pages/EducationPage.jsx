import React from "react";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const EducationPage = () => {
    const { education } = useContext(PortfolioContext);

    return (
        <>
            <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
                <div className="mx-auto flex">
                    {/* MAIN CONTENT START  */}
                    <main className="flex-1 min-w-0 overflow-y-auto px-4 py-12 lg:px-12">
                        <div className="max-w-3xl">
                            <div className="mb-10">
                                {/* HEADER START */}
                                <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400  mb-4">
                                    <span>Docs</span>
                                    <span className="material-symbols-outlined text-sm">
                                        chevron_right
                                    </span>
                                    <span className="text-primary">
                                        Education
                                    </span>
                                </nav>
                                {/* HEADER END */}
                                {/* PAGE HEADING START */}
                                <h1 className="text-4xl font-bold tracking-tight mb-4">
                                    Education
                                </h1>
                                {/* PAGE HEADING END */}
                                {/* PAGE DESCRIPTION START*/}
                                <p className="text-lg text-slate-600 dark:text-slate-400  leading-relaxed">
                                    A historical record of academic
                                    qualifications, institutional honors, and
                                    professional learning paths.
                                </p>
                                {/* PAGE DESCRIPTION END*/}
                            </div>
                            {/* EDUCATION TIMELINE START */}
                            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-primary before:via-primary/20 before:to-transparent">
                                {/* ITEM START */}
                                {education.map((education,index) => {
                                    return (
                                        <div
                                        key={index}
                                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background-light dark:bg-background-dark text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                <span className="material-symbols-outlined">
                                                    school
                                                </span>
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:border-primary/40 transition-colors">
                                                <div className="flex items-center justify-between mb-1">
                                                    <time className="text-xs font-bold text-primary ">
                                                        {education.duration}
                                                    </time>
                                                </div>
                                                <h3 className="text-lg font-bold">
                                                    {education.degree}
                                                </h3>
                                                <p className="text-sm text-slate-500 dark:text-primary/70 mb-2">
                                                    {education.institution}
                                                </p>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {education.description}
                                                </p>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    <span className="px-2 py-0.5 text-[10px] rounded bg-primary/10 text-primary border border-primary/20">
                                                        {education.grade}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                {/* ITEM END */}
                            </div>
                            {/* EDUCATION TIMELINE END */}
                        </div>
                    </main>
                    {/* MAIN CONTENT END */}
                </div>
            </div>

        </>
    );
};

export default EducationPage;
