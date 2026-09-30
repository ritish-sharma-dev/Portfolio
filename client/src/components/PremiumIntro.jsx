import React from "react";

const PremiumIntro = () => {
    return (
        <div
            className="relative mb-5 flex w-fit max-w-full flex-nowrap items-center gap-x-2 pb-2.5 font-mono text-[clamp(0.88rem,4.5vw,1.125rem)] font-medium tracking-[0.01em] whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:origin-left after:bg-[linear-gradient(90deg,#10b77f,rgb(16_183_127_/_0.18),transparent)] after:content-[''] after:animate-[premium-intro-rule_3.6s_ease-out_infinite]"
            aria-label="Ritish Sharma, Software Engineer"
        >
            <span className="bg-[linear-gradient(110deg,#10b77f_20%,#d1fae5_44%,#10b77f_68%)] bg-[length:220%_100%] bg-clip-text text-transparent [-webkit-background-clip:text] animate-[premium-intro-shine_4.5s_ease-in-out_infinite]">
                Ritish Sharma
            </span>
            <span
                className="font-normal text-primary/45"
                aria-hidden="true"
            >
                /
            </span>
            <span className="text-[0.85em] tracking-[0.04em] text-slate-300">
                Software Engineer
            </span>
        </div>
    );
};

export default PremiumIntro;
