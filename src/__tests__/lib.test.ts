import { describe, expect, it } from 'vitest';
import { caseStudies, getCaseStudy, slugify } from '@/lib/case-studies';
import { selectedProjectsData } from '@/lib/constants';
import { isTheme, THEME_COLORS, themes } from '@/lib/themes';

describe('slugify', () => {
    it('converts project names to URL-safe slugs', () => {
        expect(slugify('ExamNepal')).toBe('examnepal');
        expect(slugify('BabyCare Marketplace')).toBe('babycare-marketplace');
        expect(slugify('Dwork-it')).toBe('dwork-it');
        expect(slugify('  ApplyMyFile  ')).toBe('applymyfile');
    });

    it('strips leading and trailing hyphens', () => {
        expect(slugify('--Medishop--')).toBe('medishop');
    });
});

describe('caseStudies', () => {
    it('contains every selected project from constants plus ApplyMyFile', () => {
        const names = caseStudies.map((study) => study.name);
        for (const project of selectedProjectsData.projects) {
            expect(names).toContain(project.name);
        }
        expect(names).toContain('ApplyMyFile');
    });

    it('produces unique, non-empty slugs', () => {
        const slugs = caseStudies.map((study) => study.slug);
        expect(new Set(slugs).size).toBe(slugs.length);
        for (const slug of slugs) {
            expect(slug.length).toBeGreaterThan(0);
            expect(slug).toMatch(/^[a-z0-9-]+$/);
        }
    });

    it('every case study has the complete narrative structure', () => {
        for (const study of caseStudies) {
            expect(study.challenge.length, `${study.name} challenge`).toBeGreaterThan(40);
            expect(study.outcome.length, `${study.name} outcome`).toBeGreaterThan(40);
            expect(study.reflection.length, `${study.name} reflection`).toBeGreaterThan(40);
            expect(study.process.length, `${study.name} process`).toBeGreaterThanOrEqual(3);
            expect(study.highlights.length, `${study.name} highlights`).toBeGreaterThanOrEqual(3);
            for (const step of study.process) {
                expect(step.title.length).toBeGreaterThan(5);
                expect(step.detail.length).toBeGreaterThan(30);
            }
        }
    });

    it('exposes valid external URLs', () => {
        for (const study of caseStudies) {
            expect(study.url).toMatch(/^https:\/\/.+\..+/);
        }
    });
});

describe('getCaseStudy', () => {
    it('finds a study by slug', () => {
        const study = getCaseStudy('examnepal');
        expect(study?.name).toBe('ExamNepal');
    });

    it('returns undefined for unknown slugs', () => {
        expect(getCaseStudy('does-not-exist')).toBeUndefined();
    });
});

describe('themes', () => {
    it('matches theme picker options to THEME_COLORS keys', () => {
        expect(themes.map((theme) => theme.value).sort()).toEqual(
            Object.keys(THEME_COLORS).sort(),
        );
    });

    it('isTheme guards against invalid values', () => {
        expect(isTheme('midnight')).toBe(true);
        expect(isTheme('porcelain')).toBe(true);
        expect(isTheme('neon-pink')).toBe(false);
        expect(isTheme(null)).toBe(false);
        expect(isTheme(undefined)).toBe(false);
    });
});
