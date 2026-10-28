'use client';

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    useSyncExternalStore,
    type ReactNode,
} from 'react';
import { SplashScreen } from '@/components/splash/splash-screen';

type SplashContextValue = {
    replay: () => void;
};

type Mode = 'auto' | 'replay' | 'done';

const SplashContext = createContext<SplashContextValue | null>(null);

function subscribe() {
    return () => {};
}

function getSkipSnapshot() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerSkip() {
    return false;
}

export function SplashProvider({ children }: { children: ReactNode }) {
    const reduced = useSyncExternalStore(subscribe, getSkipSnapshot, getServerSkip);
    const [mode, setMode] = useState<Mode>('auto');
    const [run, setRun] = useState(0);

    const handleDone = useCallback(() => {
        document.documentElement.dataset.splash = 'seen';
        setMode('done');
    }, []);

    const replay = useCallback(() => {
        delete document.documentElement.dataset.splash;
        setRun((value) => value + 1);
        setMode('replay');
    }, []);

    const value = useMemo(() => ({ replay }), [replay]);
    const visible = mode === 'replay' || (mode === 'auto' && !reduced);

    return (
        <SplashContext.Provider value={value}>
            {children}
            {visible && <SplashScreen key={run} onDone={handleDone} />}
        </SplashContext.Provider>
    );
}

export function useSplash() {
    const context = useContext(SplashContext);
    if (!context) throw new Error('useSplash must be used within SplashProvider');
    return context;
}