'use client';

import { useSyncExternalStore } from 'react';

const CHANGED = Symbol();

function subscribe(callback: () => void) {
    const controller = new AbortController();
    controller.signal.addEventListener('abort', callback, { once: true });
    // Subscribe to year rollover only if the clock's year differs from render time.
    const now = new Date();
    const nextYearStart = new Date(now.getFullYear() + 1, 0, 1);
    const msUntilNextYear = nextYearStart.getTime() - now.getTime();
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, Math.min(Math.max(msUntilNextYear, 0), 2 ** 31 - 1));
    return () => {
        clearTimeout(timeoutId);
        controller.abort();
    };
}

let cachedSnapshot: { year: number; changedAt: number } | null = null;

function getSnapshot() {
    const year = new Date().getFullYear();
    const changedAt = Date.UTC(year, 0, 1);
    if (!cachedSnapshot || cachedSnapshot.year !== year) {
        // Cache the immutable snapshot so React can compare by reference.
        cachedSnapshot = { year, changedAt };
    }
    return cachedSnapshot;
}

function getServerSnapshot() {
    return { year: 1970, changedAt: 0 };
}

type CurrentYearProps = {
    fallback: number;
};

export default function CurrentYear({ fallback }: CurrentYearProps) {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const year = snapshot.year === 1970 ? fallback : snapshot.year;
    return <>{year || fallback}</>;
}