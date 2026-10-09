'use client';

import type { CSSProperties } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { themes, type Theme } from '@/lib/themes';

export type { Theme };
export { themes, THEME_COLORS } from '@/lib/themes';

type ThemePickerProps = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const LIGHT_TEXT = '#ffffff';
const DARK_TEXT = '#111216';

function getReadableTextColor(hex: string) {
    const value = hex.replace('#', '');
    const full = value.length === 3 ? value.replace(/./g, '$&$&') : value;
    const [r, g, b] = [0, 2, 4].map((start) => {
        const channel = parseInt(full.slice(start, start + 2), 16) / 255;
        return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 0.4 ? DARK_TEXT : LIGHT_TEXT;
}

function ThemePicker({ theme, setTheme }: ThemePickerProps) {
    return (
        <TooltipProvider delay={150}>
            <div
                role="group"
                aria-label="Color theme"
                className="flex items-center gap-0.5 rounded-full border border-border bg-foreground/3 p-0.5 sm:gap-1 sm:p-1"
            >
                {themes.map((option) => {
                    const isActive = theme === option.value;
                    const tooltipStyle = {
                        '--foreground': option.color,
                        '--background': getReadableTextColor(option.color),
                    } as CSSProperties;

                    return (
                        <Tooltip key={option.value}>
                            <TooltipTrigger
                                render={
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={() => setTheme(option.value)}
                                        aria-label={`Use ${option.label} theme`}
                                        aria-pressed={isActive}
                                        className={cn(
                                            'size-8 shrink-0 rounded-full p-0 transition-colors hover:bg-foreground/5 sm:size-9',
                                            isActive && 'bg-foreground/[0.07]',
                                        )}
                                    />
                                }
                            >
                                <i
                                    aria-hidden
                                    className={cn(
                                        'size-4 shrink-0 rounded-full border border-foreground/25 transition-transform duration-300',
                                        isActive &&
                                        'scale-110 ring-2 ring-foreground/40 ring-offset-2 ring-offset-background',
                                    )}
                                    style={{ background: option.color }}
                                />
                            </TooltipTrigger>
                            <TooltipContent
                                side="bottom"
                                sideOffset={10}
                                style={tooltipStyle}
                                className="bg-foreground fill-foreground text-background ring-1 ring-border"
                            >
                                {option.label}
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </div>
        </TooltipProvider>
    );
}

export default ThemePicker;