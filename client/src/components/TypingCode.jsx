import {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useRef,
    useState,
} from "react";

function TypingCode({ children, as: Element = "span" }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    let characterIndex = 0;

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
        );

        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    const typeNode = (node) => {
        if (typeof node === "string") {
            return Array.from(node).map((character) => {
                const key = characterIndex;
                characterIndex += 1;

                return (
                    <span
                        className="code-character"
                        key={key}
                        style={{ "--character-delay": `${key * 10}ms` }}
                    >
                        {character}
                    </span>
                );
            });
        }

        if (!isValidElement(node)) {
            return node;
        }

        return cloneElement(node, {
            children: Children.map(node.props.children, typeNode),
        });
    };

    return (
        <Element
            className={`code-typing${isVisible ? " is-visible" : ""}`}
            ref={containerRef}
        >
            {Children.map(children, typeNode)}
        </Element>
    );
}

export default TypingCode;
