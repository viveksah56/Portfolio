'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react';
import { DEFAULT_THEME, THEME_COLORS, THEME_STORAGE_KEY, isTheme, type Theme } from '@/lib/themes';

type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
    listeners.add(callback);
    window.addEventListener('storage', callback);
    return () => {
        listeners.delete(callback);
        window.removeEventListener('storage', callback);
    };
}

function getSnapshot(): Theme {
    try {
        const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
        return isTheme(stored) ? stored : DEFAULT_THEME;
    } catch {
        return DEFAULT_THEME;
    }
}

function getServerSnapshot(): Theme {
    return DEFAULT_THEME;
}

function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'theme-color';
        document.head.appendChild(meta);
    }
    meta.content = THEME_COLORS[theme];
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const setTheme = useCallback((next: Theme) => {
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
        }
        listeners.forEach((listener) => listener());
    }, []);

    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}