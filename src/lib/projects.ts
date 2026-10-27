import { selectedProjectsData } from '@/lib/constants';
import { projects as richProjects } from '@/lib/content';

export type CaseStudy = (typeof selectedProjectsData.projects)[number] & {
    slug: string;
    challenge?: string;
    contribution?: string;
    decisions?: Array<{ title: string; detail: string }>;
    outcome?: string;
    evidence?: Array<{ label: string; href: string }>;
    status?: string;
};

export function slugify(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export const caseStudies: readonly CaseStudy[] = selectedProjectsData.projects.map((project) => {
    const slug = slugify(project.name);
    const rich = richProjects.find(
        (p) => p.slug === slug || (slug === 'babycare-marketplace' && p.slug === 'babycare'),
    );
    return {
        ...project,
        slug,
        challenge: rich?.challenge,
        contribution: rich?.contribution,
        decisions: rich?.decisions,
        outcome: rich?.outcome,
        evidence: rich?.evidence,
        status: rich?.status,
    };
});

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find(
        (study) => study.slug === slug || (slug === 'babycare' && study.slug === 'babycare-marketplace'),
    );
}