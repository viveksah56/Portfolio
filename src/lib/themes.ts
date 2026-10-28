export type Theme = 'porcelain' | 'midnight' | 'sage' | 'blue' | 'claude';

export const DEFAULT_THEME: Theme = 'midnight';
export const THEME_STORAGE_KEY = 'theme';

type ThemeOption = {
    value: Theme;
    label: string;
    color: string;
    accent: string;
    accentForeground: string;
};

export const themes: readonly ThemeOption[] = [
    { value: 'midnight', label: 'Midnight', color: '#000000', accent: '#3291ff', accentForeground: '#000000' },
    { value: 'porcelain', label: 'Porcelain', color: '#f7f6f2', accent: '#b85c46', accentForeground: '#ffffff' },
    { value: 'sage', label: 'Sage', color: '#567d45', accent: '#46702a', accentForeground: '#ffffff' },
    { value: 'blue', label: 'Cobalt', color: '#0071e3', accent: '#0071e3', accentForeground: '#ffffff' },
    { value: 'claude', label: 'Clay', color: '#d97757', accent: '#c15f3c', accentForeground: '#ffffff' },
];

export const THEME_COLORS: Record<Theme, string> = {
    porcelain: '#f7f6f2',
    midnight: '#000000',
    sage: '#e6ecd9',
    blue: '#f5f5f7',
    claude: '#faf9f5',
};

export const isTheme = (value: unknown): value is Theme =>
    typeof value === 'string' && Object.hasOwn(THEME_COLORS, value);

export const themeInitScript = `(function(){try{var c=${JSON.stringify(
    THEME_COLORS,
)},t=localStorage.getItem(${JSON.stringify(
    THEME_STORAGE_KEY,
)});if(!Object.prototype.hasOwnProperty.call(c,t))t=${JSON.stringify(
    DEFAULT_THEME,
)};document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',c[t])}catch(e){}})();`;