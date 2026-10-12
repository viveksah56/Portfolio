export const siteConfig = {
    name: 'Bibek Sah',
    role: 'Full Stack Developer',
    location: 'Kathmandu, Nepal',
    email: 'sahbibek55@gmail.com',
    headline: ['Frontend experiences.', 'Backend systems.'],
    highlight: 'Built for real-world impact.',
    description:
        'I build scalable, production-ready web applications with React, Next.js, TypeScript, Java, Spring Boot, and Node.js. I focus on clean architecture, performance, accessible interfaces, and reliable APIs that turn complex workflows into practical products.',
} as const;

export const navLinks = [
    { label: 'Story', href: '/#story' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Work', href: '/#work' },
    { label: 'Contact', href: '/#contact' },
] as const;

export const stats = [
    { value: 13, suffix: '+', pad: 0, label: 'Production web applications delivered' },
    { value: 3, suffix: '', pad: 2, label: 'Years of professional development experience' },
    { value: 6, suffix: '+', pad: 0, label: 'Client platforms with admin dashboards' },
    { value: 4, suffix: '', pad: 2, label: 'Industries served: healthcare, education, e-commerce, corporate' },
] as const;

export const statsSummary =
    'Across 13+ production applications and three years of professional development, I have taken features from database schema and API design through to a polished, SEO-optimized interface. I focus on clean architecture, reliable APIs, Core Web Vitals, and accessible UI, and I keep refining how I design, test, and maintain systems at scale.';

export const experienceData = {
    section: '02',
    title: 'EXPERIENCE',
    subtitle: 'Professional experience',
    headline: 'Build impactful solutions across different industries.',
    experience: [
        {
            startDate: 'Jan 2023',
            endDate: 'Jan 2026',
            position: 'Full Stack Developer',
            company: 'Dwork IT Solutions',
            description:
                'Architected and delivered 13+ enterprise-level web applications across healthcare, education, e-commerce, and corporate sectors. Built React.js, Next.js, and TypeScript frontends backed by Java/Spring Boot and Node.js/Express.js REST APIs, with MongoDB, MySQL, and PostgreSQL databases. Implemented JWT authentication, role-based dashboards, a reusable Tailwind CSS and Shadcn/UI component library, and SSR, SSG, and ISR rendering that improved load times and Core Web Vitals.',
            technologies: [
                'React.js',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Express.js',
                'Java',
                'Spring Boot',
                'MongoDB',
                'MySQL',
                'PostgreSQL',
                'Tailwind CSS',
                'Shadcn/UI',
            ],
        },
    ],
} as const;

export const projectsData = [
    {
        name: 'ExamNepal',
        description:
            'Online examination and learning platform with mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations, with a companion admin dashboard for exams and question banks.',
        technologies: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI', 'Java', 'Spring Boot', 'PostgreSQL'],
        url: 'https://www.examsnepal.com',
    },
    {
        name: 'Medishop',
        description:
            'Online medical e-commerce platform for browsing and purchasing healthcare and pharmacy products, with an admin system for inventory, orders, and customer management.',
        technologies: ['Next.js', 'React.js', 'Context API', 'Tailwind CSS', 'Shadcn/UI', 'Chart.js', 'Java', 'Spring Boot', 'MySQL', 'Cloudinary'],
        url: 'https://nepal-medishop-frontend.vercel.app',
    },
    {
        name: 'BabyCare Marketplace',
        description:
            'Multi-vendor marketplace for baby and parenting products, with a dedicated admin dashboard for managing products, orders, users, and vendors.',
        technologies: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Data Visualization'],
        url: 'https://www.thebabycareapp.com',
    },
    {
        name: 'LooksCart',
        description:
            'Eyewear e-commerce platform for prescription glasses, sunglasses, and fashion eyewear, with integrated online checkout and payment processing.',
        technologies: ['React.js', 'Context API', 'Styled Components', 'Shadcn/UI', 'Payment Integration', 'Vercel'],
        url: 'https://www.lookscart.com',
    },
    {
        name: 'Dwork-it',
        description:
            'Corporate website and digital platform showcasing IT services and software solutions, built with server-side rendering and structured SEO.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO Optimization', 'SSR', 'Render'],
        url: 'https://www.dworkit.com',
    },
    {
        name: 'Hitayu Clinic',
        description:
            'Healthcare clinic website with service details, appointment information, and SEO-optimized patient guidance.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO Optimization'],
        url: 'https://www.hitayuclinic.com',
    },
    {
        name: 'ApplyMyFile',
        description:
            'Consultancy platform for visa, documentation, and application services, with multi-step client workflows in one guided experience.',
        technologies: ['React.js', 'Next.js', 'Context API', 'Tailwind CSS', 'Shadcn/UI'],
        url: 'https://www.applymyfile.com',
    },
    {
        name: 'ExamNepal Admin Panel',
        description: 'Administration dashboard for managing users, exams, question banks, and roles.',
        technologies: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Shadcn/UI', 'Node.js', 'Express.js', 'MongoDB'],
        url: 'https://admin-examsnepal.vercel.app',
    },
    {
        name: 'Medishop Admin Panel',
        description: 'Admin dashboard for managing products, inventory, orders, and customers.',
        technologies: ['React.js', 'Next.js', 'Context API', 'Shadcn/UI', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
        name: 'BabyCare Admin Panel',
        description: 'Marketplace operations dashboard for managing products, orders, users, and vendors.',
        technologies: ['React.js', 'Next.js', 'Context API', 'Shadcn/UI', 'Data Visualization'],
        url: 'https://babycare-admin-marketplace.vercel.app',
    },
    {
        name: 'KSM Nepal',
        description: 'Corporate website and digital presence.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO Optimization', 'SSG', 'Responsive Design'],
        url: 'https://www.ksmnepal.com',
    },
    {
        name: 'D.workLabs',
        description: 'Corporate website showcasing digital and technology services.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO Optimization', 'SSG', 'Responsive Design'],
        url: 'https://www.dworklabs.com',
    },
    {
        name: 'Black and White',
        description: 'Corporate and brand website.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO Optimization', 'SSG', 'Responsive Design'],
        url: 'https://blackandwhite-frontend.vercel.app',
    },
] as const;

