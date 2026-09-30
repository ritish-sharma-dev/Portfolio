import React from "react";

const LogoLoop = ({ logos, ariaLabel = "Technology stack" }) => {
    return (
        <div
            className="logo-loop relative mb-10 w-full overflow-hidden rounded-2xl border border-primary/20 bg-[#06110e]/90 py-4 shadow-[0_24px_70px_-32px_rgba(16,183,127,0.55)] ring-1 ring-inset ring-white/[0.05] backdrop-blur-sm sm:py-5"
            aria-label={ariaLabel}
            role="region"
        >
            <div className="logo-loop-sheen pointer-events-none absolute -inset-y-1/2 left-[-30%] z-0 w-1/3 rotate-12 bg-linear-to-r from-transparent via-primary/15 to-transparent blur-xl" />
            <div className="pointer-events-none absolute inset-1 z-0 rounded-[0.85rem] border border-white/[0.05]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#0a0f0d] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#0a0f0d] to-transparent sm:w-16" />
            <div className="logo-loop-track relative z-[1] flex w-max" style={{ "--logo-loop-duration": "28s" }}>
                {[false, true].map((isDuplicate) => (
                    <div
                        className="flex shrink-0 items-center gap-3 pr-3 sm:gap-5 sm:pr-5"
                        aria-hidden={isDuplicate}
                        key={isDuplicate ? "duplicate" : "primary"}
                    >
                        {logos.map((logo, index) => (
                            <span
                                className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.85rem] border border-white/10 bg-linear-to-br from-white/[0.09] to-white/[0.02] p-2 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08),0_8px_20px_rgb(0_0_0_/_0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_10px_24px_rgb(16_183_127_/_0.18)] sm:h-12 sm:w-12 sm:p-2.5"
                                key={`${logo.name}-${index}`}
                            >
                                <span className="flex h-full w-full items-center justify-center rounded-lg bg-[#07110e]/75 p-1 ring-1 ring-inset ring-white/[0.06] transition-colors group-hover:bg-primary/15">
                                    <img
                                        src={logo.icon}
                                        alt={isDuplicate ? "" : logo.name}
                                        className="h-full w-full object-contain drop-shadow-[0_0_8px_rgb(255_255_255_/_0.12)] transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;
