'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { themes, type Theme } from '@/lib/themes';

export type { Theme };
export { themes, THEME_COLORS } from '@/lib/themes';

function ThemePicker({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
    return (
        <div
            role="group"
            aria-label="Color theme"
            className="flex items-center gap-0.5 rounded-2xl border border-border bg-foreground/[0.03] p-1"
        >
            {themes.map((option) => {
                const isActive = theme === option.value;

                return (
                    <Button
                        type="button"
                        variant="ghost"
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        aria-label={`Use ${option.label} theme`}
                        aria-pressed={isActive}
                        className={cn(
                            'h-9 gap-2 rounded-xl px-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground',
                            isActive && 'bg-foreground/[0.07] text-foreground sm:px-3.5',
                        )}
                    >
                        <i
                            aria-hidden
                            className="size-3.5 shrink-0 rounded-full border border-foreground/25"
                            style={{ background: option.color }}
                        />
                        <span className={isActive ? 'hidden sm:inline' : 'sr-only'}>{option.label}</span>
                    </Button>
                );
            })}
        </div>
    );
}

export default ThemePicker;