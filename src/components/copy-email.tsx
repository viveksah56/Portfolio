'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type CopyEmailProps = {
    email: string;
    label: string;
    copiedLabel: string;
    className?: string;
};

const RESET_DELAY = 2000;

export default function CopyEmail({ email, label, copiedLabel, className }: CopyEmailProps) {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, []);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), RESET_DELAY);
        } catch {
            setCopied(false);
        }
    };

    return (
        <button
            type="button"
            onClick={copy}
            className={cn(
                'inline-flex h-10 items-center justify-center gap-2 rounded-full bg-secondary px-5 text-[15px] font-medium tracking-[-0.016em] text-foreground outline-none transition-[background-color,box-shadow,transform] duration-300 hover:shadow-[0_8px_20px_-6px_color-mix(in_oklab,var(--foreground)_35%,transparent)] focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] sm:h-11 sm:px-6',
                className,
            )}
        >
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copied ? copiedLabel : label}
            <span role="status" aria-live="polite" className="sr-only">
                {copied ? 'Email address copied to clipboard' : ''}
            </span>
        </button>
    );
}