'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
    // Fire once when the calendar year rolls over, so the UI re-reads the current year.
    const now = new Date();
    const nextYearStart = new Date(now.getFullYear() + 1, 0, 1);
    const msUntilNextYear = Math.max(nextYearStart.getTime() - now.getTime(), 0);
    const timeoutId = setTimeout(callback, Math.min(msUntilNextYear, 2 ** 31 - 1));
    return () => clearTimeout(timeoutId);
}

function getSnapshot() {
    return typeof window !== 'undefined' ? new Date().getFullYear() : 2026;
}

type CurrentYearProps = {
    fallback: number;
};

export default function CurrentYear({ fallback }: CurrentYearProps) {
    const year = useSyncExternalStore(subscribe, getSnapshot, () => fallback);
    return <>{year}</>;
}