'use client';

import { useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
    value: number;
    suffix?: string;
    pad?: number;
    delay?: number;
    duration?: number;
    className?: string;
};

export default function CountUp({
    value,
    suffix = '',
    pad = 0,
    delay = 0,
    duration = 1.4,
    className,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { amount: 0.3, once: true });
    const reduce = useReducedMotion();
    // Default to target value for SSR / text extraction
    const [display, setDisplay] = useState(value);

    const formattedTarget = pad ? String(value).padStart(pad, '0') : String(value);

    useEffect(() => {
        if (reduce || !inView) {
            return;
        }

        let start: number | null = null;
        let animationFrame: number;
        const delayTimeout = setTimeout(() => {
            // Reset to 0 asynchronously inside the frame before animating up
            setDisplay(0);

            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const elapsed = (timestamp - start) / 1000;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic: 1 - Math.pow(1 - progress, 3)
                const eased = 1 - Math.pow(1 - progress, 3);
                setDisplay(Math.round(eased * value));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(step);
                } else {
                    setDisplay(value);
                }
            };
            animationFrame = requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(delayTimeout);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [inView, value, delay, duration, reduce]);

    const formattedDisplay = pad ? String(display).padStart(pad, '0') : String(display);

    // aria-label carries the final value for screen readers; the animated
    // digits are aria-hidden so the label is announced exactly once.
    // No sr-only duplicate text, so text extraction no longer reads "13+1012…".
    return (
        <span
            ref={ref}
            className={`tabular-nums ${className ?? ''}`}
            aria-label={`${formattedTarget}${suffix}`}
        >
            <span aria-hidden="true">
                {formattedDisplay}
                {suffix}
            </span>
        </span>
    );
}