'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react';
import { DEFAULT_THEME, THEME_COLORS, THEME_STORAGE_KEY, isTheme, type Theme } from '@/lib/themes';

type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const listeners = new Set<() => void>();

function emit() {
    listeners.forEach((listener) => listener());
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

function persistTheme(theme: Theme) {
    try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        return false;
    }
    return true;
}

function subscribe(callback: () => void) {
    listeners.add(callback);

    const onStorage = (event: StorageEvent) => {
        if (event.key !== THEME_STORAGE_KEY) return;
        applyTheme(isTheme(event.newValue) ? event.newValue : DEFAULT_THEME);
        callback();
    };

    window.addEventListener('storage', onStorage);
    return () => {
        listeners.delete(callback);
        window.removeEventListener('storage', onStorage);
    };
}

function getSnapshot(): Theme {
    const value = document.documentElement.dataset.theme;
    return isTheme(value) ? value : DEFAULT_THEME;
}

function getServerSnapshot(): Theme {
    return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const setTheme = useCallback((next: Theme) => {
        persistTheme(next);
        applyTheme(next);
        emit();
    }, []);

    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}