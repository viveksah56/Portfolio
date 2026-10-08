'use client';

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';

const spring = { stiffness: 120, damping: 28, restDelta: 0.0005 };

export default function HeroBackdrop() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const orbScale = useSpring(useTransform(scrollY, [0, 500, 1000], [1, 1.3, 0.85]), spring);
    const orbY = useSpring(useTransform(scrollY, [0, 1000], [0, -80]), spring);
    const glowScale = useSpring(useTransform(scrollY, [0, 500, 1000], [1, 1.6, 0.7]), spring);
    const glowY = useSpring(useTransform(scrollY, [0, 1000], [0, 60]), spring);

    return (
        <>
            <motion.div aria-hidden className="hero-orb" style={reduce ? undefined : { scale: orbScale, y: orbY }} />
            <motion.div aria-hidden className="hero-glow" style={reduce ? undefined : { scale: glowScale, y: glowY }} />
        </>
    );
}