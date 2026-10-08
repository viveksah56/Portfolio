'use client';

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';

export function ScrollProgress() {
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const spring = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.0005 });
    const scaleX = reduce ? scrollYProgress : spring;
    const opacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.5 bg-foreground/10 sm:h-0.75 lg:h-1"
        >
            <motion.div
                className="h-full w-full origin-left will-change-transform"
                style={{
                    scaleX,
                    opacity,
                    backgroundColor: 'var(--brand)',
                    boxShadow: '0 0 10px color-mix(in oklab, var(--brand) 60%, transparent)',
                }}
            />
        </div>
    );
}

export default ScrollProgress;