import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import HeroBackdrop from '@/components/hero-backdrop';
import ScrollReveal from '@/components/scroll-reveal';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent('Project inquiry')}`;

const primaryButtonClass = cn(
    buttonVariants({ size: 'lg' }),
    'type-button h-10 w-full gap-2 rounded-full bg-primary px-5 text-primary-foreground transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_8px_20px_-6px_color-mix(in_oklab,var(--foreground)_45%,transparent)] active:translate-y-0 sm:h-11 sm:w-auto sm:px-6',
);

const textLinkClass =
    'type-button inline-flex w-fit items-center gap-2.5 border-b-2 border-foreground/80 pb-2.5 text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand';

export default function HeroSections() {
    return (
        <section
            id="home"
            aria-label="Introduction"
            className="relative isolate flex min-h-svh flex-col overflow-hidden pb-8 pt-28 sm:pb-10 sm:pt-36 lg:pt-44"
        >
            <HeroBackdrop />

            <div className="mx-auto flex w-full max-w-400 flex-1 flex-col px-5 sm:px-8 lg:px-[6%]">
                <ScrollReveal y={16} duration={0.7}>
                    <p className="type-eyebrow text-muted-foreground">
                        {siteConfig.name} · {siteConfig.role} · {siteConfig.location}
                    </p>
                </ScrollReveal>

                <h1 className="type-display mt-8 text-foreground sm:mt-12">
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

                <ScrollReveal className="mt-8 sm:mt-10" y={24} delay={200}>
                    <p className="type-subhead max-w-[44ch] text-muted-foreground lg:max-w-[52ch]">
                        {siteConfig.description}
                    </p>
                </ScrollReveal>

                <ScrollReveal className="mt-8 sm:mt-10" y={24} delay={320}>
                    <div className="flex flex-col items-stretch gap-x-8 gap-y-6 sm:flex-row sm:flex-wrap sm:items-center">
                        <Link href="#work" className={primaryButtonClass}>
                            View work
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>

                        <a href={emailHref} className={textLinkClass}>
                            <Mail className="size-5" aria-hidden="true" />
                            Email me
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal className="mt-auto pt-14 sm:pt-16" y={12} delay={440}>
                    <Link
                        href="#story"
                        className="type-caption group flex w-fit items-center gap-4 font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                    >
                        Scroll to begin
                        <span aria-hidden className="relative h-px w-12 bg-foreground/20 sm:w-16">
                            <span className="absolute left-0 top-0 h-px w-3 bg-brand transition-all duration-500 group-hover:w-full" />
                        </span>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}