export const selectedProjectsData = {
    section: '03',
    title: 'SELECTED PROJECTS',
    headline: ['Selected work.', 'From requirements to implementation.'],
    intro:
        'Explore the products I’ve worked on, the technologies behind them, and the solutions delivered across education, healthcare, and e-commerce.',
    projects: [
        {
            index: '01',
            category: 'Education platform',
            name: 'ExamNepal',
            monogram: 'EN',
            tagline: 'Online examinations. Learning tools. Assessment insights.',
            description:
                'An online examination and learning platform supporting mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations on a single shared platform.',
            role: 'Student-facing platform and companion admin dashboard',
            scope: ['React.js', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
            focusAreas: ['Online assessments', 'User management', 'Admin dashboard', 'Analytics'],
            url: 'https://www.examsnepal.com',
            urlLabel: 'examsnepal.com',
            visualPosition: 'left',
            imageSrc: undefined,
            imageAlt: '',
        },
        {
            index: '02',
            category: 'Healthcare e-commerce',
            name: 'Medishop',
            monogram: 'MS',
            tagline: 'Healthcare products. Inventory control. One storefront.',
            description:
                'A medical e-commerce platform for browsing and purchasing healthcare and pharmacy products, paired with an admin system for inventory, orders, and customer management.',
            role: 'End-to-end ownership of storefront and admin panel',
            scope: ['Next.js', 'React.js', 'Chart.js', 'Java', 'Spring Boot', 'MySQL', 'Cloudinary'],
            focusAreas: ['Inventory APIs', 'Order management', 'Admin analytics', 'Media handling'],
            url: 'https://nepal-medishop-frontend.vercel.app',
            urlLabel: 'nepal-medishop-frontend.vercel.app',
            visualPosition: 'right',
            imageSrc: undefined,
            imageAlt: '',
        },
        {
            index: '03',
            category: 'Multi-vendor marketplace',
            name: 'BabyCare Marketplace',
            monogram: 'BC',
            tagline: 'Many vendors. One marketplace. Clear operations.',
            description:
                'A multi-vendor marketplace for baby and parenting products with a dedicated admin dashboard for products, orders, users, and vendors.',
            role: 'Marketplace frontend, APIs, and role-based dashboards',
            scope: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
            focusAreas: ['Multi-vendor', 'Role-based access', 'Order tracking', 'Data visualization'],
            url: 'https://www.thebabycareapp.com',
            urlLabel: 'thebabycareapp.com',
            visualPosition: 'left',
            imageSrc: undefined,
            imageAlt: '',
        },
        {
            index: '04',
            category: 'E-commerce',
            name: 'LooksCart',
            monogram: 'LC',
            tagline: 'Browse eyewear. Check out securely.',
            description:
                'An eyewear e-commerce platform for prescription glasses, sunglasses, and fashion eyewear with a full purchase flow from browsing to secure payment.',
            role: 'Storefront and payment integration',
            scope: ['React.js', 'Context API', 'Styled Components', 'Shadcn/UI', 'Payment Integration'],
            focusAreas: ['Product catalog', 'Checkout', 'Payments', 'Responsive design'],
            url: 'https://www.lookscart.com',
            urlLabel: 'lookscart.com',
            visualPosition: 'right',
            imageSrc: undefined,
            imageAlt: '',
        },
        {
            index: '05',
            category: 'Corporate website',
            name: 'Dwork-it',
            monogram: 'DW',
            tagline: 'Server-rendered. Search-ready. Fast.',
            description:
                'A corporate website showcasing IT services and software solutions, with server-side rendering and structured SEO that improved organic search visibility.',
            role: 'Frontend development and SEO implementation',
            scope: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SSR'],
            focusAreas: ['SSR', 'Structured SEO', 'Core Web Vitals', 'Responsive design'],
            url: 'https://www.dworkit.com',
            urlLabel: 'dworkit.com',
            visualPosition: 'left',
            imageSrc: undefined,
            imageAlt: '',
        },
    ],
} as const;

export const skillGroups = [
    { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
    { label: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'RESTful APIs', 'JWT and OAuth'] },
    { label: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Mongoose'] },
    { label: 'UI and styling', items: ['Tailwind CSS', 'Shadcn/UI', 'Styled Components', 'Component-driven design'] },
    { label: 'State and data', items: ['Context API', 'Zustand', 'React Query', 'React Hook Form', 'Zod'] },
    { label: 'Performance and SEO', items: ['SSR', 'SSG', 'ISR', 'Code splitting', 'Lazy loading', 'SEO optimization'] },
    { label: 'Tools and delivery', items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Vercel', 'Render', 'Postman'] },
    { label: 'Testing', items: ['Jest', 'React Testing Library'] },
] as const;

export const educationData = [
    {
        title: 'Master of Computer Science and Information Technology (MCSIT)',
        institution: 'Pokhara University',
        status: 'In progress',
    },
    {
        title: 'BSc (Hons) Computer Systems Engineering (IT)',
        institution: 'ISMT College, Kathmandu',
        status: 'Graduated 2023',
    },
    {
        title: 'Advanced React Web Development Training',
        institution: 'Broadway Infosys Nepal',
        status: 'Professional certification',
    },
    {
        title: 'Java Programming',
        institution: 'Broadway Infosys Nepal',
        status: 'Certification',
    },
] as const;

export const contactData = {
    section: '05',
    title: 'CONTACT',
    headline: ['Let’s build something', 'reliable together.'],
    intro:
        'Looking for a Full Stack Developer for a production-ready web application, a stronger API layer, or a performance and SEO overhaul? I would like to hear about it.',
    emailSubject: 'Project inquiry',
    primaryLabel: 'Send an email',
    copyLabel: 'Copy email',
    copiedLabel: 'Copied',
    copyrightYear: 2026,
    details: [
        { label: 'Email', value: siteConfig.email, isEmail: true },
        { label: 'Location', value: siteConfig.location, isEmail: false },
        { label: 'Availability', value: 'Open to full-time Full Stack Developer roles', isEmail: false },
        { label: 'Response time', value: 'Within 24 hours', isEmail: false },
    ],
    socials: [
        { label: 'GitHub', href: 'https://github.com/viveksah56' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bibek-s-1067aa1a4' },
    ],
} as const;