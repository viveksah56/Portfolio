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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "EducationalApplication",
    url: project.liveUrl,
    author: {
      "@type": "Person",
      name: "Bibek Sah",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black text-white px-6 md:px-24 py-16 selection:bg-neutral-800 selection:text-white">
        <Link
          className="text-sm text-neutral-400 hover:text-white transition-colors mb-12 inline-flex items-center gap-1.5"
          href="/projects"
        >
          ← All projects
        </Link>

        <div className="text-xs tracking-wider uppercase text-neutral-400 mb-3 font-mono">
          {project.category}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-xl md:text-2xl text-neutral-300 mb-8 font-light">
          {project.subtitle}
        </p>

        <p className="text-neutral-400 max-w-3xl leading-relaxed mb-16 text-base md:text-lg">
          {project.description}
        </p>

        <div className="border-t border-neutral-800 divide-y divide-neutral-800 mb-16">
          <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
              My Role
            </span>
            <span className="md:col-span-3 text-neutral-200">{project.role}</span>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
              Stack
            </span>
            <span className="md:col-span-3 text-neutral-200 font-mono text-sm">
              {project.stack.join(" · ")}
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

        <div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
          >
            Visit project ↗{" "}
            <span className="text-neutral-400 font-normal">
              {project.liveUrlDisplay}
            </span>
          </a>
        </div>
      </main>
    </>
  );
}
