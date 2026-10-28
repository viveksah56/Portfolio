'use client';

import { memo, type CSSProperties } from 'react';
import { themes, type Theme } from '@/lib/themes';

export type { Theme };
export { themes, THEME_COLORS } from '@/lib/themes';

type ThemePickerProps = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const optionStyles = themes.map(
    (option) => ({ '--pill': option.accent, '--pill-fg': option.accentForeground }) as CSSProperties,
);

function ThemePicker({ theme, setTheme }: ThemePickerProps) {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-[max(0.5rem,env(safe-area-inset-bottom))] z-40 flex justify-center px-3 sm:bottom-[max(1rem,env(safe-area-inset-bottom))]">
            <div
                role="group"
                aria-label="Color theme"
                className="pointer-events-auto flex max-w-full items-center gap-0.5 overflow-x-auto overscroll-x-contain rounded-full border border-border bg-background/70 p-1 shadow-md backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {themes.map((option, index) => {
                    const isActive = theme === option.value;

                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setTheme(option.value)}
                            aria-pressed={isActive}
                            data-active={isActive}
                            style={optionStyles[index]}
                            className="h-7 shrink-0 touch-manipulation rounded-full px-2.5 text-xs font-medium text-muted-foreground transition-colors -outline-offset-2 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring data-[active=true]:bg-(--pill) data-[active=true]:text-(--pill-fg) sm:h-8 sm:px-3.5 sm:text-[13px]"
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(ThemePicker);