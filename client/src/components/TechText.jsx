import React from "react";

const TechText = ({ text, className = "" }) => {
    return (
        <span className={`tech-text ${className}`.trim()} aria-label={text}>
            {Array.from(text).map((character, index) => (
                <span
                    className="tech-text-letter"
                    key={`${character}-${index}`}
                    style={{ "--tech-text-delay": `${index * 0.08}s` }}
                    aria-hidden="true"
                >
                    {character === " " ? "\u00a0" : character}
                </span>
            ))}
        </span>
    );
};

export default TechText;
