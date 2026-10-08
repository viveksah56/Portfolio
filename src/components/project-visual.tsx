import Image from 'next/image';
import { cn } from '@/lib/utils';

export type VisualPosition = 'left' | 'right';

type ProjectVisualProps = {
    index: string;
    name: string;
    monogram: string;
    category: string;
    focusAreas: readonly string[];
    position?: VisualPosition;
    imageSrc?: string;
    imageAlt?: string;
    priority?: boolean;
    className?: string;
};

const CHIP_LIMIT = 4;

const chipPositionClasses = [
    'left-[8%] top-[14%] -rotate-6',
    'right-[8%] top-[16%] rotate-3',
    'bottom-[16%] left-[10%] rotate-3',
    'bottom-[14%] right-[8%] -rotate-3',
] as const;

const positionClasses: Record<VisualPosition, string> = {
    left: 'lg:order-1',
    right: 'lg:order-2',
};

export const projectRowClasses: Record<VisualPosition, string> = {
    left: 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]',
    right: 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]',
};

export default function ProjectVisual({
                                          index,
                                          name,
                                          monogram,
                                          category,
                                          focusAreas,
                                          position = 'left',
                                          imageSrc,
                                          imageAlt = '',
                                          priority = false,
                                          className,
                                      }: ProjectVisualProps) {
    const hasImage = Boolean(imageSrc);

    return (
        <div
            aria-hidden={hasImage && imageAlt ? undefined : true}
            className={cn(
                'group relative isolate aspect-square w-full overflow-hidden rounded-[2rem] bg-brand text-background transition-shadow duration-500 hover:shadow-[0_32px_80px_-24px_color-mix(in_oklab,var(--brand)_70%,transparent)] sm:rounded-[2.5rem]',
                positionClasses[position],
                className,
            )}
        >
            {imageSrc ? (
                <>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority={priority}
                        sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 50vw, 100vw"
                        className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 -z-10 bg-linear-to-t from-foreground/50 via-transparent to-foreground/20" />
                </>
            ) : (
                <>
                    <div className="absolute inset-0 -z-10 bg-linear-to-br from-background/25 via-transparent to-foreground/15" />
                    <div className="absolute left-[-10%] top-[-10%] -z-10 size-3/5 rounded-full bg-background/30 blur-3xl" />
                </>
            )}

            <p className="absolute left-[6%] top-[5%] text-[11px] font-semibold uppercase tracking-[0.2em] text-background/80 sm:text-xs">
                {index} / Project
            </p>

            {!hasImage &&
                focusAreas.slice(0, CHIP_LIMIT).map((area, chipIndex) => (
                    <div
                        key={area}
                        className={cn(
                            'absolute flex max-w-[38%] items-center gap-2 rounded-2xl bg-background/25 px-3 py-3 text-[11px] font-semibold tracking-[-0.01em] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 sm:rounded-3xl sm:px-5 sm:py-5 sm:text-sm',
                            chipPositionClasses[chipIndex],
                        )}
                    >
                        <span className="size-1.5 shrink-0 rounded-full bg-background" />
                        <span className="truncate">{area}</span>
                    </div>
                ))}

            {!hasImage && (
                <div className="absolute left-1/2 top-1/2 flex aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-6 flex-col items-center justify-center gap-[6%] rounded-[2rem] bg-background/25 shadow-[0_24px_48px_-16px_color-mix(in_oklab,var(--foreground)_35%,transparent)] backdrop-blur-xl transition-transform duration-500 group-hover:rotate-0 sm:rounded-[2.5rem]">
                    <span className="text-[clamp(2rem,9vw,5.5rem)] font-bold leading-none tracking-[-0.06em]">
                        {monogram}
                    </span>
                    <span className="max-w-[90%] truncate text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]">
                        {category}
                    </span>
                </div>
            )}

            <p className="absolute bottom-[5%] right-[6%] text-[10px] font-semibold uppercase tracking-[0.18em] text-background/80 sm:text-xs">
                {hasImage ? name : `${name} · Concept illustration`}
            </p>
        </div>
    );
}