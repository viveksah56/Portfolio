import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import JsonLd from '@/components/json-ld';
import ScrollReveal from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/constants';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import { seoData } from '@/lib/seo';

type PageProps = { params: Promise<{ slug: string }> };

const { siteUrl, socialCard } = seoData;

export function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) return {};

    const title = `${study.name}: ${study.category} case study`;
    const description = `${study.name}: ${study.category.toLowerCase()} case study by ${siteConfig.name}, ${siteConfig.role} in ${siteConfig.location}. Built with ${study.scope.slice(0, 4).join(', ')}.`;
    const path = `/projects/${study.slug}`;

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: 'article',
            url: `${siteUrl}${path}`,
            siteName: siteConfig.name,
            title: `${title} | ${siteConfig.name}`,
            description,
            locale: seoData.locale,
            images: [{ url: socialCard.url, width: socialCard.width, height: socialCard.height, alt: socialCard.alt }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${siteConfig.name}`,
            description,
            images: [{ url: socialCard.url, alt: socialCard.alt }],
        },
    };
}

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs';

const sectionSpacing = 'mt-14 sm:mt-20 lg:mt-24';

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) notFound();

    const pageUrl = `${siteUrl}/projects/${study.slug}`;
    const others = caseStudies.filter((item) => item.slug !== study.slug);
    const publishDate = seoData.lastUpdated;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CreativeWork',
                '@id': `${pageUrl}#project`,
                name: study.name,
                headline: `${study.name}: ${study.category} case study`,
                description: study.description,
                url: pageUrl,
                sameAs: study.url,
                genre: study.category,
                keywords: [...study.scope, ...study.focusAreas].join(', '),
                creator: { '@id': `${siteUrl}/#person` },
                inLanguage: 'en',
                isPartOf: { '@id': `${siteUrl}/#website` },
            },
            {
                '@type': 'Article',
                '@id': `${pageUrl}#article`,
                headline: `${study.name}: ${study.category} case study`,
                description: study.description,
                url: pageUrl,
                datePublished: publishDate,
                dateModified: publishDate,
                inLanguage: 'en',
                author: { '@id': `${siteUrl}/#person` },
                publisher: { '@id': `${siteUrl}/#person` },
                image: `${siteUrl}${socialCard.url}`,
                mainEntityOfPage: pageUrl,
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: siteConfig.name, item: siteUrl },
                    { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/#work` },
                    { '@type': 'ListItem', position: 3, name: study.name, item: pageUrl },
                ],
            },
        ],
    };

    return (
        <>
            <Header />
            <main id="main" tabIndex={-1} className="outline-none">
                <article className="mx-auto w-full max-w-400 px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-[6%] lg:pt-44">
                    <nav aria-label="Breadcrumb">
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                        >
                            <ArrowLeft className="size-4" aria-hidden="true" />
                            All projects
                        </Link>
                    </nav>

                    <p className="type-eyebrow mt-10 text-muted-foreground">
                        {study.category} · Case study
                    </p>

                    <h1 className="type-display mt-6 text-foreground">{study.name}</h1>

                    <p className="type-subhead mt-6 max-w-[44ch] text-muted-foreground lg:max-w-[52ch]">
                        {study.tagline}
                    </p>

                    <p className="mt-8 max-w-[60ch] text-pretty text-[17px] leading-[1.47059] tracking-[-0.022em] text-foreground sm:text-[19px]">
                        {study.description}
                    </p>

                    <dl className="mt-10 max-w-3xl divide-y divide-border border-y border-border">
                        <div className="grid gap-1 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6 sm:py-5">
                            <dt className={labelClass}>My role</dt>
                            <dd className="text-[15px] font-medium text-foreground sm:text-base">{study.role}</dd>
                        </div>
                        <div className="grid gap-1 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6 sm:py-5">
                            <dt className={labelClass}>Stack</dt>
                            <dd className="text-[15px] font-medium text-foreground sm:text-base">
                                {study.scope.join(' · ')}
                            </dd>
                        </div>
                        <div className="grid gap-1 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6 sm:py-5">
                            <dt className={labelClass}>Focus areas</dt>
                            <dd>
                                <ul className="flex flex-wrap gap-2">
                                    {study.focusAreas.map((area) => (
                                        <li key={area}>
                                            <Badge variant="secondary" className="h-auto rounded-full px-3.5 py-1.5 text-[13px] font-semibold sm:text-sm">
                                                {area}
                                            </Badge>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>

                    <ul aria-label="Key facts" className="mt-8 grid gap-4 sm:grid-cols-3">
                        {study.highlights.map((highlight) => (
                            <li key={highlight.label} className="rounded-2xl border border-border bg-secondary/40 p-5">
                                <p className={labelClass}>{highlight.label}</p>
                                <p className="mt-2 text-[15px] font-medium leading-snug text-foreground">
                                    {highlight.value}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${study.name} at ${study.urlLabel} (opens in a new tab)`}
                        className="group mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-foreground/80 pb-2.5 text-[17px] font-semibold tracking-[-0.022em] text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand"
                    >
                        Visit project
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        <span className="text-[15px] font-medium text-muted-foreground group-hover:text-brand">
                            {study.urlLabel}
                        </span>
                    </a>

                    <section aria-labelledby="challenge-heading" className={sectionSpacing}>
                        <h2 id="challenge-heading" className={labelClass}>
                            The challenge
                        </h2>
                        <p className="mt-5 max-w-[60ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px]">
                            {study.challenge}
                        </p>
                    </section>

                    <section aria-labelledby="process-heading" className={sectionSpacing}>
                        <h2 id="process-heading" className={labelClass}>
                            How I approached it
                        </h2>
                        <ol className="mt-6 space-y-6">
                            {study.process.map((step, stepIndex) => (
                                <li
                                    key={step.title}
                                    className="grid gap-2 rounded-2xl border border-border bg-secondary/30 p-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 sm:p-6"
                                >
                                    <span aria-hidden className="text-[15px] font-semibold text-brand">
                                        {String(stepIndex + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="text-[17px] font-semibold tracking-[-0.022em] text-foreground sm:text-lg">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 max-w-[60ch] text-pretty text-[15px] font-normal leading-[1.47059] tracking-[-0.016em] text-muted-foreground sm:text-base">
                                            {step.detail}
                                        </p>
                                    </div>
                                    </li>
                            ))}
                        </ol>
                    </section>

                    <section aria-labelledby="outcome-heading" className={sectionSpacing}>
                        <h2 id="outcome-heading" className={labelClass}>
                            The outcome
                        </h2>
                        <p className="mt-5 max-w-[60ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px]">
                            {study.outcome}
                        </p>
                    </section>

                    <section aria-labelledby="reflection-heading" className={sectionSpacing}>
                        <h2 id="reflection-heading" className={labelClass}>
                            What I learned
                        </h2>
                        <blockquote className="mt-5 max-w-[60ch] border-l-2 border-brand pl-5 text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px]">
                            {study.reflection}
                        </blockquote>
                    </section>

                    <section aria-labelledby="more-projects" className="mt-20 border-t border-border pt-10 sm:mt-28">
                        <h2 id="more-projects" className={labelClass}>
                            More projects
                        </h2>
                        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                            {others.map((item) => (
                                <li key={item.slug}>
                                    <Link
                                        href={`/projects/${item.slug}`}
                                        className="text-[17px] font-semibold tracking-[-0.022em] text-foreground transition-colors hover:text-brand focus-visible:text-brand"
                                    >
                                        {item.name}
                                    </Link>
                                    <span className="block text-sm text-muted-foreground">{item.category}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>
            </main>
            <JsonLd data={jsonLd} />
        </>
    );
}
