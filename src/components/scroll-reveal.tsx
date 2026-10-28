'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    x?: number;
    scale?: number;
    duration?: number;
    amount?: number;
    once?: boolean;
};

export function ScrollReveal({
                                 children,
                                 className,
                                 delay = 0,
                                 y = 32,
                                 x = 0,
                                 scale = 1,
                                 duration = 0.8,
                                 amount = 0.15,
                                 once = true,
                             }: ScrollRevealProps) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x, scale: reduce ? 1 : scale }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
            transition={{
                duration: reduce ? 0 : duration,
                delay: reduce ? 0 : delay / 1000,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

export default ScrollReveal;