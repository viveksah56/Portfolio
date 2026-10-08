import CountUp from '@/components/count-up';
import ScrollReveal from '@/components/scroll-reveal';
import { stats, statsSummary } from '@/lib/constants';

const itemClass =
    'flex flex-col-reverse gap-4 border-background/15 even:border-l even:pl-5 sm:gap-5 sm:even:pl-8 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0';

export default function WorkSection() {
    return (
        <section
            id="work"
            aria-labelledby="work-heading"
            className="relative isolate overflow-hidden bg-foreground py-14 text-background sm:py-20 lg:py-24"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-background/30 to-transparent"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 -z-10 size-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
            />

            <div className="mx-auto w-full px-5 sm:px-8 lg:px-[6%]">
                <ScrollReveal y={16} duration={0.7}>
                    <h2
                        id="work-heading"
                        className="type-caption flex items-center gap-4 font-semibold uppercase tracking-[0.2em] text-background/60 sm:text-sm"
                    >
                        <span className="text-brand">02</span>
                        <span>By the numbers</span>
                    </h2>
                </ScrollReveal>

                <dl className="mt-10 grid grid-cols-2 gap-y-12 sm:mt-14 lg:mt-20 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={stat.label} className={itemClass} y={32} delay={index * 120}>
                            <dt className="max-w-[22ch] text-pretty text-[15px] font-medium leading-[1.47059] tracking-[-0.016em] text-background/70 sm:text-[17px] lg:text-[19px] lg:leading-[1.42105]">
                                {stat.label}
                            </dt>
                            <dd>
                                <CountUp
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    pad={stat.pad}
                                    delay={250 + index * 120}
                                    className="block text-[clamp(2.75rem,7.5vw,7rem)] font-semibold leading-none tracking-tighter"
                                />
                            </dd>
                        </ScrollReveal>
                    ))}
                </dl>

                <ScrollReveal
                    className="mt-12 border-t border-background/15 pt-8 sm:mt-16 sm:pt-10 lg:mt-20"
                    y={24}
                    delay={200}
                >
                    <p className="max-w-[46ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-background/70 sm:text-[19px] sm:leading-[1.42105] sm:tracking-[0.012em] lg:ml-auto lg:max-w-[52ch] lg:text-[21px] lg:leading-[1.38105] lg:tracking-[0.011em]">
                        {statsSummary}
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}