import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import JsonLd from '@/components/json-ld';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/constants';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import { seoData } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const canonicalUrl = `${seoData.siteUrl}/projects/${study.slug}`;

  return {
    title: `${study.name} — Case Study`,
    description: study.description,
    openGraph: {
      title: `${study.name} — Case Study`,
      description: study.description,
      type: 'article',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.name} — Case Study`,
      description: study.description,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs';

function CaseStudyContent({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const pageUrl = `${seoData.siteUrl}/projects/${study.slug}`;
  const others = caseStudies.filter((item) => item.slug !== study.slug);

  const database =
    study.scope.includes('PostgreSQL')
      ? 'PostgreSQL'
      : study.scope.includes('MySQL')
        ? 'MySQL'
        : 'MongoDB';

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
        creator: { '@id': `${seoData.siteUrl}/#person` },
        inLanguage: 'en',
        isPartOf: { '@id': `${seoData.siteUrl}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: siteConfig.name, item: seoData.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${seoData.siteUrl}/#work` },
          { '@type': 'ListItem', position: 3, name: study.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main
      id="main"
      tabIndex={-1}
      className="min-h-svh bg-background px-6 text-foreground outline-none selection:bg-brand selection:text-white md:px-24"
    >
      <div className="mx-auto max-w-5xl pt-32 pb-16 sm:pt-40">
        <article>
          {/* Back navigation */}
          <Link
            className="mb-12 inline-flex items-center gap-1.5 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            href="/projects"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>

          {/* Header metadata */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {study.category}
            </span>
            <Badge variant="outline" className="rounded-full">
              Live production
            </Badge>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            {study.name}
          </h1>

          <p className="mb-8 text-xl font-light leading-snug text-muted-foreground md:text-2xl">
            {study.tagline}
          </p>

          <p className="mb-16 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {study.description}
          </p>

          {/* Key specification matrix */}
          <div className="mb-16 divide-y divide-border border-t border-border">
            <div className="grid grid-cols-1 items-center gap-4 py-6 md:grid-cols-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                My Role
              </span>
              <span className="font-medium md:col-span-3">{study.role}</span>
            </div>

            <div className="grid grid-cols-1 items-baseline gap-4 py-6 md:grid-cols-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Stack
              </span>
              <span className="font-mono text-sm md:col-span-3">
                {study.scope.join(' · ')}
              </span>
            </div>

            <div className="grid grid-cols-1 items-baseline gap-4 py-6 md:grid-cols-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Focus Areas
              </span>
              <div className="flex flex-wrap gap-2 md:col-span-3">
                {study.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* System architecture */}
          <section aria-labelledby="architecture-heading" className="mb-16">
            <h2
              id="architecture-heading"
              className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              System Architecture
            </h2>
            <div className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border-l-2 border-brand/60 pl-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Client Tier
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Next.js storefront with SSR/SSG/ISR, Tailwind CSS, and Shadcn/UI components.
                  </p>
                </div>
                <div className="border-l-2 border-brand/60 pl-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Service Layer
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    REST services with JWT authentication and middleware-based error handling.
                  </p>
                </div>
                <div className="border-l-2 border-brand/60 pl-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Data Layer
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{database} — schema designed for this domain with role-protected access.</p>
                </div>
                <div className="border-l-2 border-brand/60 pl-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Security &amp; Auth
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    JWT-based authentication with role-based access control across student, admin, and operational surfaces.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Narrative sections */}
          <section aria-labelledby="challenge-heading" className="mb-16">
            <h2 id="challenge-heading" className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              The Challenge
            </h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              {study.challenge}
            </p>
          </section>

          <section aria-labelledby="process-heading" className="mb-16">
            <h2 id="process-heading" className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              The Process
            </h2>
            <ol className="space-y-8">
              {study.process.map((step, idx) => (
                <li key={step.title} className="border-l-2 border-border pl-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="outcome-heading" className="mb-16">
            <h2 id="outcome-heading" className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              The Outcome
            </h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              {study.outcome}
            </p>
          </section>

          <section aria-labelledby="highlights-heading" className="mb-16">
            <h2 id="highlights-heading" className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Highlights
            </h2>
            <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-3">
              {study.highlights.map((highlight) => (
                <div key={highlight.label}>
                  <dt className={labelClass}>{highlight.label}</dt>
                  <dd className="mt-1 text-sm text-foreground">{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="reflection-heading" className="mb-16">
            <h2 id="reflection-heading" className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Reflection
            </h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              {study.reflection}
            </p>
          </section>

          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${study.name} at ${study.urlLabel} (opens in a new tab)`}
            className="group mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-foreground/80 pb-2.5 text-[17px] font-semibold tracking-[-0.022em] text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand"
          >
            Visit project
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
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
      </div>
      <JsonLd data={jsonLd} />
    </main>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="flex min-h-svh items-center justify-center" role="status" aria-live="polite">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Loading case study…
            </span>
          </div>
        }
      >
        <CaseStudyContent slug={slug} />
      </Suspense>
    </>
  );
}
