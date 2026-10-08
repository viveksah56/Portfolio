'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';

type CountUpProps = {
    value: number;
    suffix?: string;
    pad?: number;
    delay?: number;
    duration?: number;
    className?: string;
};

const DIGITS = Array.from({ length: 20 }, (_, index) => index % 10);
const EASE = [0.22, 1, 0.36, 1] as const;

export default function CountUp({ value, suffix = '', pad = 0, delay = 0, duration = 1.6, className }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { amount: 0.6 });
    const reduce = useReducedMotion();
    const active = inView || Boolean(reduce);
    const text = String(value).padStart(pad, '0');

    return (
        <span ref={ref} className={className}>
            <span className="sr-only">{`${text}${suffix}`}</span>

            <span aria-hidden className="inline-flex items-start">
                {text.split('').map((char, index) => (
                    <span key={`${index}-${char}`} className="relative inline-block h-[1.1em] overflow-hidden">
                        <span className="invisible block h-[1.1em] leading-[1.1em]">{char}</span>
                        <motion.span
                            initial={false}
                            animate={{ y: active ? `${-(Number(char) + 10) * 5}%` : '0%' }}
                            transition={
                                active && !reduce
                                    ? { duration: duration + index * 0.18, delay: delay / 1000, ease: EASE }
                                    : { duration: 0 }
                            }
                            className="absolute left-0 top-0 flex flex-col"
                        >
                            {DIGITS.map((digit, digitIndex) => (
                                <span key={digitIndex} className="block h-[1.1em] leading-[1.1em]">
                                    {digit}
                                </span>
                            ))}
                        </motion.span>
                    </span>
                ))}

                {suffix ? (
                    <motion.span
                        initial={false}
                        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
                        transition={
                            active && !reduce
                                ? { duration: 0.7, delay: delay / 1000 + duration * 0.65, ease: EASE }
                                : { duration: 0 }
                        }
                        className="block h-[1.1em] leading-[1.1em]"
                    >
                        {suffix}
                    </motion.span>
                ) : null}
            </span>
        </span>
    );
}