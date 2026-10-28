'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

export type SplashStage = {
    to: number;
    durationMs: number;
    ease: (t: number) => number;
};

export type SplashLine = {
    at: number;
    kind: 'cmd' | 'info' | 'ok' | 'out' | 'final';
    text: string;
    lang?: string;
};

export type SplashScreenProps = {
    onDone: () => void;
    lines?: readonly SplashLine[];
    stages?: readonly SplashStage[];
    status?: string;
    loadingLabel?: string;
    skipLabel?: string;
    className?: string;
};

const HANDLE = siteConfig.name.toLowerCase().replace(/\s+/g, '.');
const SECONDS_PER_PERCENT = 0.027;

export const DEFAULT_STAGES: readonly SplashStage[] = [
    { to: 30, durationMs: 600, ease: (t) => 1 - (1 - t) ** 3 },
    { to: 38, durationMs: 300, ease: (t) => t * t },
    { to: 76, durationMs: 700, ease: (t) => 1 - (1 - t) ** 4 },
    { to: 86, durationMs: 300, ease: (t) => t },
    { to: 100, durationMs: 450, ease: (t) => 1 - (1 - t) ** 2 },
];

export const DEFAULT_LINES: readonly SplashLine[] = [
    { at: 0, kind: 'cmd', text: `ssh ${HANDLE}@kathmandu.np` },
    { at: 6, kind: 'info', text: 'establishing secure channel · tls 1.3' },
    { at: 12, kind: 'ok', text: 'handshake complete' },
    { at: 18, kind: 'cmd', text: 'whoami' },
    { at: 24, kind: 'out', text: `${siteConfig.name} — Full Stack Developer` },
    { at: 30, kind: 'cmd', text: './stack --verify' },
    { at: 36, kind: 'ok', text: 'frontend  react · next.js · typescript' },
    { at: 45, kind: 'ok', text: 'backend   spring boot · node.js · express' },
    { at: 54, kind: 'ok', text: 'data      postgresql · mysql · mongodb · redis' },
    { at: 63, kind: 'ok', text: 'auth      jwt · oauth · rbac' },
    { at: 72, kind: 'cmd', text: 'cat location.txt' },
    { at: 78, kind: 'out', text: 'नमस्ते · Kathmandu, Nepal · open to full-time roles', lang: 'ne' },
    { at: 90, kind: 'final', text: 'ACCESS GRANTED' },
];

export const DEFAULT_STATUS = 'Open to full-time roles';

type Phase = 'run' | 'fade' | 'lift';

function countVisible(lines: readonly SplashLine[], value: number) {
    let count = 0;
    while (count < lines.length && lines[count]!.at <= value) count += 1;
    return count;
}

function MatrixRain() {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const glyphs = '01ABCDEF<>/{}[]$#=+';
        const color = getComputedStyle(canvas).getPropertyValue('--brand').trim() || '#3291ff';
        let size = 16;
        let drops: number[] = [];
        let raf = 0;
        let last = 0;

        const resize = () => {
            size = window.innerWidth < 640 ? 14 : 18;
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            drops = Array.from({ length: Math.ceil(canvas.width / size) }, () => Math.random() * -30);
            ctx.font = `${size}px monospace`;
        };

        const draw = (now: number) => {
            raf = requestAnimationFrame(draw);
            if (now - last < 56) return;
            last = now;

            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0,0,0,0.14)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = color;

            for (let i = 0; i < drops.length; i += 1) {
                const y = drops[i]!;
                if (y >= 0) ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)]!, i * size, y * size);
                drops[i] = y * size > canvas.height && Math.random() > 0.975 ? Math.random() * -12 : y + 1;
            }
        };

        resize();
        raf = requestAnimationFrame(draw);
        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 size-full opacity-25" />;
}

function ScrambleText({ text, durationMs = 800 }: { text: string; durationMs?: number }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const charset = 'ABCDEF0123456789#$%&*<>/';
        const start = performance.now();
        let raf = 0;

        const step = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const reveal = Math.floor(t * text.length);
            let out = '';
            for (let i = 0; i < text.length; i += 1) {
                const char = text[i]!;
                out += i < reveal || char === ' ' ? char : charset[Math.floor(Math.random() * charset.length)];
            }
            element.textContent = out;
            if (t < 1) raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [text, durationMs]);

    return <span ref={ref}>{text}</span>;
}

function TerminalLine({ line }: { line: SplashLine }) {
    const time = (line.at * SECONDS_PER_PERCENT).toFixed(3);

    let tag = '';
    if (line.kind === 'cmd') tag = '$';
    else if (line.kind === 'ok') tag = '[ OK ]';
    else if (line.kind === 'info') tag = '[INFO]';
    else if (line.kind === 'final') tag = '>';

    const tagClass = line.kind === 'info' ? 'text-muted-foreground' : 'text-brand';

    let body;
    if (line.kind === 'cmd') {
        body = (
            <span className="term-type text-foreground" style={{ '--n': line.text.length } as CSSProperties}>
                {line.text}
            </span>
        );
    } else if (line.kind === 'final') {
        body = (
            <span className="font-semibold tracking-[0.2em] text-brand">
                <ScrambleText text={line.text} />
            </span>
        );
    } else {
        body = (
            <span
                lang={line.lang}
                className={cn(
                    'min-w-0 break-words',
                    line.kind === 'out' ? 'text-foreground/80' : 'text-muted-foreground',
                )}
            >
                {line.text}
            </span>
        );
    }

    return (
        <p className="term-line flex gap-2 sm:gap-3">
            <span className="hidden w-[9ch] shrink-0 text-muted-foreground/50 tabular-nums select-none sm:inline">
                [{time.padStart(7, ' ')}]
            </span>
            <span className={cn('w-[6ch] shrink-0 select-none', tagClass)}>{tag}</span>
            {body}
        </p>
    );
}

