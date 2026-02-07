import { useEffect, useRef } from "react";

const HaloCursor = () => {
    const haloRef = useRef(null);
    const lastPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (haloRef.current) {
                haloRef.current.style.left = e.clientX + "px";
                haloRef.current.style.top = e.clientY + "px";
            }

            // Create particles only when mouse moves a certain distance
            const dist = Math.sqrt(
                Math.pow(e.clientX - lastPos.current.x, 2) +
                Math.pow(e.clientY - lastPos.current.y, 2)
            );

            if (dist > 8) {
                for (let i = 0; i < 2; i++) {
                    const p = document.createElement("div");
                    p.className = "particle";
                    p.style.left = e.clientX + "px";
                    p.style.top = e.clientY + "px";

                    // Trajectory logic to match CSS var usage
                    const tx = (Math.random() * 120 - 60) + "px";
                    const ty = (Math.random() * 120 - 60) + "px";
                    p.style.setProperty('--tx', tx);
                    p.style.setProperty('--ty', ty);

                    document.body.appendChild(p);

                    setTimeout(() => {
                        if (p.parentNode) p.remove();
                    }, 1200);
                }
                lastPos.current = { x: e.clientX, y: e.clientY };
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return <div ref={haloRef} className="cursor-halo" />;
};

export default HaloCursor;
