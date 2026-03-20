import React from "react";

const Card1 = () => {
    return (
        <>
            <div className="p-4 md:p-8 space-y-6 md:space-y-8">
                {/* Header: File Info */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-500/80"></span>
                            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <span className="ml-2 text-[10px] md:text-xs font-mono text-slate-400">
                            ProfileCard.tsx
                        </span>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        TypeScript
                    </span>
                </div>

                {/* Main Code Block - Added scale-90 for mobile and removed overflow-x-auto */}
                <div className="p-4 md:p-6 rounded-lg bg-[#010409] border border-white/5 overflow-hidden shadow-2xl transition-all duration-300 origin-top">
                    <pre className="text-[11px] md:text-[13px] leading-5 md:leading-6 font-mono text-slate-300 whitespace-pre-wrap break-words">
                        <code>
                            <span className="text-purple-400">import</span>{" "}
                            {"{ "}
                            <span className="text-blue-300">FC</span>,{" "}
                            <span className="text-blue-300">useState</span>{" "}
                            {"}"}
                            <span className="text-purple-400"> from </span>
                            <span className="text-emerald-400">'react'</span>;
                            {"\n\n"}
                            <span className="text-purple-400">
                                export const
                            </span>{" "}
                            <span className="text-yellow-200">
                                EngineerProfile
                            </span>
                            : <span className="text-blue-300">FC</span> = (){" "}
                            <span className="text-purple-400">=&gt;</span> {"{"}
                            {"\n"}
                            {"  "}
                            <span className="text-purple-400">const</span>{" "}
                            [status, setStatus] ={" "}
                            <span className="text-blue-300">useState</span>(
                            <span className="text-emerald-400">'coding'</span>);
                            {"\n\n"}
                            {"  "}
                            <span className="text-purple-400">const</span>{" "}
                            <span className="text-yellow-200">
                                handleDeploy
                            </span>{" "}
                            = <span className="text-purple-400">async</span> (){" "}
                            <span className="text-purple-400">=&gt;</span> {"{"}
                            {"\n"}
                            {"    "}
                            <span className="text-purple-400">await</span> api.
                            <span className="text-yellow-200">pushToProd</span>(
                            {"{"}
                            {"\n"}
                            {"      "}env:{" "}
                            <span className="text-emerald-400">
                                'production'
                            </span>
                            ,{"\n"}
                            {"      "}force:{" "}
                            <span className="text-blue-400">true</span>
                            {"\n"}
                            {"    "}
                            {"}"});{"\n"}
                            {"  "}
                            {"}"};{"\n\n"}
                            {"  "}
                            <span className="text-purple-400">return</span> (
                            {"\n"}
                            {"    "}
                            <span className="text-slate-500">&lt;</span>
                            <span className="text-purple-400">div</span>{" "}
                            <span className="text-blue-300">className</span>=
                            <span className="text-emerald-400">
                                "portfolio"
                            </span>
                            <span className="text-slate-500">&gt;</span>
                            {"\n"}
                            {"      "}
                            <span className="text-slate-500">&lt;</span>
                            <span className="text-blue-300">Button</span>{" "}
                            <span className="text-blue-300">onClick</span>={"{"}
                            <span className="text-slate-300">handleDeploy</span>
                            {"}"}
                            <span className="text-slate-500">&gt;</span>
                            {"\n"}
                            {"        "}Deploy World{"\n"}
                            {"      "}
                            <span className="text-slate-500">&lt;/</span>
                            <span className="text-blue-300">Button</span>
                            <span className="text-slate-500">&gt;</span>
                            {"\n"}
                            {"    "}
                            <span className="text-slate-500">&lt;/</span>
                            <span className="text-purple-400">div</span>
                            <span className="text-slate-500">&gt;</span>
                            {"\n"}
                            {"  "});{"\n"}
                            {"}"};
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
};

export default Card1;
