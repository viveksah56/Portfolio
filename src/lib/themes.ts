export type Theme = 'porcelain' | 'midnight' | 'sage' | 'blue' | 'claude';

export const DEFAULT_THEME: Theme = 'midnight';
export const THEME_STORAGE_KEY = 'theme';

export const themes: Array<{ value: Theme; label: string; color: string }> = [
    { value: 'porcelain', label: 'Porcelain', color: '#f7f6f2' },
    { value: 'midnight', label: 'Vercel', color: '#000000' },
    { value: 'sage', label: 'Garden', color: '#567d45' },
    { value: 'blue', label: 'Apple', color: '#0071e3' },
    { value: 'claude', label: 'Claude', color: '#d97757' },
];

export const THEME_COLORS: Record<Theme, string> = {
    porcelain: '#f7f6f2',
    midnight: '#000000',
    sage: '#e6ecd9',
    blue: '#f5f5f7',
    claude: '#faf9f5',
};

export const isTheme = (value: unknown): value is Theme =>
    typeof value === 'string' && value in THEME_COLORS;
