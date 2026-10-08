export type Theme = 'porcelain' | 'midnight' | 'sage' | 'blue';

export const DEFAULT_THEME: Theme = 'midnight';
export const THEME_STORAGE_KEY = 'theme';

export const themes: Array<{ value: Theme; label: string; color: string }> = [
    { value: 'porcelain', label: 'Porcelain', color: '#f7f6f2' },
    { value: 'midnight', label: 'Midnight', color: '#111216' },
    { value: 'sage', label: 'Sage', color: '#dfe7dc' },
    { value: 'blue', label: 'Blue', color: '#0077b6' },
];

export const THEME_COLORS: Record<Theme, string> = {
    porcelain: '#f7f6f2',
    midnight: '#111216',
    sage: '#dfe7dc',
    blue: '#0077b6',
};

export const isTheme = (value: unknown): value is Theme =>
    typeof value === 'string' && value in THEME_COLORS;