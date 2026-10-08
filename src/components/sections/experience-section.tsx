import ProjectTimeline from '@/components/project-timeline';
import ScrollReveal from '@/components/scroll-reveal';
import { experienceData, projectsData } from '@/lib/constants';

const LEAD_PROJECTS = 5;

const titleClass =
    'text-balance text-[clamp(1.5rem,2.2vw,2.125rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground';

const paragraphClass =
    'max-w-[56ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px] sm:leading-[1.42105] sm:tracking-[0.012em] lg:text-[21px] lg:leading-[1.38105] lg:tracking-[0.011em]';

const tagClass =
    'rounded-full border border-border px-3.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground sm:text-sm';

const groupHeadingClass = 'type-eyebrow font-semibold tracking-[-0.016em] text-brand';

export default function ExperienceSection() {
    const { section, title, subtitle, headline, experience } = experienceData;
    const leadProjects = projectsData.slice(0, LEAD_PROJECTS);

    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className="relative isolate overflow-hidden py-10 sm:py-14 lg:py-16"
        >
            <div className="mx-auto w-full px-5 sm:px-8 lg:px-[6%]">
                <ScrollReveal y={16} duration={0.7}>
                    <p className="type-caption flex items-center gap-4 font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                        <span className="text-brand">{section}</span>
                        <span>{title}</span>
                    </p>
                </ScrollReveal>

                <div className="mt-8 grid gap-6 sm:mt-12 lg:mt-14 lg:grid-cols-12 lg:gap-x-12">
                    <ScrollReveal className="lg:col-span-4" y={20} delay={80}>
                        <p className={groupHeadingClass}>{subtitle}</p>
                    </ScrollReveal>

                    <ScrollReveal className="lg:col-span-8" y={40} delay={160} duration={0.9}>
                        <h2
                            id="experience-heading"
                            className="text-balance text-[clamp(2.25rem,6.2vw,6rem)] font-bold leading-[1.04] tracking-[-0.05em] text-foreground"
                        >
                            {headline}
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="mt-12 sm:mt-16 lg:mt-20">
                    <h3 className="sr-only">Work history</h3>
                    <ul className="border-y border-border">
                        {experience.map((job) => (
                            <li key={`${job.company}-${job.position}`}>
                                <ScrollReveal className="grid gap-5 py-8 sm:py-10 lg:grid-cols-12 lg:gap-x-12" y={28}>
                                    <div className="flex items-center gap-3 lg:col-span-3">
                                        <span
                                            aria-hidden
                                            className="size-2.5 rounded-full bg-brand ring-4 ring-brand/20"
                                        />
                                        <p className="text-[17px] font-semibold tracking-[-0.022em] text-brand sm:text-lg">
                                            {job.company}
                                        </p>
                                    </div>

                                    <h4 className={`${titleClass} lg:col-span-4`}>{job.position}</h4>

                                    <div className="lg:col-span-5">
                                        <p className={paragraphClass}>{job.description}</p>
                                        <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
                                            {job.technologies.map((tech) => (
                                                <li key={tech} className={tagClass}>
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-16 sm:mt-24">
                    <ScrollReveal y={16} duration={0.7}>
                        <h3 className={groupHeadingClass}>Selected projects</h3>
                    </ScrollReveal>

                    <ScrollReveal className="mt-8 sm:mt-10" y={32} delay={80}>
                        <ProjectTimeline projects={leadProjects} />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}