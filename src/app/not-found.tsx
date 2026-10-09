import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Page not found',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main
            id="main"
            className="mx-auto flex min-h-svh w-full max-w-3xl flex-col items-start justify-center px-5 py-20 sm:px-8"
        >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs">404</p>
            <h1 className="mt-4 text-balance text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.05em] text-foreground">
                This page doesn’t exist.
            </h1>
            <p className="mt-6 max-w-[40ch] text-pretty text-[17px] leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px]">
                The link may be broken or the page may have moved. Head back to the portfolio.
            </p>
            <Link
                href="/"
                className={cn(
                    buttonVariants({ size: 'lg' }),
                    'mt-8 h-10 gap-2 rounded-full px-5 text-[15px] font-medium sm:h-11 sm:px-6',
                )}
            >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to home
            </Link>
        </main>
    );
}