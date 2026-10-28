// Superseded by src/lib/constants.ts and src/lib/case-studies.ts.
// Safe to delete this file in a follow-up commit.

<<<<<<< HEAD
export type Project = {
    slug: string;
    number: string;
    name: string;
    label: string;
    headline: string;
    summary: string;
    role: string;
    scope: string;
    stack: string[];
    artwork: 'rent' | 'sandbox' | 'finance' | 'map';
    tone: string;
    href?: string;
    private?: boolean;
    status: string;
    challenge: string;
    contribution: string;
    decisions: Array<{ title: string; detail: string }>;
    outcome: string;
    evidence: Array<{ label: string; href: string }>;
};

export const projects: Project[] = [
    {
        slug: 'examnepal',
        number: '01',
        name: 'ExamNepal',
        label: 'Education · Examination platform',
        headline: 'Exams, assessments, analytics, and administration in one platform.',
        summary: 'An online examination and learning platform supporting mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations, with a companion admin dashboard.',
        role: 'Full Stack Developer',
        scope: 'React · Next.js · TypeScript · Java · Spring Boot · PostgreSQL',
        stack: ['Online examinations', 'Analytics', 'Admin dashboard', 'Role management'],
        artwork: 'finance',
        tone: '#5b72ff',
        href: 'https://www.examsnepal.com',
        status: 'Production project',
        challenge: 'The platform needed to support exam delivery, assessments, analytics, and user management across students, institutes, and corporate organizations.',
        contribution: 'Built the student-facing platform and companion admin dashboard, working across React/Next.js interfaces and Java/Spring Boot backend services.',
        decisions: [
            { title: 'Separate student and administration workflows', detail: 'The product provides a dedicated student-facing experience alongside an admin dashboard for managing users, exams, and question banks.' },
            { title: 'Use a modern full-stack architecture', detail: 'The application combines React.js, Next.js, and TypeScript with Java, Spring Boot, and PostgreSQL services.' },
            { title: 'Centralize examination operations', detail: 'Mock tests, assessments, analytics, and user management are organized within a shared platform for multiple institutes and corporate clients.' },
        ],
        outcome: 'A shared examination and learning platform that supports exam delivery and analytics for multiple institutes and corporate clients.',
        evidence: [{ label: 'Visit ExamNepal', href: 'https://www.examsnepal.com' }],
    },
    {
        slug: 'medishop',
        number: '02',
        name: 'Medishop',
        label: 'Healthcare · E-commerce',
        headline: 'A complete healthcare commerce experience from product discovery to orders.',
        summary: 'An online medical e-commerce platform for browsing and purchasing healthcare and pharmacy products, paired with an administration system for inventory, orders, and customer management.',
        role: 'Full Stack Developer',
        scope: 'Next.js · React · Java · Spring Boot · MySQL · Cloudinary',
        stack: ['E-commerce', 'Inventory', 'Order management', 'Admin analytics'],
        artwork: 'rent',
        tone: '#ff6b45',
        href: 'https://nepal-medishop-frontend.vercel.app',
        status: 'Production project',
        challenge: 'The platform needed to connect customer-facing product discovery and purchasing with backend inventory, order, and customer operations.',
        contribution: 'Built the storefront and admin panel and integrated them with Java/Spring Boot backend services for inventory and order workflows.',
        decisions: [
            { title: 'Connect storefront and operations', detail: 'Customer purchasing workflows are paired with an admin system for inventory, orders, and customer management.' },
            { title: 'Build reusable UI', detail: 'The application uses React, Next.js, Tailwind CSS, and Shadcn/UI for a consistent component-driven interface.' },
            { title: 'Support product media', detail: 'Cloudinary is used as part of the project technology stack for media management.' },
        ],
        outcome: 'An end-to-end medical e-commerce platform covering storefront, inventory, orders, customers, and administration.',
        evidence: [{ label: 'Open Medishop', href: 'https://nepal-medishop-frontend.vercel.app' }],
    },
    {
        slug: 'babycare-marketplace',
        number: '03',
        name: 'BabyCare Marketplace',
        label: 'E-commerce · Multi-vendor marketplace',
        headline: 'A multi-vendor marketplace for baby and parenting products.',
        summary: 'A marketplace platform for baby and parenting products with a modern responsive shopping experience and a dedicated administration dashboard for products, orders, users, and vendors.',
        role: 'Full Stack Developer',
        scope: 'React · Next.js · TypeScript · Node.js · Express.js · MongoDB',
        stack: ['Multi-vendor', 'Role-based dashboards', 'Order tracking', 'Data visualization'],
        artwork: 'map',
        tone: '#14a46d',
        href: 'https://www.thebabycareapp.com',
        status: 'Production project',
        challenge: 'The marketplace needed to support multiple vendors while providing separate operational workflows for products, orders, users, and vendor management.',
        contribution: 'Developed the customer-facing marketplace and supported the administration workflows using React/Next.js and Node.js/Express.js services backed by MongoDB.',
        decisions: [
            { title: 'Support multi-vendor operations', detail: 'The platform includes dedicated workflows for managing products, orders, users, and vendors.' },
            { title: 'Use role-based dashboards', detail: 'Different operational workflows are organized through role-based dashboards and administration features.' },
            { title: 'Track marketplace activity', detail: 'The project includes real-time order tracking and data visualization for marketplace operations.' },
        ],
        outcome: 'A multi-vendor baby and parenting marketplace with customer shopping, role-based administration, and operational order tracking.',
        evidence: [{ label: 'Visit BabyCare', href: 'https://www.thebabycareapp.com' }],
    },
    {
        slug: 'lookscart',
        number: '04',
        name: 'LooksCart',
        label: 'E-commerce · Eyewear',
        headline: 'A focused eyewear shopping experience with integrated checkout.',
        summary: 'An eyewear e-commerce platform for prescription glasses, sunglasses, and fashion eyewear with online checkout and payment integration.',
        role: 'Frontend & Full Stack Developer',
        scope: 'React · Context API · Styled Components · Shadcn/UI',
        stack: ['Eyewear commerce', 'Product browsing', 'Online checkout', 'Payments'],
        artwork: 'sandbox',
        tone: '#f0a229',
        href: 'https://www.lookscart.com',
        status: 'Production project',
        challenge: 'The product needed a smooth path from eyewear discovery through checkout and payment while supporting different eyewear categories.',
        contribution: 'Built the e-commerce experience and purchase flow, integrating the frontend with online payment functionality.',
        decisions: [
            { title: 'Keep the purchase journey focused', detail: 'The platform organizes prescription glasses, sunglasses, and fashion eyewear around a direct product-to-checkout experience.' },
            { title: 'Use component-driven UI', detail: 'React, Context API, Styled Components, and Shadcn/UI support reusable interface patterns.' },
            { title: 'Integrate online payments', detail: 'The application includes an integrated online checkout and payment flow.' },
        ],
        outcome: 'An eyewear commerce platform supporting product discovery, online checkout, and integrated payments.',
        evidence: [{ label: 'Visit LooksCart', href: 'https://www.lookscart.com' }],
    },
    {
        slug: 'dwork-it',
        number: '05',
        name: 'Dwork-it',
        label: 'Corporate · IT Services',
        headline: 'Server-rendered, search-ready corporate web presence.',
        summary: 'A corporate website showcasing IT services and software solutions, built with server-side rendering and structured SEO that improved organic search visibility.',
        role: 'Full Stack & Frontend Developer',
        scope: 'Next.js · React.js · Tailwind CSS · Shadcn/UI · SSR',
        stack: ['Corporate platform', 'SSR', 'Structured SEO', 'Core Web Vitals'],
        artwork: 'finance',
        tone: '#3291ff',
        href: 'https://www.dworkit.com',
        status: 'Production project',
        challenge: 'The platform needed to communicate complex IT services and solutions with instant page loads, flawless Core Web Vitals, and optimal search engine indexability.',
        contribution: 'Architected and built the corporate platform using Next.js Server-Side Rendering (SSR), reusable Tailwind CSS components, and automated Schema.org metadata.',
        decisions: [
            { title: 'Server-side rendering for indexability', detail: 'Used Next.js SSR and SSG to ensure search engines receive fully rendered HTML and structured metadata on first paint.' },
            { title: 'Design system consistency', detail: 'Built a lightweight, accessible UI component layer using Tailwind CSS and Shadcn/UI for consistent typography and spacing.' },
            { title: 'Core Web Vitals optimization', detail: 'Streamlined critical CSS rendering, deferred non-critical tracking scripts, and optimized layout shifts for 100/100 performance scores.' },
        ],
        outcome: 'A lightning-fast, search-ready corporate website with top-tier search visibility and sub-second page delivery across devices.',
        evidence: [{ label: 'Visit Dwork-it', href: 'https://www.dworkit.com' }],
    },
];

export const experience = [
    {
        dates: 'Jan 2023 — Jan 2026',
        role: 'Full Stack Developer',
        company: 'Dwork IT Solutions',
        copy: 'Architected and developed 13+ enterprise-level web applications end-to-end using React.js, Next.js, and TypeScript with Java/Spring Boot and Node.js/Express.js REST APIs across healthcare, education, e-commerce, and corporate platforms. Built reusable component libraries with Tailwind CSS and Shadcn/UI, implemented SSR/SSG/ISR, authentication, state management, API integrations, performance optimization, and collaborated with UI/UX designers, backend engineers, QA, and product managers through Agile delivery.',
        tags: ['React.js', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'Node.js', 'MongoDB'],
    },
];
=======
export {};
>>>>>>> origin/fix/bugs-seo-case-studies-ci
