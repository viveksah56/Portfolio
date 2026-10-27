'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useRef, useState, type KeyboardEvent } from 'react';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ProjectItem = {
    name: string;
    description: string;
    technologies: readonly string[];
    url?: string;
};

type ProjectTimelineProps = {
    projects: readonly ProjectItem[];
};

const MAX_TAGS = 6;
const SCROLL_AFTER = 5;
const EASE = [0.22, 1, 0.36, 1] as const;

const hoverShadow =
    'hover:shadow-[0_8px_20px_-6px_color-mix(in_oklab,var(--foreground)_35%,transparent)]';

const activeShadow =
    'shadow-[0_8px_20px_-6px_color-mix(in_oklab,var(--foreground)_45%,transparent)]';

const badgeClass =
    'h-auto rounded-full border-transparent bg-secondary px-3.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] text-muted-foreground transition-shadow duration-300 hover:shadow-[0_6px_16px_-6px_color-mix(in_oklab,var(--foreground)_35%,transparent)] sm:text-sm';

const pad = (value: number) => String(value).padStart(2, '0');

export default function ProjectTimeline({ projects }: ProjectTimelineProps) {
    const [active, setActive] = useState(0);
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const reduce = useReducedMotion();

    if (!projects || projects.length === 0) {
        return null;
    }

    const safeActive = Math.min(active, projects.length - 1);
    const project = projects[safeActive];
    const scrollable = projects.length > SCROLL_AFTER;

    const select = (index: number) => {
        if (!projects || projects.length === 0) return;
        const next = (index + projects.length) % projects.length;
        setActive(next);
        tabRefs.current[next]?.focus();
    };

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            select(active + 1);
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            select(active - 1);
        } else if (event.key === 'Home') {
            event.preventDefault();
            select(0);
        } else if (event.key === 'End') {
            event.preventDefault();
            select(projects.length - 1);
        }
    };

    return (
        <div className="grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-12 xl:gap-x-16">
            <ScrollArea.Root className="relative -mx-5 min-w-0 sm:-mx-8 lg:mx-0">
                <ScrollArea.Viewport
                    className={cn(
                        'overflow-x-auto px-5 py-2 sm:px-8 lg:overflow-x-hidden lg:px-1 lg:pr-4',
                        scrollable && 'lg:max-h-84',
                    )}
                >
                    <ScrollArea.Content>
                        <div
                            role="tablist"
                            aria-label="Projects"
                            onKeyDown={onKeyDown}
                            className="flex w-max gap-2.5 lg:w-full lg:flex-col lg:gap-3"
                        >
                            {projects.map((item, index) => {
                                const selected = index === active;
                                return (
                                    <button
                                        key={item.name}
                                        ref={(node) => {
                                            tabRefs.current[index] = node;
                                        }}
                                        type="button"
                                        role="tab"
                                        id={`project-tab-${index}`}
                                        aria-selected={selected}
                                        aria-controls="project-panel"
                                        tabIndex={selected ? 0 : -1}
                                        onClick={() => setActive(index)}
                                        className={cn(
                                            'relative shrink-0 rounded-full px-5 py-3 text-left text-[15px] font-medium tracking-[-0.016em] outline-none transition-[color,box-shadow,background-color] duration-300 focus-visible:ring-2 focus-visible:ring-ring sm:text-base lg:w-full',
                                            selected
                                                ? cn('text-background', activeShadow)
                                                : cn('bg-secondary text-muted-foreground hover:text-foreground', hoverShadow),
                                        )}
                                    >
                                        {selected ? (
                                            <motion.span
                                                aria-hidden
                                                layoutId="project-pill"
                                                transition={
                                                    reduce
                                                        ? { duration: 0 }
                                                        : { type: 'spring', stiffness: 420, damping: 38 }
                                                }
                                                className="absolute inset-0 rounded-full bg-foreground"
                                            />
                                        ) : null}
                                        <span className="relative block truncate">{item.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>

                {scrollable ? (
                    <ScrollArea.Scrollbar
                        orientation="vertical"
                        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1.5 opacity-0 transition-opacity duration-300 data-hovering:pointer-events-auto data-hovering:opacity-100 data-scrolling:pointer-events-auto data-scrolling:opacity-100 lg:flex"
                    >
                        <ScrollArea.Thumb className="w-full rounded-full bg-foreground/25" />
                    </ScrollArea.Scrollbar>
                ) : null}
            </ScrollArea.Root>

            <div role="tabpanel" id="project-panel" aria-labelledby={`project-tab-${active}`} className="min-w-0">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: reduce ? 0 : -12 }}
                        transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                        className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] xl:gap-x-16"
                    >
                        <div className="min-w-0">
                            <Badge
                                variant="secondary"
                                className="h-auto rounded-full border-transparent bg-secondary px-3.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] text-foreground"
                            >
                                Project {pad(active + 1)}
                            </Badge>

                            <h4 className="mt-6 text-balance break-words text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground sm:mt-8">
                                {project.name}
                            </h4>

                            <p className="mt-6 max-w-[48ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:mt-8 sm:text-[19px] sm:leading-[1.42105] sm:tracking-[0.012em] lg:text-[21px] lg:leading-[1.38105] lg:tracking-[0.011em]">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <div className="relative isolate flex aspect-square w-full flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_color-mix(in_oklab,var(--foreground)_35%,transparent)] sm:p-8">
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -right-1/4 -top-1/4 -z-10 size-3/4 rounded-full bg-brand/20 blur-3xl"
                                />
                                <p className="type-caption font-semibold tracking-[0.14em] text-muted-foreground sm:text-sm">
                                    {pad(active + 1)} / {pad(projects.length)}
                                </p>
                                <ul aria-label="Technologies" className="flex flex-wrap gap-2 sm:gap-2.5">
                                    {project.technologies.slice(0, MAX_TAGS).map((tech) => (
                                        <li key={tech}>
                                            <Badge variant="secondary" className={badgeClass}>
                                                {tech}
                                            </Badge>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {project.url ? (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${project.name} (opens in a new tab)`}
                                    className="mt-6 inline-flex items-center gap-2 rounded-md text-[17px] font-semibold tracking-[-0.022em] text-muted-foreground transition-colors hover:text-brand focus-visible:text-brand"
                                >
                                    Visit site
                                    <ArrowUpRight className="size-4" aria-hidden="true" />
                                </a>
                            ) : null}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}