export function SplashScreen({
    onDone,
    lines = DEFAULT_LINES,
    stages = DEFAULT_STAGES,
    status = DEFAULT_STATUS,
    loadingLabel = 'Loading portfolio',
    skipLabel = 'Skip',
    className,
}: SplashScreenProps) {
    const [visible, setVisible] = useState(0);
    const [phase, setPhase] = useState<Phase>('run');
    const barRef = useRef<HTMLDivElement>(null);
    const valueRef = useRef<HTMLSpanElement>(null);
    const skipRef = useRef<HTMLButtonElement>(null);
    const visibleRef = useRef(0);
    const finished = useRef(false);
    const timers = useRef<number[]>([]);
    const onDoneRef = useRef(onDone);

    useEffect(() => {
        onDoneRef.current = onDone;
    }, [onDone]);

    const paint = useCallback(
        (value: number) => {
            if (barRef.current) barRef.current.style.transform = `scaleX(${value / 100})`;
            if (valueRef.current) valueRef.current.textContent = String(Math.round(value)).padStart(3, '0');
            const next = countVisible(lines, value);
            if (next !== visibleRef.current) {
                visibleRef.current = next;
                setVisible(next);
            }
        },
        [lines],
    );

    const exit = useCallback(() => {
        if (finished.current) return;
        finished.current = true;
        paint(100);
        setPhase('fade');
        timers.current.push(
            window.setTimeout(() => setPhase('lift'), 450),
            window.setTimeout(() => onDoneRef.current(), 1250),
        );
    }, [paint]);

    useEffect(() => {
        const html = document.documentElement;
        const previousOverflow = html.style.overflow;
        html.style.overflow = 'hidden';
        skipRef.current?.focus({ preventScroll: true });

        return () => {
            html.style.overflow = previousOverflow;
            timers.current.forEach((id) => window.clearTimeout(id));
            timers.current = [];
        };
    }, []);

    useEffect(() => {
        let raf = 0;
        let index = 0;
        let from = 0;
        let start = performance.now();

        const tick = (now: number) => {
            if (finished.current) return;
            const stage = stages[index];

            if (!stage) {
                timers.current.push(window.setTimeout(exit, 500));
                return;
            }

            const t = Math.min(1, (now - start) / stage.durationMs);
            paint(from + (stage.to - from) * stage.ease(t));

            if (t >= 1) {
                from = stage.to;
                index += 1;
                start = now;
            }

            raf = requestAnimationFrame(tick);
        };

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') exit();
        };

        raf = requestAnimationFrame(tick);
        window.addEventListener('keydown', onKey);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('keydown', onKey);
        };
    }, [exit, paint, stages]);

    const shown = lines.slice(0, visible);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={loadingLabel}
            data-phase={phase}
            className={cn(
                'splash-root group fixed inset-0 z-110 overflow-hidden bg-background font-mono will-change-transform transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none data-[phase=lift]:-translate-y-full',
                className,
            )}
        >
            <MatrixRain />
            <div className="splash-glow absolute inset-0" aria-hidden="true" />
            <div className="splash-scan absolute inset-0" aria-hidden="true" />
            <div className="splash-vignette absolute inset-0" aria-hidden="true" />
            <p role="status" className="sr-only">
                {loadingLabel}
            </p>

            <div className="relative mx-auto flex h-full w-full max-w-4xl flex-col px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] transition-[opacity,transform] duration-300 group-data-[phase=fade]:scale-[0.985] group-data-[phase=fade]:opacity-0 group-data-[phase=lift]:opacity-0 sm:px-8">
                <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 truncate text-[11px] text-muted-foreground sm:text-xs">
                        <span className="text-brand">{HANDLE}</span>@portfolio:~$
                    </span>

                    <div className="flex shrink-0 items-center gap-3">
                        <span className="hidden items-center gap-2 text-[11px] text-muted-foreground md:inline-flex">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70 motion-reduce:animate-none" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
                            </span>
                            {status}
                        </span>
                        <button
                            ref={skipRef}
                            type="button"
                            onClick={exit}
                            className="rounded-md bg-foreground/8 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-foreground/15 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                        >
                            {skipLabel}
                            <kbd className="ml-1.5 hidden text-[10px] opacity-60 sm:inline">ESC</kbd>
                        </button>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="term-body flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden py-6 text-xs leading-relaxed sm:text-[13px]"
                >
                    {shown.map((line, index) => (
                        <TerminalLine key={`${index}-${line.text}`} line={line} />
                    ))}
                    {phase === 'run' && (
                        <p className="flex gap-2 sm:gap-3">
                            <span className="hidden w-[9ch] shrink-0 sm:inline" />
                            <span className="w-[6ch] shrink-0 text-brand select-none">$</span>
                            <span className="term-cursor" />
                        </p>
                    )}
                </div>

                <div>
                    <div className="mb-3 flex items-end justify-between">
                        <span className="text-[11px] tracking-widest text-muted-foreground uppercase sm:text-xs">
                            {loadingLabel}
                        </span>
                        <span
                            aria-hidden="true"
                            className="flex items-baseline text-5xl leading-none text-foreground tabular-nums sm:text-6xl lg:text-7xl"
                        >
                            <span ref={valueRef}>000</span>
                            <span className="ml-1 text-xl text-muted-foreground sm:text-2xl">%</span>
                        </span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/10">
                        <div
                            ref={barRef}
                            className="h-full origin-left rounded-full bg-brand will-change-transform"
                            style={{ transform: 'scaleX(0)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}