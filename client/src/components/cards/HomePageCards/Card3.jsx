import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card3 = () => {
    return (
        <div className="md:hidden p-2 sm:p-4 md:p-8 flex items-center justify-center min-h-fit">
            {/* Main Card Container */}
            <div className="w-full max-w-2xl bg-[#010409] border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono flex flex-col">
                {/* Header: File Info & Mac Controls */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-white/5 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <span className="ml-2 text-[10px] md:text-xs text-slate-400">
                            main.cpp
                        </span>
                    </div>
                    <span className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest shrink-0">
                        C++
                    </span>
                </div>

                {/* Editor Body */}
                <div className="flex p-2 md:p-6 text-[min(2.8vw,13px)] md:text-[14px] leading-5 md:leading-6 overflow-hidden">
                    {/* Line Numbers - Preserved exactly 1-15 */}
                    <div className="max-md:hidden flex flex-col text-right text-slate-600 pr-4 sm:pr-6 select-none shrink-0 border-r border-white/5 whitespace-pre">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                        <span>14</span>
                        <span>15</span>
                    </div>

                    {/* Code Area - All content restored and made responsive */}
                    <div className="grow pl-4 sm:pl-6 text-slate-300 overflow-hidden whitespace-pre-wrap break-words">
                        <div>
                            <span className="text-purple-400">#include</span>{" "}
                            <span className="text-emerald-400">
                                &lt;bits/stdc++.h&gt;
                            </span>
                        </div>
                        <div>
                            <span className="text-purple-400">
                                using namespace
                            </span>{" "}
                            <span className="text-emerald-400">
                                &lt;std&gt;
                            </span>
                        </div>
                        <div>
                            <span className="text-blue-400">int</span>{" "}
                            <span className="text-yellow-200">main</span>(){" "}
                            {"{"}
                        </div>

                        <div>
                            {" "}
                            <span className="text-slate-500">
                                // Welcome to my portfolio
                            </span>
                        </div>

                        <div>
                            {" "}
                            <span className="text-blue-400">string</span>{" "}
                            developer_name ={" "}
                            <span className="text-emerald-400">
                                "Ritish Sharma"
                            </span>
                            ;
                        </div>
                        <div>
                            {" "}
                            <span className="text-blue-400">string</span> role ={" "}
                            <span className="text-emerald-400">
                                "Software Engineer"
                            </span>
                            ;
                        </div>
                        <div>
                            {" "}
                            <span className="text-blue-400">string</span>{" "}
                            portfolio ={" "}
                            <span className="text-emerald-400">
                                "Ritish_Sharma.dev"
                            </span>
                            ;
                        </div>

                        <div className="h-[1.25em]"></div>

                        <div>
                            {" "}
                            <span className="text-blue-300">
                                cout
                            </span> &lt;&lt;{" "}
                            <span className="text-emerald-400">
                                "Initialization complete..."
                            </span>{" "}
                            &lt;&lt; <span className="text-blue-300">endl</span>
                            ;
                        </div>
                        <div>
                            {" "}
                            <span className="text-blue-300">
                                cout
                            </span> &lt;&lt;{" "}
                            <span className="text-emerald-400">
                                "Hello, I am "
                            </span>{" "}
                            &lt;&lt; developer_name &lt;&lt;{" "}
                            <span className="text-blue-300">endl</span>;
                        </div>
                        <div>
                            {" "}
                            <span className="text-blue-300">
                                cout
                            </span> &lt;&lt;{" "}
                            <span className="text-emerald-400">"Role "</span>{" "}
                            &lt;&lt; role &lt;&lt;{" "}
                            <span className="text-blue-300">endl</span>;
                        </div>
                        <div>
                            {" "}
                            <span className="text-blue-300">
                                cout
                            </span> &lt;&lt;{" "}
                            <span className="text-emerald-400">
                                "Portfolio "
                            </span>{" "}
                            &lt;&lt; portfolio &lt;&lt;{" "}
                            <span className="text-blue-300">endl</span>;
                        </div>

                        <div className="h-[1.25em]"></div>

                        <div>
                            {" "}
                            <span className="text-purple-400">return</span>{" "}
                            <span className="text-orange-400">0</span>;
                        </div>
                        <div>{"}"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card3;
