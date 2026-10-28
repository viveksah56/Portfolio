// Superseded by src/lib/constants.ts (single source of truth for site content).
// This module duplicated EMAIL, GITHUB, LINKEDIN, projects, and experience data
// that had already drifted from constants.ts (e.g. differing LinkedIn URL).
// Safe to delete this file in a follow-up commit once no consumers remain.

export { EMAIL, GITHUB, LINKEDIN, CV_REQUEST, projects, experience, type Project } from '@/lib/constants';
