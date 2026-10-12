import { selectedProjectsData } from '@/lib/constants';

export type CaseStudy = (typeof selectedProjectsData.projects)[number] & { slug: string };

export function slugify(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export const caseStudies: readonly CaseStudy[] = selectedProjectsData.projects.map((project) => ({
    ...project,
    slug: slugify(project.name),
}));

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}