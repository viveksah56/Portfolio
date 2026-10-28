import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CaseStudy, getProject, getAllProjectSlugs, projects } from "@/data/projects";
import { seoData } from "@/lib/seo";

export type { CaseStudy };
export { projects };

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

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const baseUrl = seoData?.siteUrl || "https://www.bibeksah1.com.np";
  const pageUrl = `${baseUrl}/projects/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "EducationalApplication",
    url: pageUrl,
    sameAs: project.liveUrl,
    author: {
      "@type": "Person",
      name: "Bibek Sah",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Bibek Sah",
    },
  };

  const statusColor =
    project.status === "Live"
      ? "bg-emerald-950/60 text-emerald-400 border-emerald-800/60"
      : project.status === "Demo"
      ? "bg-amber-950/60 text-amber-400 border-amber-800/60"
      : "bg-neutral-900 text-neutral-400 border-neutral-800";

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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Quality & Engineering Standards */}
          {project.quality ? (
            <section aria-labelledby="quality-heading" className="mb-16">
              <h2
                id="quality-heading"
                className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-6"
              >
                Quality & Production Standards
              </h2>
              <div className="border border-neutral-800 rounded-2xl divide-y divide-neutral-800 bg-neutral-950">
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Auth & RBAC
                  </span>
                  <span className="md:col-span-3 text-sm text-neutral-300 leading-relaxed">
                    {project.quality.authRbac}
                  </span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Validation
                  </span>
                  <span className="md:col-span-3 text-sm text-neutral-300 leading-relaxed">
                    {project.quality.validation}
                  </span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Error Handling
                  </span>
                  <span className="md:col-span-3 text-sm text-neutral-300 leading-relaxed">
                    {project.quality.errorHandling}
                  </span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Performance
                  </span>
                  <span className="md:col-span-3 text-sm text-neutral-300 leading-relaxed">
                    {project.quality.performance}
                  </span>
                </div>
              </div>
            </section>
          ) : null}

          {/* Outcome & Impact */}
          {project.outcome && project.outcome.length > 0 ? (
            <section aria-labelledby="outcome-heading" className="mb-16">
              <h2
                id="outcome-heading"
                className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-6"
              >
                Delivered Outcomes
              </h2>
              <ul className="space-y-3">
                {project.outcome.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-neutral-300 text-sm md:text-base leading-relaxed"
                  >
                    <span className="text-neutral-500 select-none font-mono">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* TODO Notes if present */}
          {project.todoNotes && project.todoNotes.length > 0 ? (
            <section
              aria-labelledby="todo-heading"
              className="mb-16 p-6 rounded-2xl border border-amber-800/40 bg-amber-950/20"
            >
              <h2
                id="todo-heading"
                className="text-xs uppercase tracking-wider text-amber-400 font-mono mb-3"
              >
                Verification & Source Notes
              </h2>
              <ul className="space-y-2">
                {project.todoNotes.map((note, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-amber-300/90 font-mono leading-relaxed"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Action Links */}
          <div className="pt-8 border-t border-neutral-800 flex flex-wrap items-center gap-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              Visit project ↗{" "}
              <span className="text-neutral-400 font-normal">
                {project.liveUrlDisplay}
              </span>
            </a>

            {project.adminUrl ? (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 border-b border-neutral-700 pb-1 hover:text-white hover:border-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                Admin portal ↗{" "}
                <span className="text-neutral-500 font-normal">
                  ({project.adminStatus || "Internal"})
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
