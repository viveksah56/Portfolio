import { ArrowUpRight, Mail } from 'lucide-react';
import CopyEmail from '@/components/copy-email';
import CurrentYear from '@/components/current-year';
import ScrollReveal from '@/components/scroll-reveal';
import { contactData, siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {Suspense} from "react";

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs';

const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(contactData.emailSubject)}`;

const primaryButtonClass =
    'inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-[15px] font-medium tracking-[-0.016em] text-primary-foreground outline-none transition-[background-color,transform,box-shadow] duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_-6px_color-mix(in_oklab,var(--foreground)_45%,transparent)] focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] sm:h-11 sm:px-6';

export default function ContactSection() {
    const { section, title, headline, intro, primaryLabel, copyLabel, copiedLabel, copyrightYear, details, socials } =
        contactData;

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative isolate overflow-hidden pt-10 sm:pt-14 lg:pt-16"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[min(90vw,60rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
            />

            <div className="mx-auto w-full px-5 sm:px-8 lg:px-[6%]">
                <ScrollReveal y={16} duration={0.7}>
                    <p className="type-caption flex items-center gap-4 font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                        <span className="text-brand">{section}</span>
                        <span>{title}</span>
                    </p>
                </ScrollReveal>

                <ScrollReveal className="mt-8 sm:mt-12" y={40} delay={120} duration={0.9}>
                    <h2
                        id="contact-heading"
                        className="text-balance text-[clamp(2.25rem,7vw,6.5rem)] font-bold leading-[1.04] tracking-[-0.05em] text-foreground"
                    >
                        {headline.map((line, index) => (
                            <span key={line} className={cn('block', index === headline.length - 1 && 'text-brand')}>
                                {line}
                            </span>
                        ))}
                    </h2>
                </ScrollReveal>

                <div className="mt-10 grid gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-12 lg:gap-x-12">
                    <ScrollReveal className="lg:col-span-6" y={28} delay={160}>
                        <p className="max-w-[44ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px] sm:leading-[1.42105] sm:tracking-[0.012em] lg:text-[21px] lg:leading-[1.38105] lg:tracking-[0.011em]">
                            {intro}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                            <a href={emailHref} className={primaryButtonClass}>
                                <Mail className="size-4" aria-hidden="true" />
                                {primaryLabel}
                            </a>
                            <CopyEmail email={siteConfig.email} label={copyLabel} copiedLabel={copiedLabel} />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="lg:col-span-6" y={28} delay={260}>
                        <dl className="divide-y divide-border border-y border-border">
                            {details.map((item) => (
                                <div
                                    key={item.label}
                                    className="grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6 sm:py-5"
                                >
                                    <dt className={cn(labelClass, 'sm:pt-1')}>{item.label}</dt>
                                    <dd className="break-words text-[15px] font-medium leading-snug tracking-[-0.016em] text-foreground sm:text-base">
                                        {item.isEmail ? (
                                            <a
                                                href={emailHref}
                                                className="rounded-sm transition-colors hover:text-brand focus-visible:text-brand"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            item.value
                                        )}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        {socials.length > 0 ? (
                            <ul aria-label="Social profiles" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 sm:mt-8">
                                {socials.map((social) => (
                                    <li key={social.label}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${social.label} (opens in a new tab)`}
                                            className="group inline-flex items-center gap-1 text-[15px] font-medium tracking-[-0.016em] text-foreground transition-colors hover:text-brand focus-visible:text-brand sm:text-base"
                                        >
                                            {social.label}
                                            <ArrowUpRight
                                                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </ScrollReveal>
                </div>
            </div>

            <footer className="mx-auto mt-16 w-full px-5 pb-8 sm:mt-24 sm:px-8 sm:pb-10 lg:px-[6%]">
                <div className="flex flex-col gap-2 border-t border-border pt-6 text-[13px] tracking-[-0.01em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                    <Suspense fallback={null}>
                        <p>
                            © <CurrentYear fallback={copyrightYear} /> {siteConfig.name}. All rights reserved.
                        </p>
                    </Suspense>
                    <p>
                        {siteConfig.role} · {siteConfig.location}
                    </p>
                </div>
            </footer>
        </section>
    );
}