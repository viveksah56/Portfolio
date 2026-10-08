import ScrollReveal from '@/components/scroll-reveal';

const lead = ['Interfaces should feel simple.', 'Systems should stay reliable.', 'I care about both.'];

const paragraphs = [
    'From React and Next.js to Java, Spring Boot, and Node.js, I work across the stack to turn complex requirements into clear, high-performance products.',
    'With 3 years of professional experience and 13+ production projects, I focus on clean architecture, performance, and experiences that hold up in the real world.',
];

const paragraphClass =
    'max-w-[40ch] text-pretty text-[17px] font-normal leading-[1.47059] tracking-[-0.022em] text-muted-foreground sm:text-[19px] sm:leading-[1.42105] sm:tracking-[0.012em] lg:text-[21px] lg:leading-[1.38105] lg:tracking-[0.011em]';

const leadClass =
    'text-balance text-[24px] font-semibold leading-[1.16667] tracking-[0.009em] text-foreground sm:text-[28px] sm:leading-[1.14286] sm:tracking-[0.007em]';

export default function StorySection() {
    return (
        <section
            id="story"
            aria-labelledby="story-heading"
            className="relative isolate overflow-hidden py-10 sm:py-14 lg:py-16"
        >
            <div className="mx-auto w-full px-5 sm:px-8 lg:px-[6%]">
                <ScrollReveal y={16} duration={0.7}>
                    <p className="type-caption flex items-center gap-4 font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                        <span className="text-brand">01</span>
                        <span>Point of view</span>
                    </p>
                </ScrollReveal>

                <ScrollReveal className="mt-6 sm:mt-10" y={40} delay={120} duration={0.9}>
                    <h2
                        id="story-heading"
                        className="max-w-[18ch] text-balance text-[clamp(2.5rem,8.5vw,8rem)] font-bold leading-[1.02] tracking-[-0.055em] text-foreground sm:max-w-[20ch]"
                    >
                        I build where <span className="text-brand">great interfaces</span> meet{' '}
                        <span className="text-brand">reliable systems.</span>
                    </h2>
                </ScrollReveal>

                <div className="mt-10 grid gap-x-10 gap-y-8 sm:mt-14 md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-12">
                    <ScrollReveal className="md:col-span-2 lg:col-span-4 lg:col-start-1" y={28} delay={100}>
                        <p className={leadClass}>
                            {lead.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                        </p>
                    </ScrollReveal>

                    {paragraphs.map((text, index) => (
                        <ScrollReveal
                            key={text}
                            className={index === 0 ? 'lg:col-span-3 lg:col-start-6' : 'lg:col-span-3 lg:col-start-10'}
                            y={28}
                            delay={200 + index * 120}
                        >
                            <p className={paragraphClass}>{text}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}