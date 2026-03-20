import React from "react";
import { NavLink } from "react-router";

const Card2 = () => {
    return (
        <div className="p-4 md:p-8 space-y-4 md:space-y-8 flex-1 bg-[#0d1117] min-h-[400px] rounded-xl overflow-hidden font-sans">
            {/* Header: Endpoint Info */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Using a standard SVG for the API icon to ensure compatibility */}
                    <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span className="text-[11px] md:text-xs font-mono text-slate-400 tracking-tight">
                        POST /api/v1/contact
                    </span>
                </div>
                <span className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    JSON Response
                </span>
            </div>

            {/* Main Code Block - whitespace-pre-wrap prevents scrolling */}
            <div className="p-4 md:p-6 rounded-lg bg-[#010409] border border-white/5 shadow-2xl overflow-hidden">
                <pre className="text-[min(2.7vw,13px)] md:text-[13px] leading-5 md:leading-6 font-mono text-slate-300 whitespace-pre-wrap break-words">
                    <code>
                        {"{"}
                        {"\n"}
                        {"  "}
                        <span className="text-blue-300">"status"</span>:{" "}
                        <span className="text-emerald-400">"success"</span>,
                        {"\n"}
                        {"  "}
                        <span className="text-blue-300">"data"</span>: {"{"}
                        {"\n"}
                        {"    "}
                        <span className="text-blue-300">"email"</span>:{" "}
                        <span className="text-emerald-400">
                            "ritishsharma04022006@gmail.com"
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-blue-300">"github"</span>:{" "}
                        <span className="text-emerald-400">
                            "github.com/Ritish-Sharma-Dev"
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-blue-300">"linkedin"</span>:{" "}
                        <span className="text-emerald-400">
                            "linkedin.com/in/ritish-sharma-dev"
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-blue-300">"twitter"</span>:{" "}
                        <span className="text-emerald-400">
                            "x.com/Ritish__Sharma"
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-blue-300">"instagram"</span>:{" "}
                        <span className="text-emerald-400">
                            "instagram.com/ritish.sharma._"
                        </span>
                        ,{"\n"}
                        {"    "}
                        <span className="text-blue-300">
                            "responseTime"
                        </span>:{" "}
                        <span className="text-blue-400">"&lt; 24h"</span>
                        {"\n"}
                        {"  "}
                        {"}"}
                        {"\n"}
                        {"}"}
                    </code>
                </pre>
            </div>

            <div className="mt-1 pt-1 px-1 dark:border-primary/10">
                <NavLink to="/contact" className="flex flex-col gap-1 ">
                    <div className="flex items-center justify-start gap-1">
                        <span className="font-medium text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                            Get in Touch
                        </span>
                        <span className="material-symbols-outlined text-sm text-slate-500">
                            arrow_forward
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Card2;
