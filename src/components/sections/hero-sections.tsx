import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import HeroBackdrop from '@/components/hero-backdrop';
import ScrollReveal from '@/components/scroll-reveal';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';
import { heroStack, heroStats } from '@/lib/hero';
import { cn } from '@/lib/utils';

const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent('Project inquiry')}`;

const primaryButtonClass = cn(
    buttonVariants({ size: 'lg' }),
    'type-button h-11 w-full gap-2 rounded-full bg-primary px-5 text-primary-foreground transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_8px_20px_-6px_color-mix(in_oklab,var(--foreground)_45%,transparent)] active:translate-y-0 motion-reduce:transition-none sm:w-auto sm:px-6',
);

const secondaryButtonClass = cn(
    buttonVariants({ variant: 'outline', size: 'lg' }),
    'type-button h-11 w-full gap-2 rounded-full border-border bg-background/80 px-5 text-foreground transition-[transform,box-shadow,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:text-brand motion-reduce:transition-none sm:w-auto sm:px-6',
);

const textLinkClass =
    'type-button inline-flex w-fit items-center gap-2 border-b-2 border-foreground/70 pb-2 text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand';

function Key({ children }: { children: ReactNode }) {
    return <span className="text-brand">{children}</span>;
}

function Str({ children }: { children: ReactNode }) {
    return <span className="text-foreground">&quot;{children}&quot;</span>;
}

function Dim({ children }: { children: ReactNode }) {
    return <span className="text-muted-foreground">{children}</span>;
}

function DeveloperCard() {
    return (
        <figure aria-label="Developer profile" className="relative w-full max-w-md justify-self-end">
            <div
                aria-hidden
                className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_22%,transparent),transparent)]"
            />
            <div className="overflow-hidden rounded-3xl bg-card/70 shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--foreground)_35%,transparent)] ring-1 ring-foreground/8 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3 bg-foreground/4 px-5 py-3">
                    <span className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                        <span aria-hidden className="flex gap-1.5">
                            <i className="size-2.5 rounded-full bg-foreground/15" />
                            <i className="size-2.5 rounded-full bg-foreground/15" />
                            <i className="size-2.5 rounded-full bg-brand" />
                        </span>
                        developer.ts
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                        <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                        available
                    </span>
                </div>

                <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
                    <code className="block">
                        <span className="block">
                            <Dim>{'const '}</Dim>
                            <Key>developer</Key>
                            <Dim>{' = {'}</Dim>
                        </span>
                        <span className="block pl-5">
                            <Key>name</Key>
                            <Dim>{': '}</Dim>
                            <Str>{siteConfig.name}</Str>
                            <Dim>,</Dim>
                        </span>
                        <span className="block pl-5">
                            <Key>role</Key>
                            <Dim>{': '}</Dim>
                            <Str>{siteConfig.role}</Str>
                            <Dim>,</Dim>
                        </span>
                        <span className="block pl-5">
                            <Key>location</Key>
                            <Dim>{': '}</Dim>
                            <Str>{siteConfig.location}</Str>
                            <Dim>,</Dim>
                        </span>
                        <span className="block pl-5">
                            <Key>approach</Key>
                            <Dim>{': '}</Dim>
                            <Str>End to end</Str>
                            <Dim>,</Dim>
                        </span>
                        <span className="block pl-5">
                            <Key>stack</Key>
                            <Dim>{': ['}</Dim>
                            {heroStack.map((item, index) => (
                                <span key={item}>
                                    <Str>{item}</Str>
                                    <Dim>{index < heroStack.length - 1 ? ', ' : ''}</Dim>
                                </span>
                            ))}
                            <Dim>],</Dim>
                        </span>
                        <span className="block pl-5">
                            <Key>focus</Key>
                            <Dim>{': ['}</Dim>
                            <Str>Performance</Str>
                            <Dim>{', '}</Dim>
                            <Str>Clean architecture</Str>
                            <Dim>],</Dim>
                        </span>
                        <span className="block pl-5">
                            <Key>available</Key>
                            <Dim>{': '}</Dim>
                            <span className="text-brand">true</span>
                            <Dim>,</Dim>
                        </span>
                        <span className="block">
                            <Dim>{'};'}</Dim>
                        </span>
                    </code>
                </pre>
            </div>
        </figure>
    );
}

export default function HeroSections() {
    return (
        <section
            id="home"
            aria-label="Introduction"
            className="relative isolate flex min-h-svh flex-col overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40"
        >
            <HeroBackdrop />

            <div className="mx-auto flex w-full max-w-400 flex-1 flex-col px-5 sm:px-8 lg:px-[6%]">
                <div className="grid flex-1 items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
                    <div className="flex min-w-0 flex-col">
                        <ScrollReveal y={16} duration={0.7}>
                            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase sm:text-[13px]">
                                {siteConfig.role} · {siteConfig.location}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal className="mt-5" y={12} delay={100}>
                            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[13px] font-medium text-brand ring-1 ring-brand/25">
                                <span aria-hidden className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
                                    <span className="relative inline-flex size-2 rounded-full bg-brand" />
                                </span>
                                Open to full-time Full Stack roles
                            </p>
                        </ScrollReveal>

                        <h1 className="type-display mt-7 text-foreground sm:mt-9">
                            <span className="sr-only">
                                {siteConfig.name}, {siteConfig.role} in {siteConfig.location}.{' '}
                            </span>
                            {siteConfig.headline.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                            <span className="relative inline-block text-brand">
                                {siteConfig.highlight}
                                <span aria-hidden className="hero-underline" />
                            </span>
                        </h1>

                        <ScrollReveal className="mt-7 sm:mt-9" y={24} delay={200}>
                            <p className="type-subhead max-w-[46ch] text-muted-foreground lg:max-w-[52ch]">
                                {siteConfig.description}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal className="mt-8 sm:mt-10" y={24} delay={320}>
                            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                                <Link href="#work" className={primaryButtonClass}>
                                    View selected work
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </Link>

                                <a
                                    href="/Bibek-Sah-Resume.pdf"
                                    download="Bibek-Sah-Resume.pdf"
                                    className={secondaryButtonClass}
                                    aria-label="Download Bibek Sah's resume PDF"
                                >
                                    <FileText className="size-4" aria-hidden="true" />
                                    Download résumé
                                </a>

                                <a href={emailHref} className={textLinkClass}>
                                    <Mail className="size-4.5" aria-hidden="true" />
                                    Email me
                                </a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="mt-8 lg:hidden" y={16} delay={400}>
                            <ul aria-label="Core stack" className="flex flex-wrap gap-2">
                                {heroStack.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-full bg-foreground/6 px-3 py-1 font-mono text-xs text-muted-foreground"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal className="hidden lg:block" y={24} delay={300}>
                        <DeveloperCard />
                    </ScrollReveal>
                </div>

                <ScrollReveal className="mt-12 sm:mt-14" y={16} delay={440}>
                    <dl className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8">
                        {heroStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col gap-2 before:mb-2 before:block before:h-0.5 before:w-6 before:rounded-full before:bg-brand before:content-['']"
                            >
                                <dt className="order-2 text-[13px] leading-snug text-muted-foreground sm:text-sm">
                                    {stat.label}
                                </dt>
                                <dd className="order-1 font-heading text-4xl leading-none text-foreground tabular-nums sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </ScrollReveal>

                <ScrollReveal className="mt-auto pt-12 sm:pt-14" y={12} delay={520}>
                    <Link
                        href="#story"
                        className="type-caption group flex w-fit items-center gap-4 font-semibold tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:text-foreground"
                    >
                        Scroll to begin
                        <span aria-hidden className="relative h-px w-12 bg-foreground/20 sm:w-16">
                            <span className="absolute top-0 left-0 h-px w-3 bg-brand transition-[width] duration-500 group-hover:w-full motion-reduce:transition-none" />
                        </span>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}