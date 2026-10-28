import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import JsonLd from '@/components/json-ld';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/constants';
import { caseStudies, getCaseStudy } from '@/lib/projects';
import { seoData } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const baseUrl = seoData?.siteUrl || "https://www.bibeksah1.com.np";
  const canonicalUrl = `${baseUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} — Case Study | Bibek Sah`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      type: "article",
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs';

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) notFound();

    const pageUrl = `${siteUrl}/projects/${study.slug}`;
    const others = caseStudies.filter((item) => item.slug !== study.slug);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CreativeWork',
                '@id': `${pageUrl}#project`,
                name: study.name,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black text-white px-6 md:px-24 py-16 selection:bg-neutral-800 selection:text-white">
        <div className="max-w-5xl mx-auto">
          {/* Back Navigation */}
          <Link
            className="text-sm text-neutral-400 hover:text-white transition-colors mb-12 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-sm"
            href="/projects"
          >
            ← All projects
          </Link>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs tracking-wider uppercase text-neutral-400 font-mono">
              {project.category}
            </span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${statusColor}`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 mb-8 font-light leading-snug">
            {project.subtitle}
          </p>

          <p className="text-neutral-400 max-w-3xl leading-relaxed mb-16 text-base md:text-lg">
            {project.description}
          </p>

          {/* Key Specification Matrix */}
          <div className="border-t border-neutral-800 divide-y divide-neutral-800 mb-16">
            <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                My Role
              </span>
              <span className="md:col-span-3 text-neutral-200 font-medium">
                {project.role}
              </span>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                Team Setup
              </span>
              <span className="md:col-span-3 text-neutral-300 text-sm">
                {project.team}
              </span>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                Frontend Stack
              </span>
              <span className="md:col-span-3 text-neutral-200 font-mono text-sm">
                {project.frontendStack.join(" · ")}
              </span>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                Backend Stack
              </span>
              <span className="md:col-span-3 text-neutral-200 font-mono text-sm">
                {project.backendStack.join(" · ")}
              </span>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                Database
              </span>
              <span className="md:col-span-3 text-neutral-200 font-mono text-sm">
                {project.databaseStack.join(" · ")}
              </span>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                Focus Areas
              </span>
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {project.focusAreas.map((area, i) => (
                  <span
                    key={i}
                    className="bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full text-xs text-neutral-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Diagram / Summary */}
          {project.architecture ? (
            <section aria-labelledby="architecture-heading" className="mb-16">
              <h2
                id="architecture-heading"
                className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-6"
              >
                System Architecture
              </h2>
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="border-l border-neutral-800 pl-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                      Client Tier
                    </span>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      {project.architecture.client}
                    </p>
                  </div>
                  <div className="border-l border-neutral-800 pl-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                      Service Layer
                    </span>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      {project.architecture.server}
                    </p>
                  </div>
                  <div className="border-l border-neutral-800 pl-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                      Data Layer
                    </span>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      {project.architecture.database}
                    </p>
                  </div>
                  <div className="border-l border-neutral-800 pl-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                      Security & Auth
                    </span>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      {project.architecture.auth}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* Technical Challenges */}
          {project.challenges && project.challenges.length > 0 ? (
            <section aria-labelledby="challenges-heading" className="mb-16">
              <h2
                id="challenges-heading"
                className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-6"
              >
                Key Engineering Challenges & Solutions
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.challenges.map((ch, idx) => (
                  <div
                    key={ch.title}
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        Challenge 0{idx + 1}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {ch.title}
                      </h3>
                      <div className="mt-4 space-y-3 text-sm">
                        <div>
                          <span className="text-xs font-semibold text-amber-400/90 uppercase tracking-wide">
                            The Problem:
                          </span>
                          <p className="mt-1 text-neutral-400 leading-relaxed">
                            {ch.problem}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-emerald-400/90 uppercase tracking-wide">
                            The Solution:
                          </span>
                          <p className="mt-1 text-neutral-300 leading-relaxed">
                            {ch.solution}
                          </p>
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

                    <section aria-labelledby="more-projects" className="mt-20 border-t border-border pt-10 sm:mt-28">
                        <h2 id="more-projects" className={labelClass}>
                            More projects
                        </h2>
                        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
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
