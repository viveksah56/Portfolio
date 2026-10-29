import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { selectedProjectsData } from '@/lib/constants';
import { slugify } from '@/lib/case-studies';
import { cn } from '@/lib/utils';

type SelectedProject = (typeof selectedProjectsData.projects)[number];

const CHIP_LIMIT = 4;

const chipPositionClasses = [
    'left-[8%] top-[14%] -rotate-6',
    'right-[8%] top-[16%] rotate-3',
    'bottom-[16%] left-[10%] rotate-3',
    'bottom-[14%] right-[8%] -rotate-3',
] as const;

const labelClass =
    'text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs';

const badgeClass =
    'h-auto rounded-full border-transparent bg-secondary px-3.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] text-muted-foreground transition-shadow duration-300 hover:shadow-[0_6px_16px_-6px_color-mix(in_oklab,var(--foreground)_35%,transparent)] sm:text-sm';

const statusBadgeClass = 'h-auto rounded-full border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:text-xs';

function ProjectVisual({ project }: { project: SelectedProject }) {
    return (
        <div
            aria-hidden
            className="group relative isolate aspect-square w-full overflow-hidden rounded-[2rem] bg-brand text-background transition-shadow duration-500 hover:shadow-[0_32px_80px_-24px_color-mix(in_oklab,var(--brand)_70%,transparent)] sm:rounded-[2.5rem]"
        >
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-background/25 via-transparent to-foreground/15" />
            <div className="absolute -left-[10%] -top-[10%] -z-10 size-3/5 rounded-full bg-background/30 blur-3xl" />

            <p className="absolute left-[6%] top-[5%] text-[11px] font-semibold uppercase tracking-[0.2em] text-background/70 sm:text-xs">
                {project.index} / Project
            </p>

            {project.focusAreas.slice(0, CHIP_LIMIT).map((area, index) => (
                <div
                    key={area}
                    className={cn(
                        'absolute flex max-w-[38%] items-center gap-2 rounded-2xl bg-background/25 px-3 py-3 text-[11px] font-semibold tracking-[-0.01em] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 sm:rounded-3xl sm:px-5 sm:py-5 sm:text-sm',
                        chipPositionClasses[index],
                    )}
                >
                    <span className="size-1.5 shrink-0 rounded-full bg-background" />
                    <span className="truncate">{area}</span>
                </div>
            ))}

            <div className="absolute left-1/2 top-1/2 flex aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-6 flex-col items-center justify-center gap-[6%] rounded-[2rem] bg-background/25 shadow-[0_24px_48px_-16px_color-mix(in_oklab,var(--foreground)_35%,transparent)] backdrop-blur-xl transition-transform duration-500 group-hover:rotate-0 sm:rounded-[2.5rem]">
                <span className="text-[clamp(2rem,9vw,5.5rem)] font-bold leading-none tracking-[-0.06em]">
                    {project.monogram}
                </span>
                <span className="max-w-[90%] truncate text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]">
                    {project.category}
                </span>
            </div>

            <p className="absolute bottom-[5%] right-[6%] text-[10px] font-semibold uppercase tracking-[0.18em] text-background/70 sm:text-xs">
                {project.name} · Concept illustration
            </p>
        </div>
    );
}

