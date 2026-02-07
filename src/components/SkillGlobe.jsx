import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Billboard, PerspectiveCamera, Points, PointMaterial, Html } from "@react-three/drei";
import * as THREE from "three";
import {
    SiSpringboot,
    SiMysql,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiDatabricks,
    SiCplusplus,
    SiProcessingfoundation,
    SiSimpleanalytics
} from "react-icons/si";
import {
    FaJava,
    FaReact,
    FaGithub
} from "react-icons/fa";
import { skills } from "../constants/data";

const iconMap = {
    FaJava, SiSpringboot, SiMysql, SiJavascript, SiHtml5, SiCss3,
    SiDatabricks, SiCplusplus, FaReact, FaGithub,
    SiProcessingfoundation, SiSimpleanalytics
};

const SkillIcon = ({ 技能, index, total }) => {
    const [hovered, setHovered] = useState(false);
    const pos = useMemo(() => {
        const phi = Math.acos(-1 + (2 * index) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;
        const radius = 3.8;
        return new THREE.Vector3(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
        );
    }, [index, total]);

    const Icon = iconMap[技能.icon] || SiJavascript;

    return (
        <Billboard position={pos}>
            <Html distanceFactor={10} center>
                <div
                    className="skill-icon group"
                    style={{ color: 技能.color }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {/* The Icon itself */}
                    <div className="relative">
                        <Icon size={28} className="w-12 h-12 md:w-16 md:h-16" />

                        {/* 3D-like Light Halo on hover */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 blur-2xl rounded-full transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    {/* Pill-Shaped Label (Exact as reference) */}
                    <div className={`mt-4 px-4 py-1.5 rounded-full text-white text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-xl ${hovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'}`}
                        style={{ backgroundColor: 技能.color }}>
                        {技能.name}
                    </div>
                </div>
            </Html>
        </Billboard>
    );
};

const ParticleSphere = () => {
    const pointsRef = useRef();
    const count = 3000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const radius = 4.1;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + Math.random() * 2);
            const theta = Math.random() * 2 * Math.PI;
            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * 0.04;
        pointsRef.current.rotation.y = t;
        pointsRef.current.rotation.x = t * 0.2;
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#4A6CFF"
                size={0.01}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.4}
            />
        </Points>
    );
};

const Cloud = ({ children }) => {
    const group = useRef();
    useFrame((state) => {
        group.current.rotation.y += 0.0025;
    });
    return <group ref={group}>{children}</group>;
};

const SkillGlobe = () => {
    return (
        <div className="skill-globe-container h-[700px] w-full relative group">
            <Canvas dpr={[1, 2]} className="skills-sphere">
                <PerspectiveCamera makeDefault position={[0, 0, 9.5]} fov={45} />
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />

                <Cloud>
                    {skills.map((skill, i) => (
                        <SkillIcon key={i} 技能={skill} index={i} total={skills.length} />
                    ))}
                    <ParticleSphere />
                </Cloud>

                {/* Visual helper for sphere shape */}
                <mesh scale={0.9}>
                    <sphereGeometry args={[4, 64, 64]} />
                    <meshBasicMaterial color="#4A6CFF" wireframe transparent opacity={0.03} />
                </mesh>
            </Canvas>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.4em] pointer-events-none bg-white/5 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10">
                Interactive Skill Collective
            </div>
        </div>
    );
};

export default SkillGlobe;
