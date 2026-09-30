import React, { useEffect, useRef } from "react";

const DeveloperCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const desktopPointer = window.matchMedia(
            "(min-width: 1024px) and (pointer: fine)"
        );

        if (!cursor || !desktopPointer.matches) {
            return undefined;
        }

        const handlePointerMove = (event) => {
            cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
            cursor.classList.add("is-visible");
        };

        const handlePointerOver = (event) => {
            cursor.classList.toggle(
                "is-active",
                Boolean(
                    event.target.closest(
                        "a, button, input, textarea, select, [role='button']"
                    )
                )
            );
        };

        const handlePointerLeave = () => {
            cursor.classList.remove("is-visible");
        };

        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerover", handlePointerOver);
        document.addEventListener("pointerleave", handlePointerLeave);
        document.documentElement.classList.add("target-cursor-active");

        return () => {
            document.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("pointerover", handlePointerOver);
            document.removeEventListener("pointerleave", handlePointerLeave);
            document.documentElement.classList.remove("target-cursor-active");
        };
    }, []);

    return (
        <div ref={cursorRef} className="developer-cursor" aria-hidden="true">
            <div className="developer-cursor-rotator">
                <span className="developer-cursor-corner developer-cursor-corner-top-left" />
                <span className="developer-cursor-corner developer-cursor-corner-top-right" />
                <span className="developer-cursor-corner developer-cursor-corner-bottom-left" />
                <span className="developer-cursor-corner developer-cursor-corner-bottom-right" />
                <span className="developer-cursor-dot" />
            </div>
        </div>
    );
};

export default DeveloperCursor;
