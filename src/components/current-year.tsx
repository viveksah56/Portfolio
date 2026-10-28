'use client';

import { useEffect, useState } from 'react';

type CurrentYearProps = {
    fallback: number;
};

export default function CurrentYear({ fallback }: CurrentYearProps) {
    const [year, setYear] = useState<number>(fallback);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return <>{year || fallback}</>;
}