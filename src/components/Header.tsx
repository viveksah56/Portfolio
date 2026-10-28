'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle } from '@/components/ui/sheet';
import { navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';

const BRAND_NAME = 'Bibek Sah';
const SCROLL_THRESHOLD = 24;
const MOBILE_MENU_ID = 'mobile-navigation';

function subscribe(callback: () => void) {
    window.addEventListener('scroll', callback, { passive: true });
    return () => window.removeEventListener('scroll', callback);
}

function getSnapshot() {
    return window.scrollY > SCROLL_THRESHOLD;
}

function getServerSnapshot() {
    return false;
}

const navLinkClass =
    'nav-link text-[13px] font-normal tracking-[-0.01em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground xl:text-sm';

const mobileLinkClass =
    'flex items-center rounded-2xl px-4 py-3 text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-foreground transition-colors hover:text-brand focus-visible:text-brand sm:text-[28px]';

export default function Header() {
    const [open, setOpen] = useState(false);
    const scrolled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return (
        <header className="fixed inset-x-0 top-2 z-50 px-3 pt-[env(safe-area-inset-top)] sm:top-4 sm:px-6">
            <div
                data-scrolled={scrolled}
                className={cn(
                    'mx-auto flex h-12 w-full max-w-5xl items-center justify-between gap-3 rounded-2xl border border-transparent bg-transparent px-3 transition-[max-width,background-color,border-color,box-shadow] duration-500 ease-out motion-reduce:transition-none sm:h-14 sm:rounded-3xl sm:px-5 lg:px-7',
                    'data-[scrolled=true]:max-w-4xl data-[scrolled=true]:border-border data-[scrolled=true]:bg-background/60',
                    'data-[scrolled=true]:shadow-[0_8px_32px_-8px_color-mix(in_oklab,var(--foreground)_28%,transparent),inset_0_1px_0_0_color-mix(in_oklab,var(--foreground)_10%,transparent)]',
                    'data-[scrolled=true]:backdrop-blur-xl data-[scrolled=true]:backdrop-saturate-150',
                    'supports-[not(backdrop-filter)]:data-[scrolled=true]:bg-background/95',
                )}
            >
                <Link
                    href="/"
                    aria-label={`${BRAND_NAME} home`}
                    className="shrink-0 rounded-lg text-[17px] font-semibold tracking-[-0.022em] text-foreground outline-offset-4 sm:text-[19px]"
                >
                    {BRAND_NAME}
                </Link>

                <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={navLinkClass}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-10 shrink-0 rounded-xl text-foreground hover:bg-foreground/10 lg:hidden"
                    aria-label="Open menu"
                    aria-expanded={open}
                    aria-controls={MOBILE_MENU_ID}
                    onClick={() => setOpen(true)}
                >
                    <Menu className="size-5" aria-hidden="true" />
                </Button>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetContent
                        id={MOBILE_MENU_ID}
                        side="right"
                        className="w-[min(88vw,22rem)] gap-0 border-l border-border bg-background/80 p-0 shadow-2xl backdrop-blur-xl lg:hidden"
                    >
                        <div className="border-b border-border px-6 py-5">
                            <SheetTitle className="text-[19px] font-semibold tracking-[-0.022em] text-foreground">
                                {BRAND_NAME}
                            </SheetTitle>
                        </div>
                        <SheetDescription className="sr-only">Site navigation</SheetDescription>

                        <nav
                            aria-label="Mobile"
                            className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={mobileLinkClass}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}