import { selectedProjectsData } from '@/lib/constants';

export type CaseStudyProcessStep = {
    title: string;
    detail: string;
};

export type CaseStudyHighlight = {
    label: string;
    value: string;
};

type SelectedProject = (typeof selectedProjectsData.projects)[number];

export type CaseStudy = {
    index: string;
    category: string;
    name: string;
    monogram: string;
    tagline: string;
    description: string;
    role: string;
    scope: readonly string[];
    focusAreas: readonly string[];
    url: string;
    urlLabel: string;
    visualPosition: 'left' | 'right';
    slug: string;
    challenge: string;
    process: readonly CaseStudyProcessStep[];
    outcome: string;
    reflection: string;
    highlights: readonly CaseStudyHighlight[];
};

export function slugify(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

type CaseStudyBody = Pick<CaseStudy, 'challenge' | 'process' | 'outcome' | 'reflection' | 'highlights'>;

const applyMyFileProject = {
    index: '06',
    category: 'Consultancy platform',
    name: 'ApplyMyFile',
    monogram: 'AM',
    tagline: 'Visa guidance. Documentation. One guided flow.',
    description:
        'A consultancy service platform for visa, documentation, and application services, streamlining multi-step client application workflows into a single guided experience.',
    role: 'Frontend development and guided workflow design',
    scope: ['React.js', 'Next.js', 'Context API', 'Tailwind CSS', 'Shadcn/UI'],
    focusAreas: ['Multi-step workflows', 'Document guidance', 'Client portal', 'Responsive design'],
    url: 'https://www.applymyfile.com',
    urlLabel: 'applymyfile.com',
    visualPosition: 'right',
} as const satisfies Omit<SelectedProject, 'index'>;

const caseStudyContent: Record<string, CaseStudyBody> = {
    examnepal: {
        challenge:
            'Institutes and corporate organizations were running mock tests, assessments, and analytics on fragmented tools with no shared platform for exam delivery, question banks, or user management.',
        process: [
            {
                title: 'Separate student and administration workflows',
                detail:
                    'A dedicated student-facing experience for taking exams was paired with a companion admin dashboard for managing users, exams, and question banks — so operational staff and learners never share an interface.',
            },
            {
                title: 'Design the API and schema first',
                detail:
                    'Exams, question banks, roles, and results were modeled in PostgreSQL, exposed through Java/Spring Boot REST services with JWT-based authentication for consistent, secure access across both apps.',
            },
            {
                title: 'Build a shared component system',
                detail:
                    'Reusable React/Next.js/TypeScript components with Tailwind CSS and Shadcn/UI kept the two applications visually and behaviorally consistent while speeding up feature delivery.',
            },
            {
                title: 'Surface performance and outcomes through analytics',
                detail:
                    'Assessment analytics were built into the platform so institutes and corporate clients can track candidate performance instead of exporting data elsewhere.',
            },
        ],
        outcome:
            'Powers exam delivery and analytics for multiple institutes and corporate clients on a single shared platform, with the student platform and admin dashboard in production.',
        reflection:
            'Splitting student and admin experiences early — while keeping them on one backend contract — removed the workflow conflicts that usually appear when a platform tries to serve both at once.',
        highlights: [
            { label: 'Delivery', value: 'Student platform + companion admin dashboard in production' },
            { label: 'Clients', value: 'Multiple institutes and corporate organizations' },
            { label: 'Backend', value: 'Java/Spring Boot REST APIs with PostgreSQL' },
        ],
    },
    medishop: {
        challenge:
            'Healthcare commerce needs trustworthy product discovery and purchasing for customers, while operations need tight control over inventory, orders, and customers — two workloads that pull the product in different directions.',
        process: [
            {
                title: 'Connect the storefront to operations',
                detail:
                    'The Next.js storefront consumes the same Java/Spring Boot inventory and order APIs as the admin panel, so stock and order state are always consistent between customer and staff views.',
            },
            {
                title: 'Model inventory and orders properly',
                detail:
                    'MySQL schemas were designed for products, inventory, orders, and customers, with role-protected admin workflows built on top.',
            },
            {
                title: 'Manage media at scale with Cloudinary',
                detail:
                    'Product imagery and media run through Cloudinary, keeping large media out of the application bundle and the storefront fast.',
            },
            {
                title: 'Give admins Chart.js visibility',
                detail:
                    'The admin panel includes Chart.js dashboards for sales, inventory, and customer analytics so day-to-day decisions are data-backed.',
            },
        ],
        outcome:
            'An end-to-end medical e-commerce platform in production covering storefront, inventory, orders, customers, and administration.',
        reflection:
            'Owning the storefront and admin panel end-to-end made integration decisions cheaper: one API change could be validated against both customer and operations flows in the same release.',
        highlights: [
            { label: 'Ownership', value: 'End-to-end: storefront + admin panel + backend integration' },
            { label: 'Operations', value: 'Inventory, order, and customer management' },
            { label: 'Media', value: 'Cloudinary-managed product media' },
        ],
    },
    'babycare-marketplace': {
        challenge:
            'A marketplace with many vendors needs separate workflows for products, orders, users, and vendor management — without giving every vendor access to every operation.',
        process: [
            {
                title: 'Support multi-vendor operations',
                detail:
                    'The platform includes dedicated workflows for managing products, orders, users, and vendors, so each operational role works inside its own lane.',
            },
            {
                title: 'Enforce role-based dashboards',
                detail:
                    'Role-based dashboards built with React/Next.js and TypeScript give vendors and operators exactly the tools their role permits, backed by Node.js/Express.js APIs and MongoDB.',
            },
            {
                title: 'Track marketplace activity in real time',
                detail:
                    'Order tracking and data visualization were built into the dashboards so marketplace operators can see activity as it happens.',
            },
        ],
        outcome:
            'A production multi-vendor marketplace with customer shopping, role-based administration, and operational order tracking.',
        reflection:
            'Role-based access turned out to be the key architectural decision: it kept the vendor, operations, and customer surfaces simple because each one only ever renders what its role allows.',
        highlights: [
            { label: 'Model', value: 'Multi-vendor marketplace' },
            { label: 'Operations', value: 'Role-based dashboards with real-time order tracking' },
            { label: 'Stack', value: 'Node.js/Express.js + MongoDB with Cloudinary media' },
        ],
    },
    lookscart: {
        challenge:
            'Eyewear shoppers browse across prescription glasses, sunglasses, and fashion eyewear — the hard part is keeping the path from discovery to payment smooth for every category.',
        process: [
            {
                title: 'Keep the purchase journey focused',
                detail:
                    'Product browsing and checkout were designed as one continuous flow, organized around the three eyewear categories so category-specific options never break the journey.',
            },
            {
                title: 'Use component-driven UI',
                detail:
                    'React with Context API, Styled Components, and Shadcn/UI supported reusable, category-agnostic interface patterns for catalog, cart, and checkout.',
            },
            {
                title: 'Integrate payments end-to-end',
                detail:
                    'The full purchase flow — from product discovery through secure online payment — was built and integrated, with the app deployed on Vercel.',
            },
        ],
        outcome:
            'A production eyewear commerce platform supporting product discovery, online checkout, and integrated payments.',
        reflection:
            'A focused purchase flow beat a feature-rich one: fewer steps between product and payment meant fewer places for shoppers to drop off.',
        highlights: [
            { label: 'Commerce', value: 'Full purchase flow: browsing to secure payment' },
            { label: 'Categories', value: 'Prescription, sunglasses, and fashion eyewear' },
            { label: 'Deployment', value: 'Vercel' },
        ],
    },
    'dwork-it': {
        challenge:
            'A corporate IT-services website needs to present services and software solutions credibly — and be findable in organic search when prospective clients look for them.',
        process: [
            {
                title: 'Render on the server for search',
                detail:
                    'Server-side rendering in Next.js ensured complete, crawlable HTML for services and solution pages instead of client-only content.',
            },
            {
                title: 'Structure the SEO deliberately',
                detail:
                    'Metadata, headings, and structured data were planned per page so search engines could map services to queries.',
            },
            {
                title: 'Protect page-load performance',
                detail:
                    'Code splitting and lazy loading kept the marketing pages fast despite media-heavy sections, protecting Core Web Vitals.',
            },
        ],
        outcome:
            'Improved organic search visibility through SSR and structured SEO implementation, deployed via Render.',
        reflection:
            'SSR plus deliberate, page-level SEO structure — not just keywords — is what moved the visibility needle for the corporate site.',
        highlights: [
            { label: 'SEO', value: 'SSR + structured SEO implementation' },
            { label: 'Performance', value: 'Code splitting and lazy loading' },
            { label: 'Deployment', value: 'Render' },
        ],
    },
    applymyfile: {
        challenge:
            'Visa, documentation, and application services involve long, multi-step client workflows that were previously scattered across offices, emails, and manual checklists.',
        process: [
            {
                title: 'Map the client journey end-to-end',
                detail:
                    'The visa and application process was broken into guided multi-step workflows so clients always know their current step, requirements, and next action.',
            },
            {
                title: 'Centralize documentation guidance',
                detail:
                    'Documentation requirements and application services were consolidated into one platform, replacing ad-hoc guidance with consistent, self-serve information.',
            },
            {
                title: 'Keep state predictable with Context API',
                detail:
                    'React/Next.js with Context API and a Tailwind CSS/Shadcn/UI component system kept the multi-step flow state predictable across long sessions.',
            },
        ],
        outcome:
            'Streamlined multi-step client application workflows into a single guided platform for the consultancy and its clients.',
        reflection:
            'Treating the service as a guided workflow — not a form — is what made a document-heavy, high-anxiety process feel manageable to clients.',
        highlights: [
            { label: 'Domain', value: 'Visa, documentation, and application services' },
            { label: 'Workflow', value: 'Guided multi-step client application flow' },
            { label: 'Client', value: 'CenturyClassec' },
        ],
    },
};

function toCaseStudy(
    project:
        | (SelectedProject & Record<string, unknown>)
        | (typeof applyMyFileProject & Record<string, unknown>),
): CaseStudy {
    const slug = slugify(project.name);
    const body = caseStudyContent[slug];
    if (!body) throw new Error(`Missing case study content for slug: ${slug}`);
    return { ...project, slug, ...body };
}

export const caseStudies: readonly CaseStudy[] = [
    ...selectedProjectsData.projects.map((project) => toCaseStudy(project as never)),
    toCaseStudy(applyMyFileProject),
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}
