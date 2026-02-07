import { useEffect } from "react";

const RoyalWind = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            for (let i = 0; i < 4; i++) {
                const p = document.createElement("div");
                p.className = "royal-particle";

                // Set random trajectory for the "wind" effect
                const tx = (Math.random() * 200 - 100) + "px";
                const ty = (Math.random() * 200 - 100) + "px";

                p.style.setProperty('--tx', tx);
                p.style.setProperty('--ty', ty);

                // Styling based on user's preference
                p.style.width = "6px";
                p.style.height = "6px";
                p.style.background = "#8A2BE2"; // Updated to the new royal color
                p.style.boxShadow = "0 0 12px #8A2BE2";

                p.style.left = e.clientX + "px";
                p.style.top = e.clientY + "px";

                document.body.appendChild(p);

                setTimeout(() => {
                    if (p.parentNode) {
                        p.remove();
                    }
                }, 1000);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return null; // This component handles its own DOM elements for performance
};

export default RoyalWind;
