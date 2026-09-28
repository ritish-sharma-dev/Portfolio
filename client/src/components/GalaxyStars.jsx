import { useEffect, useRef } from "react";

const MAX_DEVICE_PIXEL_RATIO = 1.5;
const MAX_STARS = 90;

function GalaxyStars() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d", { alpha: true });
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        if (!context) {
            return undefined;
        }

        let animationFrame;
        let width = 0;
        let height = 0;
        let lastFrame = 0;
        const pointer = { x: 0, y: 0, active: false };
        let stars = [];

        const createStars = () => {
            const starCount = Math.min(MAX_STARS, Math.max(45, Math.floor(width / 18)));

            stars = Array.from({ length: starCount }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.4 + 0.35,
                alpha: Math.random() * 0.55 + 0.2,
                speed: Math.random() * 0.06 + 0.018,
                drift: (Math.random() - 0.5) * 0.04,
                twinkle: Math.random() * Math.PI * 2,
            }));
        };

        const resize = () => {
            const pixelRatio = Math.min(
                window.devicePixelRatio || 1,
                MAX_DEVICE_PIXEL_RATIO
            );
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * pixelRatio);
            canvas.height = Math.floor(height * pixelRatio);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            createStars();
            draw(0, true);
        };

        const draw = (timestamp, paused = false) => {
            const elapsed = Math.min(timestamp - lastFrame, 50);
            lastFrame = timestamp;
            context.clearRect(0, 0, width, height);

            for (const star of stars) {
                if (!paused && !reducedMotion.matches) {
                    star.y += star.speed * elapsed;
                    star.x += star.drift * elapsed;

                    if (star.y > height + 4) star.y = -4;
                    if (star.x > width + 4) star.x = -4;
                    if (star.x < -4) star.x = width + 4;
                }

                let x = star.x;
                let y = star.y;

                if (pointer.active) {
                    const offsetX = pointer.x - x;
                    const offsetY = pointer.y - y;
                    const distance = Math.hypot(offsetX, offsetY);
                    const influence = Math.max(0, 1 - distance / 180);
                    x += (offsetX / Math.max(distance, 1)) * influence * 8;
                    y += (offsetY / Math.max(distance, 1)) * influence * 8;
                }

                const twinkle = reducedMotion.matches
                    ? 1
                    : 0.85 + Math.sin(timestamp * 0.0015 + star.twinkle) * 0.15;

                if (star.radius > 1.1) {
                    context.beginPath();
                    context.fillStyle = `rgba(83, 224, 177, ${star.alpha * 0.12 * twinkle})`;
                    context.arc(x, y, star.radius * 4, 0, Math.PI * 2);
                    context.fill();
                }

                context.beginPath();
                context.fillStyle = `rgba(210, 255, 239, ${star.alpha * twinkle})`;
                context.arc(x, y, star.radius, 0, Math.PI * 2);
                context.fill();
            }
        };

        const animate = (timestamp) => {
            draw(timestamp);
            animationFrame = window.requestAnimationFrame(animate);
        };

        const handlePointerMove = (event) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            pointer.active = true;
        };

        const handlePointerLeave = () => {
            pointer.active = false;
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                window.cancelAnimationFrame(animationFrame);
                return;
            }

            lastFrame = performance.now();
            if (!reducedMotion.matches) {
                animationFrame = window.requestAnimationFrame(animate);
            }
        };

        resize();
        window.addEventListener("resize", resize, { passive: true });
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
        document.addEventListener("visibilitychange", handleVisibilityChange);
        if (!reducedMotion.matches) {
            animationFrame = window.requestAnimationFrame(animate);
        }

        return () => {
            window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", handlePointerLeave);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return <canvas ref={canvasRef} className="galaxy-stars" aria-hidden="true" />;
}

export default GalaxyStars;