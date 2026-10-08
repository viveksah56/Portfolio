'use client';

type CurrentYearProps = {
    fallback: number;
};

export default function CurrentYear({ fallback }: CurrentYearProps) {
    const year = new Date().getFullYear();

    return <>{year || fallback}</>;
}