function ProjectDetails({ project }: { project: SelectedProject }) {
    return (
        <div className="flex flex-col justify-center">
            <h3 className="text-balance text-[clamp(2rem,4.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-foreground">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand sm:text-[13px]">
                    {project.name}
                </span>
                {project.tagline}
            </h3>

            <p className="mt-6 max-w-[46ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:mt-8 sm:text-[19px] sm:leading-[1.42105] sm:tracking-[0.012em] lg:text-[21px] lg:leading-[1.38105] lg:tracking-[0.011em]">
                {project.description}
            </p>

            <dl className="mt-8 divide-y divide-border border-y border-border sm:mt-10">
                <div className="grid gap-1 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6 sm:py-5">
                    <dt className={cn(labelClass, 'sm:pt-1')}>Role</dt>
                    <dd className="text-[15px] font-medium leading-snug tracking-[-0.016em] text-foreground sm:text-base">
                        {project.role}
                    </dd>
                </div>
                <div className="grid gap-1 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6 sm:py-5">
                    <dt className={cn(labelClass, 'sm:pt-1')}>Scope</dt>
                    <dd className="text-[15px] font-medium leading-snug tracking-[-0.016em] text-foreground sm:text-base">
                        {project.scope.join(' · ')}
                    </dd>
                </div>
            </dl>

            <div className="mt-6 sm:mt-8">
                <p className={labelClass}>Focus areas</p>
                <ul className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
                    {project.focusAreas.map((area) => (
                        <li key={area}>
                            <Badge variant="secondary" className={badgeClass}>
                                {area}
                            </Badge>
                        </li>
                    ))}
                </ul>
            </div>

            <Link
                href={`/projects/${slugify(project.name)}`}
                aria-label={`Read the ${project.name} case study`}
                className="mt-8 inline-flex w-fit items-center gap-2 text-[15px] font-semibold tracking-[-0.016em] text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand focus-visible:text-brand sm:mt-10"
            >
                Read case study
            </Link>

            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} at ${project.urlLabel} (opens in a new tab)`}
                className="group mt-6 inline-flex w-fit items-center gap-3 border-b-2 border-foreground/80 pb-2.5 text-[17px] font-semibold tracking-[-0.022em] text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand"
            >
                Visit project
                <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                />
                <span className="text-[15px] font-medium text-muted-foreground transition-colors group-hover:text-brand">
                    {project.urlLabel}
                </span>
            </a>
        </div>
    );
}

export default function ProjectsSection() {
    const { section, title, headline, intro, projects } = selectedProjectsData;

    return (
        <section
            id="work"
            aria-labelledby="projects-heading"
            className="relative isolate overflow-hidden py-10 sm:py-14 lg:py-16"
        >
            <div className="mx-auto w-full px-5 sm:px-8 lg:px-[6%]">
                <ScrollReveal y={16} duration={0.7}>
                    <p className="type-caption flex items-center gap-4 font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                        <span className="text-brand">{section}</span>
                        <span>{title}</span>
                    </p>
                </ScrollReveal>

                <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-12 lg:items-end lg:gap-x-12">
                    <ScrollReveal className="lg:col-span-8" y={40} delay={120} duration={0.9}>
                        <h2
                            id="projects-heading"
                            className="text-balance text-[clamp(2.25rem,6.2vw,6rem)] font-bold leading-[1.04] tracking-[-0.05em] text-foreground"
                        >
                            {headline.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal className="lg:col-span-4" y={24} delay={240}>
                        <p className="max-w-[40ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px] sm:leading-[1.42105] sm:tracking-[0.012em] lg:text-[17px] lg:leading-[1.47059] lg:tracking-[-0.022em]">
                            {intro}
                        </p>
                    </ScrollReveal>
                </div>

                <ol className="mt-12 border-t border-border sm:mt-16">
                    {projects.map((project) => (
                        <li key={project.name} className="border-b border-border py-10 sm:py-14 lg:py-16">
                            <ScrollReveal y={32} amount={0.1}>
                                <div className="flex items-center justify-between gap-4">
                                    <p className={cn(labelClass, 'flex items-center gap-4 sm:gap-6')}>
                                        <span>{project.index}</span>
                                        <span>{project.category}</span>
                                    </p>
                                    <Badge variant="outline" className={statusBadgeClass}>
                                        Live production
                                    </Badge>
                                </div>

                                <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-x-16 xl:gap-x-24">
                                    <ProjectVisual project={project} />
                                    <ProjectDetails project={project} />
                                </div>
                            </ScrollReveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
